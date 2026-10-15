<script setup lang="ts">
/**
 * Trace une ou plusieurs fonctions en SVG, sans dependance.
 * Les fonctions sont des chaines JavaScript en x : "x**2 - 1", "exp(x)", "ln(x)", "1/x".
 * Fonctions disponibles : sqrt, exp, ln (= log), log10, sin, cos, tan, abs, floor, atan, pow, PI, E.
 * Le calcul se fait au rendu, sans acces au DOM, pour rester compatible avec le build SSR.
 */
import { computed, useId } from 'vue'

type Point = [number, number, string?]

const props = withDefaults(defineProps<{
  fonctions: string | string[]
  legende?: string[]
  xmin?: number
  xmax?: number
  ymin?: number
  ymax?: number
  pasX?: number
  pasY?: number
  /** Graduer l'axe des abscisses en multiples de pi/2 */
  piX?: boolean
  points?: Point[]
  verticales?: number[]
  horizontales?: number[]
  /** Aire grisee sous la premiere courbe, entre a et b */
  aire?: [number, number]
  hauteur?: number
}>(), {
  xmin: -5,
  xmax: 5,
  ymin: -5,
  ymax: 5,
  piX: false,
  hauteur: 320,
})

const L = 480
const M = 28 // marge pour les graduations

const couleurs = ['var(--courbe-1)', 'var(--courbe-2)', 'var(--courbe-3)', 'var(--courbe-4)']

function compiler(expr: string): (x: number) => number {
  // eslint-disable-next-line no-new-func
  return new Function('x', `const {PI,E,sqrt,exp,log,log10,sin,cos,tan,abs,floor,atan,pow}=Math; const ln=log; return (${expr});`) as (x: number) => number
}

function pasAuto(etendue: number): number {
  const brut = etendue / 10
  const p = 10 ** Math.floor(Math.log10(brut))
  for (const m of [1, 2, 5, 10]) {
    if (m * p >= brut)
      return m * p
  }
  return 10 * p
}

const H = computed(() => props.hauteur)
const sx = (x: number) => M + ((x - props.xmin) / (props.xmax - props.xmin)) * (L - 2 * M)
const sy = (y: number) => H.value - M - ((y - props.ymin) / (props.ymax - props.ymin)) * (H.value - 2 * M)

const listeFonctions = computed(() => (Array.isArray(props.fonctions) ? props.fonctions : [props.fonctions]))

const chemins = computed(() => {
  const N = 800
  const etendueY = props.ymax - props.ymin
  return listeFonctions.value.map((expr) => {
    const f = compiler(expr)
    let d = ''
    let precedent: number | null = null
    for (let i = 0; i <= N; i++) {
      const x = props.xmin + ((props.xmax - props.xmin) * i) / N
      let y: number
      try {
        y = f(x)
      }
      catch {
        y = Number.NaN
      }
      // On coupe le trace si la valeur n'existe pas, ou si elle saute brutalement (asymptote)
      const valide = Number.isFinite(y) && Math.abs(y - props.ymin) < 50 * etendueY
      if (!valide || (precedent !== null && Math.abs(y - precedent) > 3 * etendueY)) {
        precedent = valide ? y : null
        if (valide)
          d += `M${sx(x).toFixed(2)},${sy(y).toFixed(2)}`
        continue
      }
      d += `${precedent === null ? 'M' : 'L'}${sx(x).toFixed(2)},${sy(y).toFixed(2)}`
      precedent = y
    }
    return d
  })
})

const cheminAire = computed(() => {
  if (!props.aire)
    return ''
  const [a, b] = props.aire
  const f = compiler(listeFonctions.value[0])
  const N = 200
  let d = `M${sx(a).toFixed(2)},${sy(0).toFixed(2)}`
  for (let i = 0; i <= N; i++) {
    const x = a + ((b - a) * i) / N
    d += `L${sx(x).toFixed(2)},${sy(f(x)).toFixed(2)}`
  }
  d += `L${sx(b).toFixed(2)},${sy(0).toFixed(2)}Z`
  return d
})

function etiquettePi(k: number): string {
  // k = nombre de demi-pi
  if (k === 0)
    return '0'
  const signe = k < 0 ? '-' : ''
  const n = Math.abs(k)
  if (n % 2 === 0)
    return `${signe}${n / 2 === 1 ? '' : n / 2}π`
  return `${signe}${n === 1 ? '' : n}π/2`
}

const graduationsX = computed(() => {
  const res: { v: number, txt: string }[] = []
  if (props.piX) {
    const kmin = Math.ceil(props.xmin / (Math.PI / 2))
    const kmax = Math.floor(props.xmax / (Math.PI / 2))
    for (let k = kmin; k <= kmax; k++) {
      if (k !== 0)
        res.push({ v: (k * Math.PI) / 2, txt: etiquettePi(k) })
    }
    return res
  }
  const pas = props.pasX ?? pasAuto(props.xmax - props.xmin)
  for (let v = Math.ceil(props.xmin / pas) * pas; v <= props.xmax + 1e-9; v += pas) {
    if (Math.abs(v) > 1e-9)
      res.push({ v, txt: String(+v.toFixed(6)) })
  }
  return res
})

const graduationsY = computed(() => {
  const res: { v: number, txt: string }[] = []
  const pas = props.pasY ?? pasAuto(props.ymax - props.ymin)
  for (let v = Math.ceil(props.ymin / pas) * pas; v <= props.ymax + 1e-9; v += pas) {
    if (Math.abs(v) > 1e-9)
      res.push({ v, txt: String(+v.toFixed(6)) })
  }
  return res
})

// Position des axes : sur 0 si 0 est visible, sinon sur le bord
const axeY = computed(() => sx(Math.min(Math.max(0, props.xmin), props.xmax)))
const axeX = computed(() => sy(Math.min(Math.max(0, props.ymin), props.ymax)))
const idClip = `clip-${useId()}`
</script>

<template>
  <figure class="figure">
    <svg :viewBox="`0 0 ${L} ${H}`" role="img" :aria-label="`Courbe de ${listeFonctions.join(', ')}`">
      <defs>
        <clipPath :id="idClip">
          <rect :x="M" :y="M" :width="L - 2 * M" :height="H - 2 * M" />
        </clipPath>
      </defs>

      <!-- Quadrillage -->
      <g stroke="currentColor" stroke-opacity="0.1" stroke-width="1">
        <line v-for="g in graduationsX" :key="`gx${g.v}`" :x1="sx(g.v)" :x2="sx(g.v)" :y1="M" :y2="H - M" />
        <line v-for="g in graduationsY" :key="`gy${g.v}`" :x1="M" :x2="L - M" :y1="sy(g.v)" :y2="sy(g.v)" />
      </g>

      <!-- Axes -->
      <g stroke="currentColor" stroke-opacity="0.7" stroke-width="1.2">
        <line :x1="M" :x2="L - M + 6" :y1="axeX" :y2="axeX" />
        <line :x1="axeY" :x2="axeY" :y1="H - M" :y2="M - 6" />
      </g>
      <g font-size="11" fill="currentColor" fill-opacity="0.75">
        <text v-for="g in graduationsX" :key="`tx${g.v}`" :x="sx(g.v)" :y="axeX + 14" text-anchor="middle">{{ g.txt }}</text>
        <text v-for="g in graduationsY" :key="`ty${g.v}`" :x="axeY - 5" :y="sy(g.v) + 4" text-anchor="end">{{ g.txt }}</text>
        <text :x="axeY - 5" :y="axeX + 14" text-anchor="end">0</text>
      </g>

      <g :clip-path="`url(#${idClip})`">
        <!-- Aire sous la courbe -->
        <path v-if="aire" :d="cheminAire" fill="var(--courbe-aire)" stroke="none" />

        <!-- Asymptotes ou droites remarquables -->
        <g stroke="currentColor" stroke-opacity="0.55" stroke-dasharray="5 4" stroke-width="1.2">
          <line v-for="v in verticales ?? []" :key="`v${v}`" :x1="sx(v)" :x2="sx(v)" :y1="M" :y2="H - M" />
          <line v-for="h in horizontales ?? []" :key="`h${h}`" :x1="M" :x2="L - M" :y1="sy(h)" :y2="sy(h)" />
        </g>

        <!-- Courbes -->
        <path
          v-for="(d, i) in chemins"
          :key="`c${i}`"
          :d="d"
          fill="none"
          :stroke="couleurs[i % couleurs.length]"
          stroke-width="2.2"
          stroke-linejoin="round"
        />

        <!-- Points -->
        <g v-for="(p, i) in points ?? []" :key="`p${i}`">
          <circle :cx="sx(p[0])" :cy="sy(p[1])" r="3.5" fill="currentColor" />
          <text v-if="p[2]" :x="sx(p[0]) + 6" :y="sy(p[1]) - 6" font-size="12" fill="currentColor">{{ p[2] }}</text>
        </g>
      </g>
    </svg>
    <div v-if="legende?.length" class="legende">
      <span v-for="(l, i) in legende" :key="`l${i}`" class="item">
        <span class="trait" :style="{ background: couleurs[i % couleurs.length] }" />{{ l }}
      </span>
    </div>
  </figure>
</template>

<style scoped>
.legende {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  justify-content: center;
}

.item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.trait {
  display: inline-block;
  width: 18px;
  height: 3px;
  border-radius: 2px;
}
</style>

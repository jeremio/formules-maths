import { defineConfig } from 'vitepress'

const themes = [
  ['01-calcul-numerique', 'Calcul numérique'],
  ['02-arithmetique', 'Arithmétique'],
  ['03-calcul-litteral', 'Calcul littéral et équations'],
  ['04-second-degre', 'Second degré'],
  ['05-geometrie-plane', 'Géométrie plane'],
  ['06-trigonometrie', 'Trigonométrie'],
  ['07-geometrie-espace', 'Géométrie dans l\'espace'],
  ['08-fonctions', 'Fonctions (généralités)'],
  ['09-derivation', 'Dérivation et étude de fonctions'],
  ['10-exp-ln', 'Exponentielle et logarithme'],
  ['11-limites', 'Limites et continuité'],
  ['12-suites', 'Suites'],
  ['13-integration', 'Intégration et équations différentielles'],
  ['14-complexes', 'Nombres complexes'],
  ['15-probabilites', 'Probabilités et dénombrement'],
  ['16-statistiques', 'Statistiques'],
  ['17-matrices-graphes', 'Matrices et graphes'],
]

/**
 * Une formule en ligne est rendue en un seul SVG insecable : trop longue, elle deborde sur mobile.
 * On la coupe donc en plusieurs formules aux relations de premier niveau (=, \iff, \le...)
 * et apres les virgules de premier niveau, pour que le navigateur puisse passer a la ligne.
 * Les virgules decimales s'ecrivent {,} : elles sont entre accolades, donc jamais coupees.
 */
const RELATIONS = ['\\Leftrightarrow', '\\Rightarrow', '\\implies', '\\approx', '\\equiv', '\\iff', '\\neq', '\\leq', '\\geq', '\\le', '\\ge', '=', '<', '>']
const LONGUEUR_MIN = 28

function decouperFormule(tex: string): string[] {
  if (tex.length < LONGUEUR_MIN || tex.includes('\\begin'))
    return [tex]
  const morceaux: string[] = []
  let profondeur = 0
  let debut = 0
  let i = 0
  while (i < tex.length) {
    const c = tex[i]
    if (c === '\\') {
      const commande = tex.slice(i).match(/^\\([a-zA-Z]+|.)/)![0]
      if (commande === '\\left')
        profondeur++
      else if (commande === '\\right')
        profondeur--
      else if (profondeur === 0 && i > debut && RELATIONS.includes(commande)) {
        morceaux.push(tex.slice(debut, i))
        debut = i
      }
      i += commande.length
      continue
    }
    if (c === '{')
      profondeur++
    else if (c === '}')
      profondeur--
    else if (profondeur === 0 && i > debut && '=<>'.includes(c)) {
      morceaux.push(tex.slice(debut, i))
      debut = i
    }
    else if (profondeur === 0 && (c === ',' || c === ';')) {
      morceaux.push(tex.slice(debut, i + 1))
      debut = i + 1
    }
    i++
  }
  morceaux.push(tex.slice(debut))
  return morceaux.map(m => m.trim()).filter(m => m.length > 0)
}

/**
 * Un bloc $$...$$ qui aligne plusieurs formules separees par \qquad est trop large sur mobile.
 * On le coupe aux \qquad de premier niveau : chaque formule devient un bloc a part, et le
 * conteneur .formules-groupe les dispose cote a cote quand la place le permet.
 */
function decouperBloc(tex: string): string[] {
  const morceaux: string[] = []
  let profondeur = 0
  let debut = 0
  let i = 0
  while (i < tex.length) {
    const c = tex[i]
    if (c === '\\') {
      const commande = tex.slice(i).match(/^\\([a-zA-Z]+|.)/)![0]
      if (commande === '\\left' || commande === '\\begin')
        profondeur++
      else if (commande === '\\right' || commande === '\\end')
        profondeur--
      else if (profondeur === 0 && commande === '\\qquad') {
        morceaux.push(tex.slice(debut, i))
        debut = i + commande.length
      }
      i += commande.length
      continue
    }
    if (c === '{')
      profondeur++
    else if (c === '}')
      profondeur--
    i++
  }
  morceaux.push(tex.slice(debut))
  return morceaux.map(m => m.trim()).filter(m => m.length > 0)
}

/**
 * La police de MathJax n'a pas de lettres accentuees : un "é" ecrit tel quel dans \text{...}
 * est mal mesure au rendu serveur et laisse un trou. On le remplace par l'accent TeX \'e.
 */
const ACCENTS: Record<string, string> = {
  'é': '\\\'e', 'è': '\\`e', 'ê': '\\^e', 'ë': '\\"e', 'à': '\\`a', 'â': '\\^a',
  'î': '\\^i', 'ï': '\\"i', 'ô': '\\^o', 'ù': '\\`u', 'û': '\\^u', 'ç': '\\c{c}', 'É': '\\\'E',
}

function accentsTex(tex: string): string {
  return tex.replace(/[éèêëàâîïôùûçÉ]/g, c => `{${ACCENTS[c]}}`)
}

export default defineConfig({
  lang: 'fr-FR',
  title: 'Formules de maths',
  description: 'Aide-mémoire des formules de mathématiques, du collège à la Terminale',
  cleanUrls: true,
  srcExclude: ['README.md'],
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],
  lastUpdated: false,

  markdown: {
    // Le paquet textmacros (charge par defaut) gere les accents TeX (\'e) dans \text{...}
    math: true,
    config(md) {
      const rendu = md.renderer.rules.math_inline!
      md.renderer.rules.math_inline = (tokens, idx, options, env, self) => {
        const morceaux = decouperFormule(accentsTex(tokens[idx].content))
        return morceaux
          .map(m => rendu([{ ...tokens[idx], content: m } as typeof tokens[number]], 0, options, env, self))
          .join(' ')
      }
      const renduBloc = md.renderer.rules.math_block!
      md.renderer.rules.math_block = (tokens, idx, options, env, self) => {
        const morceaux = decouperBloc(accentsTex(tokens[idx].content))
        const html = morceaux
          .map(m => renduBloc([{ ...tokens[idx], content: m } as typeof tokens[number]], 0, options, env, self))
          .join('')
        return morceaux.length > 1 ? `<div class="formules-groupe">${html}</div>` : html
      }
    },
  },

  themeConfig: {
    nav: [
      { text: 'Thèmes', link: '/themes/01-calcul-numerique' },
      { text: 'Fiche mémo', link: '/memo' },
      { text: 'Lexique', link: '/lexique' },
    ],

    sidebar: [
      {
        text: 'Pour commencer',
        items: [
          { text: 'Accueil', link: '/' },
          { text: 'Lexique et notations', link: '/lexique' },
          { text: 'Fiche mémo', link: '/memo' },
        ],
      },
      {
        text: 'Thèmes',
        items: themes.map(([slug, titre], i) => ({
          text: `${i + 1}. ${titre}`,
          link: `/themes/${slug}`,
        })),
      },
    ],

    outline: { level: [2, 3], label: 'Sur cette page' },
    docFooter: { prev: 'Page précédente', next: 'Page suivante' },
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer en mode clair',
    darkModeSwitchTitle: 'Passer en mode sombre',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retour en haut',
    langMenuLabel: 'Langue',
    notFound: {
      title: 'Page introuvable',
      quote: 'Cette page n\'existe pas.',
      linkText: 'Retour à l\'accueil',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
          modal: {
            displayDetails: 'Afficher la liste détaillée',
            resetButtonTitle: 'Effacer la recherche',
            backButtonTitle: 'Fermer la recherche',
            noResultsText: 'Aucun résultat pour',
            footer: {
              selectText: 'pour sélectionner',
              navigateText: 'pour naviguer',
              closeText: 'pour fermer',
            },
          },
        },
      },
    },
  },
})

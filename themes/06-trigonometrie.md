# 6. Trigonométrie

Du triangle rectangle (SOH-CAH-TOA) au cercle trigonométrique et aux fonctions sinus et cosinus.

## 6.1 Dans le triangle rectangle <Badge text="Collège" />

<figure class="figure">
<svg viewBox="0 0 330 190" xmlns="http://www.w3.org/2000/svg">
<polygon points="40,160 260,160 260,40" fill="none" stroke="currentColor" stroke-width="2"/>
<polyline points="242,160 242,142 260,142" fill="none" stroke="currentColor" stroke-width="1.5"/>
<path d="M 85,160 A 45,45 0 0 0 79.5,138.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="92" y="152" fill="currentColor" font-size="15" font-style="italic">α</text>
<text x="150" y="180" fill="var(--courbe-1)" font-size="14" text-anchor="middle">côté adjacent</text>
<text x="268" y="105" fill="var(--courbe-3)" font-size="14">opposé</text>
<text x="60" y="96" fill="var(--courbe-2)" font-size="14">hypoténuse</text>
</svg>
<figcaption>Les noms des côtés dépendent de l'angle aigu α choisi.</figcaption>
</figure>

::: tip SOH-CAH-TOA
$$\sin \alpha = \frac{\text{opposé}}{\text{hypoténuse}} \qquad \cos \alpha = \frac{\text{adjacent}}{\text{hypoténuse}} \qquad \tan \alpha = \frac{\text{opposé}}{\text{adjacent}}$$
Moyen mnémotechnique : **SOH** (Sinus = Opposé / Hypoténuse), **CAH** (Cosinus = Adjacent / Hypoténuse), **TOA** (Tangente = Opposé / Adjacent).
:::

**Exemples**

- Hypoténuse $10$ et angle $30°$ : côté opposé $= 10 \times \sin 30° = 5$ ; côté adjacent $= 10 \times \cos 30° \approx 8{,}66$.
- Une rampe monte de $1$ m sur $12$ m de distance horizontale : $\tan \alpha = \frac{1}{12}$, donc $\alpha = \arctan\frac{1}{12} \approx 4{,}8°$.
- Pour retrouver un angle à la calculatrice, on utilise $\sin^{-1}$, $\cos^{-1}$ ou $\tan^{-1}$ (appelées aussi Arcsin, Arccos, Arctan).

::: tip Relations fondamentales
$$\cos^2 \alpha + \sin^2 \alpha = 1 \qquad \tan \alpha = \frac{\sin \alpha}{\cos \alpha}$$
:::

Exemple : si $\cos\alpha = 0{,}6$ (angle aigu), alors $\sin\alpha = \sqrt{1 - 0{,}36} = 0{,}8$ et $\tan\alpha = \frac{0{,}8}{0{,}6} = \frac{4}{3}$.

## 6.2 Le radian <Badge text="2nde" />

::: tip Conversion
$$\pi \text{ rad} = 180° \qquad x_{\text{rad}} = x_{\text{deg}} \times \frac{\pi}{180} \qquad x_{\text{deg}} = x_{\text{rad}} \times \frac{180}{\pi}$$
Un tour complet vaut $2\pi$ rad. Sur un cercle de rayon $r$, un angle de $\theta$ radians intercepte un arc de longueur $r\theta$.
:::

| Degrés | 0° | 30° | 45° | 60° | 90° | 120° |
|---|---|---|---|---|---|---|
| Radians | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\frac{2\pi}{3}$ |

| Degrés | 135° | 150° | 180° | 270° | 360° |
|---|---|---|---|---|---|
| Radians | $\frac{3\pi}{4}$ | $\frac{5\pi}{6}$ | $\pi$ | $\frac{3\pi}{2}$ | $2\pi$ |

## 6.3 Cercle trigonométrique et valeurs remarquables <Badge text="2nde" /> <Badge text="1re" />

<figure class="figure">
<svg viewBox="-150 -150 300 300" xmlns="http://www.w3.org/2000/svg">
<line x1="-140" y1="0" x2="140" y2="0" stroke="currentColor" stroke-opacity="0.6"/>
<line x1="0" y1="140" x2="0" y2="-140" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="0" cy="0" r="110" fill="none" stroke="currentColor" stroke-width="1.8"/>
<line x1="0" y1="0" x2="77.8" y2="-77.8" stroke="var(--courbe-1)" stroke-width="2"/>
<line x1="77.8" y1="-77.8" x2="77.8" y2="0" stroke="var(--courbe-3)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="77.8" y1="-77.8" x2="0" y2="-77.8" stroke="var(--courbe-2)" stroke-width="2" stroke-dasharray="4 3"/>
<circle cx="77.8" cy="-77.8" r="4" fill="currentColor"/>
<path d="M 30,0 A 30,30 0 0 0 21.2,-21.2" fill="none" stroke="currentColor"/>
<text x="34" y="-10" fill="currentColor" font-size="13" font-style="italic">x</text>
<text x="84" y="-82" fill="currentColor" font-size="14" font-style="italic">M</text>
<text x="77.8" y="16" fill="var(--courbe-3)" font-size="12" text-anchor="middle">cos x</text>
<text x="-6" y="-74" fill="var(--courbe-2)" font-size="12" text-anchor="end">sin x</text>
<text x="114" y="14" fill="currentColor" font-size="12">1</text>
<text x="4" y="-114" fill="currentColor" font-size="12">1</text>
<text x="-128" y="14" fill="currentColor" font-size="12">−1</text>
<text x="4" y="126" fill="currentColor" font-size="12">−1</text>
</svg>
<figcaption>Cercle de rayon 1. Le point M associé à l'angle x a pour coordonnées (cos x ; sin x).</figcaption>
</figure>

::: tip Définition
Sur le cercle de centre $O$ et de rayon $1$, le point $M$ associé au réel $x$ a pour coordonnées :
$$M(\cos x ; \sin x)$$
Pour tout réel $x$ : $-1 \le \cos x \le 1$, $-1 \le \sin x \le 1$, et $\cos^2 x + \sin^2 x = 1$.
:::

::: tip Valeurs remarquables (à connaître)
| $x$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| $\sin x$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ | $0$ |
| $\tan x$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | non définie | $0$ |

Astuce : la ligne des sinus se lit $\frac{\sqrt0}{2}, \frac{\sqrt1}{2}, \frac{\sqrt2}{2}, \frac{\sqrt3}{2}, \frac{\sqrt4}{2}$ ; la ligne des cosinus est la même à l'envers.
:::

::: tip Angles associés (symétries du cercle)
| | $\cos$ | $\sin$ |
|---|---|---|
| $-x$ | $\cos x$ | $-\sin x$ |
| $\pi - x$ | $-\cos x$ | $\sin x$ |
| $\pi + x$ | $-\cos x$ | $-\sin x$ |
| $\frac{\pi}{2} - x$ | $\sin x$ | $\cos x$ |
| $\frac{\pi}{2} + x$ | $-\sin x$ | $\cos x$ |
| $x + 2k\pi$ | $\cos x$ | $\sin x$ |
:::

**Exemples**

- $\cos\frac{2\pi}{3} = \cos\left(\pi - \frac{\pi}{3}\right) = -\cos\frac{\pi}{3} = -\frac{1}{2}$
- $\sin\frac{7\pi}{6} = \sin\left(\pi + \frac{\pi}{6}\right) = -\frac{1}{2}$
- $\cos\frac{25\pi}{4} = \cos\left(\frac{\pi}{4} + 6\pi\right) = \frac{\sqrt2}{2}$

## 6.4 Formules d'addition et de duplication <Badge text="1re" /> <Badge text="Ancien prog." />

::: tip Addition
$$\cos(a + b) = \cos a \cos b - \sin a \sin b$$
$$\cos(a - b) = \cos a \cos b + \sin a \sin b$$
$$\sin(a + b) = \sin a \cos b + \cos a \sin b$$
$$\sin(a - b) = \sin a \cos b - \cos a \sin b$$
:::

::: tip Duplication
$$\sin 2a = 2 \sin a \cos a$$
$$\cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$$
D'où la linéarisation :
$$\cos^2 a = \frac{1 + \cos 2a}{2} \qquad \sin^2 a = \frac{1 - \cos 2a}{2}$$
:::

**Exemples**

- $\cos\frac{\pi}{12} = \cos\left(\frac{\pi}{3} - \frac{\pi}{4}\right) = \frac12 \cdot \frac{\sqrt2}{2} + \frac{\sqrt3}{2} \cdot \frac{\sqrt2}{2} = \frac{\sqrt2 + \sqrt6}{4} \approx 0{,}966$
- Si $\sin a = \frac{3}{5}$ et $\cos a = \frac{4}{5}$ : $\sin 2a = 2 \times \frac35 \times \frac45 = \frac{24}{25}$.

## 6.5 Fonctions cosinus et sinus <Badge text="1re" /> <Badge text="Tle" />

::: tip Propriétés
- Définies sur $\mathbb{R}$, à valeurs dans $[-1 ; 1]$.
- **Périodiques** de période $2\pi$ : $\cos(x + 2\pi) = \cos x$.
- $\cos$ est **paire** (courbe symétrique par rapport à l'axe des ordonnées), $\sin$ est **impaire** (symétrique par rapport à l'origine).
- Dérivées : $\cos' = -\sin$ et $\sin' = \cos$.
:::

<Courbe :fonctions="['cos(x)', 'sin(x)']" :legende="['cos x', 'sin x']" :xmin="-6.6" :xmax="6.6" :ymin="-1.6" :ymax="1.6" pi-x :pas-y="0.5" :hauteur="240" />

## 6.6 Équations trigonométriques <Badge text="1re" /> <Badge text="Tle" />

::: tip Solutions générales ($k \in \mathbb{Z}$)
$$\cos x = \cos a \iff x = a + 2k\pi \ \text{ ou } \ x = -a + 2k\pi$$
$$\sin x = \sin a \iff x = a + 2k\pi \ \text{ ou } \ x = \pi - a + 2k\pi$$
:::

**Exemples**

- $\cos x = \frac{1}{2}$ : $x = \frac{\pi}{3} + 2k\pi$ ou $x = -\frac{\pi}{3} + 2k\pi$. Sur $[0 ; 2\pi[$ : $x = \frac{\pi}{3}$ ou $x = \frac{5\pi}{3}$.
- $\sin x = \frac{\sqrt2}{2}$ sur $[0 ; 2\pi[$ : $x = \frac{\pi}{4}$ ou $x = \frac{3\pi}{4}$.
- $\sin x = -1$ : une seule solution par tour, $x = -\frac{\pi}{2} + 2k\pi$.

## Exercices

**1.** Dans un triangle rectangle, l'hypoténuse mesure $8$ cm et un angle aigu $40°$. Calculer le côté opposé à cet angle.

::: details Correction
$8 \times \sin 40° \approx 8 \times 0{,}643 \approx 5{,}14$ cm.
:::

**2.** Convertir $\frac{5\pi}{4}$ rad en degrés, puis $210°$ en radians.

::: details Correction
$\frac{5\pi}{4} \times \frac{180}{\pi} = 225°$. Et $210 \times \frac{\pi}{180} = \frac{7\pi}{6}$.
:::

**3.** Calculer $\cos\frac{3\pi}{4}$ et $\sin\left(-\frac{\pi}{6}\right)$.

::: details Correction
$\cos\frac{3\pi}{4} = \cos\left(\pi - \frac{\pi}{4}\right) = -\frac{\sqrt2}{2}$. Et $\sin\left(-\frac{\pi}{6}\right) = -\sin\frac{\pi}{6} = -\frac{1}{2}$.
:::

**4.** Résoudre $2\sin x - 1 = 0$ sur $[0 ; 2\pi[$.

::: details Correction
$\sin x = \frac{1}{2}$, donc $x = \frac{\pi}{6}$ ou $x = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$.
:::

**5.** Sachant que $\cos x = -\frac{3}{5}$ et $x \in [0 ; \pi]$, calculer $\sin x$ puis $\cos 2x$.

::: details Correction
$\sin^2 x = 1 - \frac{9}{25} = \frac{16}{25}$, et $\sin x \ge 0$ sur $[0 ; \pi]$, donc $\sin x = \frac{4}{5}$.

$\cos 2x = 2\cos^2 x - 1 = \frac{18}{25} - 1 = -\frac{7}{25}$.
:::

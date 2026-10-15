# 9. Dérivation et étude de fonctions

La dérivée mesure la pente de la courbe. C'est l'outil central pour trouver les variations, les maximums et les minimums.

## 9.1 Nombre dérivé et tangente <Badge text="1re" />

::: tip Nombre dérivé
$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$
$f'(a)$ est le **coefficient directeur de la tangente** à la courbe au point d'abscisse $a$.
:::

::: tip Équation de la tangente en $a$
$$y = f'(a)(x - a) + f(a)$$
:::

**Exemple** : $f(x) = x^2$ en $a = 1$. $f(1) = 1$ et $f'(x) = 2x$, donc $f'(1) = 2$.

Tangente : $y = 2(x - 1) + 1$, soit $y = 2x - 1$.

<Courbe :fonctions="['x**2', '2*x - 1']" :legende="['f(x) = x²', 'tangente en 1 : y = 2x − 1']" :xmin="-2" :xmax="3" :ymin="-2" :ymax="5" :points="[[1,1,'A']]" :hauteur="300" />

## 9.2 Dérivées usuelles <Badge text="1re" /> <Badge text="Tle" />

::: tip Tableau à connaître
| $f(x)$ | $f'(x)$ | Valable sur |
|---|---|---|
| $k$ (constante) | $0$ | $\mathbb{R}$ |
| $x$ | $1$ | $\mathbb{R}$ |
| $ax + b$ | $a$ | $\mathbb{R}$ |
| $x^2$ | $2x$ | $\mathbb{R}$ |
| $x^n$ ($n$ entier) | $nx^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $\mathbb{R}^*$ |
| $\dfrac{1}{x^n}$ | $-\dfrac{n}{x^{n+1}}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $]0 ; +\infty[$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |
| $\ln x$ | $\dfrac{1}{x}$ | $]0 ; +\infty[$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |
:::

## 9.3 Règles de calcul <Badge text="1re" /> <Badge text="Tle" />

::: tip Opérations ($u$ et $v$ dérivables, $k$ constante)
$$(u + v)' = u' + v' \qquad (ku)' = ku'$$
$$(uv)' = u'v + uv'$$
$$\left(\frac{1}{v}\right)' = -\frac{v'}{v^2} \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$
:::

::: tip Composées
$$\big(f(ax + b)\big)' = a\,f'(ax + b)$$
$$(u^n)' = n\,u'\,u^{n-1} \qquad (\sqrt{u})' = \frac{u'}{2\sqrt{u}}$$
$$(e^u)' = u'\,e^u \qquad (\ln u)' = \frac{u'}{u}$$
$$\big(g(u)\big)' = u' \times g'(u) \quad \text{(cas général)}$$
:::

**Exemples**

- $f(x) = 3x^4 - 5x^2 + 7x - 2$ : $f'(x) = 12x^3 - 10x + 7$
- $f(x) = x^2 \sqrt{x}$ (produit) : $f'(x) = 2x\sqrt{x} + x^2 \cdot \frac{1}{2\sqrt{x}} = \frac{5}{2}x\sqrt{x}$
- $f(x) = \frac{2x + 1}{x - 3}$ (quotient) :
  $$f'(x) = \frac{2(x - 3) - (2x + 1) \times 1}{(x - 3)^2} = \frac{-7}{(x - 3)^2}$$
- $f(x) = (3x - 1)^5$ : $f'(x) = 5 \times 3 \times (3x - 1)^4 = 15(3x - 1)^4$
- $f(x) = e^{-2x}$ : $f'(x) = -2e^{-2x}$
- $f(x) = \ln(x^2 + 1)$ : $f'(x) = \frac{2x}{x^2 + 1}$
- $f(x) = \cos(3x)$ : $f'(x) = -3\sin(3x)$

## 9.4 Dérivée et variations <Badge text="1re" />

::: tip Théorème
Sur un intervalle :
- $f' > 0$ (sauf en des points isolés) : $f$ est **strictement croissante** ;
- $f' < 0$ : $f$ est **strictement décroissante** ;
- $f' = 0$ : $f$ est **constante**.
:::

::: tip Extremums
Si $f'$ **s'annule en changeant de signe** en $a$, alors $f$ admet un **extremum local** en $a$ :
- $f'$ passe de $+$ à $-$ : maximum ;
- $f'$ passe de $-$ à $+$ : minimum.

Attention : $f'(a) = 0$ ne suffit pas. $x^3$ a une dérivée nulle en $0$, mais pas d'extremum.
:::

## 9.5 Convexité <Badge text="Tle" />

::: tip Définitions
- $f$ est **convexe** sur $I$ si $f'' \ge 0$ (ou si $f'$ est croissante) : la courbe est **au-dessus** de ses tangentes, elle « sourit ».
- $f$ est **concave** si $f'' \le 0$ : la courbe est **en dessous** de ses tangentes, elle « fait la grimace ».
- Un **point d'inflexion** est un point où la courbe traverse sa tangente : $f''$ s'y annule **en changeant de signe**.
:::

**Exemples**

- $x^2$ et $e^x$ sont convexes sur $\mathbb{R}$ ; $\ln x$ et $\sqrt{x}$ sont concaves sur $]0 ; +\infty[$.
- $f(x) = x^3$ : $f''(x) = 6x$, négative puis positive. Point d'inflexion en $(0 ; 0)$.

Conséquence utile : comme $e^x$ est convexe, sa courbe est au-dessus de sa tangente en $0$, d'où $e^x \ge x + 1$ pour tout $x$.

## 9.6 Étude complète d'une fonction <Badge text="1re" /> <Badge text="Tle" />

::: tip Plan type
1. Ensemble de définition.
2. Limites aux bornes et asymptotes ([chapitre 11](./11-limites)).
3. Dérivée $f'(x)$, puis son signe (factoriser !).
4. Tableau de variations, avec les valeurs des extremums.
5. Si demandé : convexité, tangentes particulières, intersections avec les axes.
6. Tracé de la courbe.
:::

**Exemple déroulé** : $f(x) = x^3 - 3x^2 - 9x + 5$ sur $\mathbb{R}$.

**Limites.** En $+\infty$, $f(x)$ se comporte comme $x^3$, donc $\lim\limits_{x \to +\infty} f(x) = +\infty$. De même, $\lim\limits_{x \to -\infty} f(x) = -\infty$.

**Dérivée.** $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3)$.

**Signe.** C'est un trinôme avec $a > 0$ : positif à l'extérieur des racines $-1$ et $3$, négatif entre elles.

**Valeurs.** $f(-1) = -1 - 3 + 9 + 5 = 10$ et $f(3) = 27 - 27 - 27 + 5 = -22$.

| $x$ | $-\infty$ | | $-1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $10$ (max. local) | $\searrow$ | $-22$ (min. local) | $\nearrow$ | $+\infty$ |

**Convexité.** $f''(x) = 6x - 6$ s'annule en $1$ en changeant de signe : point d'inflexion en $(1 ; -6)$.

<Courbe :fonctions="'x**3 - 3*x**2 - 9*x + 5'" :legende="['f(x) = x³ − 3x² − 9x + 5']" :xmin="-4" :xmax="6" :ymin="-30" :ymax="20" :pas-y="10" :points="[[-1,10,'max'],[3,-22,'min'],[1,-6,'inflexion']]" />

## Exercices

**1.** Dériver $f(x) = 4x^3 - \frac{2}{x} + 3\sqrt{x}$.

::: details Correction
$f'(x) = 12x^2 + \frac{2}{x^2} + \frac{3}{2\sqrt{x}}$.
:::

**2.** Dériver $g(x) = x\,e^{2x}$ et $h(x) = \frac{x^2}{x + 1}$.

::: details Correction
$g'(x) = e^{2x} + x \times 2e^{2x} = (1 + 2x)e^{2x}$.

$h'(x) = \frac{2x(x + 1) - x^2}{(x + 1)^2} = \frac{x^2 + 2x}{(x + 1)^2} = \frac{x(x + 2)}{(x + 1)^2}$.
:::

**3.** Donner l'équation de la tangente à la courbe de $f(x) = \frac{1}{x}$ au point d'abscisse $2$.

::: details Correction
$f(2) = \frac12$ et $f'(x) = -\frac{1}{x^2}$, donc $f'(2) = -\frac14$.

Tangente : $y = -\frac{1}{4}(x - 2) + \frac{1}{2} = -\frac{1}{4}x + 1$.
:::

**4.** Une boîte sans couvercle est fabriquée à partir d'un carré de carton de $30$ cm de côté, dont on découpe un carré de côté $x$ à chaque coin. Son volume vaut $V(x) = x(30 - 2x)^2$. Pour quelle valeur de $x$ est-il maximal ?

::: details Correction
$V'(x) = (30 - 2x)^2 + x \times 2(30 - 2x)(-2) = (30 - 2x)(30 - 6x)$.

Sur $]0 ; 15[$, $V'$ s'annule en $x = 5$, passant de $+$ à $-$. Le volume est maximal pour $x = 5$ cm : $V(5) = 5 \times 400 = 2\,000$ cm³.
:::

**5.** Étudier la convexité de $f(x) = x\,e^{x}$.

::: details Correction
$f'(x) = (1 + x)e^x$ et $f''(x) = (2 + x)e^x$. Comme $e^x > 0$, $f''$ est du signe de $x + 2$. $f$ est concave sur $]-\infty ; -2]$, convexe sur $[-2 ; +\infty[$, avec un point d'inflexion en $x = -2$.
:::

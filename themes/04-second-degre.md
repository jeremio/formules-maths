# 4. Second degré

Les trinômes $ax^2 + bx + c$ : discriminant, racines, signe et parabole. C'est l'un des outils les plus utilisés au lycée.

## 4.1 Forme développée, canonique, factorisée <Badge text="1re" />

::: tip Les trois écritures d'un trinôme ($a \neq 0$)
| Forme | Écriture | Ce qu'on y lit |
|---|---|---|
| développée | $f(x) = ax^2 + bx + c$ | $f(0) = c$ |
| canonique | $f(x) = a(x - \alpha)^2 + \beta$ | le sommet $S(\alpha ; \beta)$ |
| factorisée | $f(x) = a(x - x_1)(x - x_2)$ | les racines $x_1$ et $x_2$ |

$$\alpha = -\frac{b}{2a} \qquad \beta = f(\alpha)$$
:::

**Exemple** : $f(x) = 2x^2 - 8x + 6$.

- $\alpha = -\frac{-8}{2 \times 2} = 2$ et $\beta = f(2) = 8 - 16 + 6 = -2$.
- Forme canonique : $f(x) = 2(x - 2)^2 - 2$.
- Forme factorisée : $f(x) = 2(x - 1)(x - 3)$.

## 4.2 Discriminant et racines <Badge text="1re" />

::: tip Discriminant
$$\Delta = b^2 - 4ac$$
:::

::: tip Solutions de $ax^2 + bx + c = 0$
| Signe de $\Delta$ | Solutions | Factorisation |
|---|---|---|
| $\Delta > 0$ | deux racines $x_1 = \dfrac{-b - \sqrt{\Delta}}{2a}$ et $x_2 = \dfrac{-b + \sqrt{\Delta}}{2a}$ | $a(x - x_1)(x - x_2)$ |
| $\Delta = 0$ | une racine double $x_0 = -\dfrac{b}{2a}$ | $a(x - x_0)^2$ |
| $\Delta < 0$ | aucune racine réelle | impossible dans $\mathbb{R}$ |

Si $\Delta < 0$, il y a deux racines **complexes** conjuguées : voir le [chapitre 14](./14-complexes).
:::

**Exemples**

- $x^2 - 5x + 6 = 0$ : $\Delta = 25 - 24 = 1$, d'où
  $$x_1 = \frac{5 - 1}{2} = 2 \qquad x_2 = \frac{5 + 1}{2} = 3$$
- $4x^2 + 4x + 1 = 0$ : $\Delta = 16 - 16 = 0$, racine double $x_0 = -\frac{4}{8} = -\frac{1}{2}$. En effet, $4x^2 + 4x + 1 = (2x + 1)^2$.
- $x^2 + x + 1 = 0$ : $\Delta = 1 - 4 = -3 < 0$, pas de solution réelle.
- $3x^2 - 2x - 5 = 0$ : $\Delta = 4 + 60 = 64$, $\sqrt{\Delta} = 8$, d'où
  $$x_1 = \frac{2 - 8}{6} = -1 \qquad x_2 = \frac{2 + 8}{6} = \frac{5}{3}$$

::: tip Cas particuliers (pas besoin de $\Delta$)
- $c = 0$ : $ax^2 + bx = x(ax + b)$, racines $0$ et $-\frac{b}{a}$.
- $b = 0$ : $ax^2 + c = 0 \iff x^2 = -\frac{c}{a}$.
- Racine évidente : si $a + b + c = 0$, alors $1$ est racine et l'autre vaut $\frac{c}{a}$.
:::

## 4.3 Somme et produit des racines <Badge text="1re" />

::: tip Relations entre coefficients et racines
Si $\Delta \ge 0$ :
$$x_1 + x_2 = -\frac{b}{a} \qquad x_1 \times x_2 = \frac{c}{a}$$
Inversement, deux nombres de somme $S$ et de produit $P$ sont les solutions de $x^2 - Sx + P = 0$.
:::

**Exemples**

- $x^2 - 7x + 12 = 0$ : on cherche deux nombres de somme $7$ et de produit $12$, ce sont $3$ et $4$.
- $2x^2 + 3x - 5 = 0$ : $1$ est racine évidente ($2 + 3 - 5 = 0$), l'autre vaut $\frac{c}{a} \div 1 = -\frac{5}{2}$.

## 4.4 Signe du trinôme <Badge text="1re" />

::: tip Règle
$ax^2 + bx + c$ est du **signe de $a$**, **sauf entre les racines** (quand il y en a).
:::

| $\Delta$ | Signe de $f(x)$ |
|---|---|
| $\Delta > 0$ | signe de $a$ à l'extérieur de $[x_1 ; x_2]$, signe contraire entre $x_1$ et $x_2$ |
| $\Delta = 0$ | signe de $a$ partout, nul en $x_0$ |
| $\Delta < 0$ | signe de $a$ partout |

**Exemple** : résoudre $-x^2 + x + 6 \ge 0$.

$\Delta = 1 + 24 = 25$, racines $x_1 = \frac{-1 + 5}{-2} = -2$ et $x_2 = \frac{-1 - 5}{-2} = 3$. Comme $a = -1 < 0$, le trinôme est négatif à l'extérieur des racines et positif entre elles.

Solution : $x \in [-2 ; 3]$.

## 4.5 La parabole <Badge text="2nde" /> <Badge text="1re" />

::: tip Représentation graphique de $f(x) = ax^2 + bx + c$
- C'est une **parabole** de sommet $S(\alpha ; \beta)$, avec $\alpha = -\frac{b}{2a}$.
- Elle a pour axe de symétrie la droite verticale $x = \alpha$.
- Si $a > 0$, elle est tournée vers le haut (minimum en $\alpha$). Si $a < 0$, elle est tournée vers le bas (maximum en $\alpha$).
- Les racines sont les abscisses des points d'intersection avec l'axe des abscisses.
:::

<Courbe :fonctions="['x**2 - 2*x - 3', '-0.5*x**2 + x + 2', 'x**2 + 2*x + 3']" :legende="['x² − 2x − 3 (Δ > 0, a > 0)', '−0,5x² + x + 2 (Δ > 0, a < 0)', 'x² + 2x + 3 (Δ < 0)']" :xmin="-5" :xmax="5" :ymin="-5" :ymax="7" :points="[[1,-4,'S'],[-1,0],[3,0]]" :verticales="[1]" />

Pour $x^2 - 2x - 3$ : sommet $S(1 ; -4)$, racines $-1$ et $3$, axe de symétrie $x = 1$.

**Tableau de variations** de $f(x) = 2x^2 - 8x + 6$ ($a > 0$, $\alpha = 2$, $\beta = -2$) :

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f(x)$ | | $\searrow$ | $-2$ (minimum) | $\nearrow$ | |

## Exercices

**1.** Résoudre $2x^2 - 3x - 2 = 0$.

::: details Correction
$\Delta = 9 + 16 = 25$. Les racines sont $\frac{3 - 5}{4} = -\frac{1}{2}$ et $\frac{3 + 5}{4} = 2$.
:::

**2.** Mettre $f(x) = x^2 + 6x + 5$ sous forme canonique. Quel est son minimum ?

::: details Correction
$\alpha = -3$ et $\beta = f(-3) = 9 - 18 + 5 = -4$. Donc $f(x) = (x + 3)^2 - 4$. Le minimum vaut $-4$, atteint en $x = -3$.
:::

**3.** Résoudre $x^2 - 4x + 7 < 0$.

::: details Correction
$\Delta = 16 - 28 = -12 < 0$ et $a = 1 > 0$ : le trinôme est toujours strictement positif. Il n'y a **aucune solution**.
:::

**4.** Un rectangle a un périmètre de $34$ cm et une aire de $60$ cm². Quelles sont ses dimensions ?

::: details Correction
Les côtés ont pour somme $17$ et pour produit $60$ : ce sont les solutions de $x^2 - 17x + 60 = 0$. $\Delta = 289 - 240 = 49$, d'où $x = \frac{17 \pm 7}{2}$, soit $5$ cm et $12$ cm.
:::

**5.** Factoriser $3x^2 + 6x - 9$.

::: details Correction
$a + b + c = 3 + 6 - 9 = 0$, donc $1$ est racine. L'autre vaut $\frac{c}{a} = -3$. Donc $3x^2 + 6x - 9 = 3(x - 1)(x + 3)$.
:::

# 8. Fonctions (généralités)

Le vocabulaire des fonctions et les fonctions de référence à reconnaître au premier coup d'œil.

## 8.1 Vocabulaire <Badge text="Collège" /> <Badge text="2nde" />

::: tip Définitions
Une fonction $f$ associe à chaque nombre $x$ de son **ensemble de définition** $D_f$ un unique nombre $f(x)$.
- $f(x)$ est l'**image** de $x$.
- $x$ est **un antécédent** de $f(x)$ (un nombre peut avoir plusieurs antécédents, ou aucun).
- La **courbe représentative** $\mathcal{C}_f$ est l'ensemble des points $(x ; f(x))$.
- Un point $M(a ; b)$ est sur $\mathcal{C}_f$ si et seulement si $f(a) = b$.
:::

**Exemples** avec $f(x) = x^2 - 3$ :

- L'image de $2$ est $f(2) = 4 - 3 = 1$.
- Les antécédents de $6$ : $x^2 - 3 = 6 \iff x^2 = 9 \iff x = 3$ ou $x = -3$.
- $-5$ n'a pas d'antécédent, car $x^2 - 3 \ge -3$ pour tout $x$.
- Le point $(1 ; -2)$ est sur la courbe car $f(1) = -2$ ; le point $(0 ; 1)$ n'y est pas.

::: tip Ensembles de définition à surveiller
- $\frac{1}{u(x)}$ : il faut $u(x) \neq 0$.
- $\sqrt{u(x)}$ : il faut $u(x) \ge 0$.
- $\ln(u(x))$ : il faut $u(x) > 0$.
:::

Exemple : $g(x) = \frac{\sqrt{x}}{x - 4}$ est définie pour $x \ge 0$ et $x \neq 4$, soit $D_g = [0 ; 4[ \cup ]4 ; +\infty[$.

## 8.2 Fonctions affines et linéaires <Badge text="Collège" />

::: tip Fonction affine : $f(x) = mx + p$
- Sa courbe est une **droite**.
- $m$ est le **coefficient directeur** : quand $x$ augmente de $1$, $f(x)$ augmente de $m$.
- $p$ est l'**ordonnée à l'origine** : $f(0) = p$.
- Si $m > 0$, $f$ est croissante ; si $m < 0$, décroissante ; si $m = 0$, constante.
- Calcul de $m$ à partir de deux points : $m = \dfrac{f(b) - f(a)}{b - a}$.

Cas particulier, la fonction **linéaire** $f(x) = mx$ ($p = 0$) : sa droite passe par l'origine, et elle traduit une situation de **proportionnalité**.
:::

**Exemples**

- Un taxi facture $4$ € de prise en charge et $1{,}50$ € par km : $f(x) = 1{,}5x + 4$. Pour $12$ km : $f(12) = 22$ €.
- $f(2) = 7$ et $f(5) = 1$ : $m = \frac{1 - 7}{5 - 2} = -2$, puis $7 = -2 \times 2 + p$ donne $p = 11$. Donc $f(x) = -2x + 11$.

## 8.3 Fonctions de référence <Badge text="2nde" />

::: tip À connaître
| Fonction | Définie sur | Variations | Particularité |
|---|---|---|---|
| carré $x^2$ | $\mathbb{R}$ | décroissante sur $]-\infty ; 0]$, croissante sur $[0 ; +\infty[$ | paire, parabole |
| inverse $\frac{1}{x}$ | $\mathbb{R}^* = \mathbb{R} \setminus \{0\}$ | décroissante sur $]-\infty ; 0[$ et sur $]0 ; +\infty[$ | impaire, hyperbole |
| racine carrée $\sqrt{x}$ | $[0 ; +\infty[$ | croissante | $\sqrt{x} \ge 0$ |
| cube $x^3$ | $\mathbb{R}$ | croissante | impaire |
| valeur absolue $\vert x \vert$ | $\mathbb{R}$ | décroissante puis croissante | paire, en forme de V |
:::

<Courbe :fonctions="['x**2', '1/x', 'sqrt(x)', 'x**3']" :legende="['x²', '1/x', '√x', 'x³']" :xmin="-3" :xmax="3" :ymin="-3" :ymax="3" :pas-x="1" :pas-y="1" />

::: tip Comparaisons utiles
- Sur $[0 ; 1]$ : $x^3 \le x^2 \le x \le \sqrt{x}$.
- Sur $[1 ; +\infty[$ : $\sqrt{x} \le x \le x^2 \le x^3$.
:::

Exemple : $0{,}5^2 = 0{,}25 < 0{,}5$, mais $3^2 = 9 > 3$.

## 8.4 Sens de variation <Badge text="2nde" />

::: tip Définitions
Sur un intervalle $I$ :
- $f$ est **croissante** si $a < b \implies f(a) \le f(b)$ (l'ordre est conservé) ;
- $f$ est **décroissante** si $a < b \implies f(a) \ge f(b)$ (l'ordre est inversé).

Un **maximum** est la plus grande valeur prise par $f$, un **minimum** la plus petite.
:::

On résume les variations dans un **tableau de variations**. Exemple pour $f(x) = x^2$ :

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f(x)$ | | $\searrow$ | $0$ | $\nearrow$ | |

Le moyen le plus efficace pour étudier les variations est la dérivée : voir le [chapitre 9](./09-derivation).

## 8.5 Parité <Badge text="2nde" /> <Badge text="Ancien prog." />

::: tip Définitions (ensemble de définition symétrique par rapport à $0$)
- $f$ est **paire** si $f(-x) = f(x)$ : la courbe est symétrique par rapport à l'axe des ordonnées.
- $f$ est **impaire** si $f(-x) = -f(x)$ : la courbe est symétrique par rapport à l'origine.
:::

**Exemples**

- $x^2$, $x^4$, $\cos x$ et $|x|$ sont paires.
- $x$, $x^3$, $\frac{1}{x}$ et $\sin x$ sont impaires.
- $f(x) = x^2 + x$ n'est ni paire ni impaire : $f(-1) = 0$ alors que $f(1) = 2$.

## 8.6 Opérations et composition <Badge text="1re" /> <Badge text="Tle" />

::: tip Composée
$$(g \circ f)(x) = g\big(f(x)\big)$$
On applique d'abord $f$, puis $g$ au résultat. En général, $g \circ f \neq f \circ g$.
:::

::: tip Transformations de courbes
| Fonction | Effet sur la courbe de $f$ |
|---|---|
| $f(x) + k$ | translation verticale de $k$ |
| $f(x + k)$ | translation horizontale de $-k$ |
| $-f(x)$ | symétrie par rapport à l'axe des abscisses |
| $f(-x)$ | symétrie par rapport à l'axe des ordonnées |
| $k \cdot f(x)$ | étirement vertical de facteur $k$ |
:::

**Exemples**

- $f(x) = x + 1$ et $g(x) = x^2$ : $(g \circ f)(x) = (x + 1)^2$, alors que $(f \circ g)(x) = x^2 + 1$.
- La courbe de $(x - 2)^2 + 3$ est celle de $x^2$ décalée de $2$ vers la droite et de $3$ vers le haut.

<Courbe :fonctions="['x**2', '(x-2)**2 + 3']" :legende="['x²', '(x − 2)² + 3']" :xmin="-3" :xmax="5" :ymin="-1" :ymax="9" :points="[[0,0],[2,3,'S']]" />

## Exercices

**1.** Soit $f(x) = 2x^2 - 5$. Calculer l'image de $-3$, puis les antécédents de $13$.

::: details Correction
$f(-3) = 18 - 5 = 13$. Antécédents de $13$ : $2x^2 = 18$, donc $x^2 = 9$, soit $x = 3$ ou $x = -3$.
:::

**2.** Donner l'ensemble de définition de $h(x) = \sqrt{6 - 2x}$.

::: details Correction
Il faut $6 - 2x \ge 0$, soit $x \le 3$. $D_h = \left]-\infty ; 3\right]$.
:::

**3.** Une fonction affine vérifie $f(-1) = 5$ et $f(3) = -3$. Trouver son expression.

::: details Correction
$m = \frac{-3 - 5}{3 - (-1)} = -2$. Puis $5 = -2 \times (-1) + p$, donc $p = 3$. $f(x) = -2x + 3$.
:::

**4.** La fonction $f(x) = \frac{x^3}{x^2 + 1}$ est-elle paire, impaire ou ni l'un ni l'autre ?

::: details Correction
$f(-x) = \frac{-x^3}{x^2 + 1} = -f(x)$ : elle est impaire.
:::

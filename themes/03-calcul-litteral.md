# 3. Calcul littéral et équations

Calculer avec des lettres : développer, factoriser, résoudre des équations et des inéquations.

## 3.1 Développer <Badge text="Collège" />

::: tip Distributivité
$$k(a + b) = ka + kb$$
$$(a + b)(c + d) = ac + ad + bc + bd$$
:::

**Exemples**

- $3(2x - 5) = 6x - 15$
- $-2(x - 4) = -2x + 8$ (attention au signe)
- $(x + 3)(2x - 1) = 2x^2 - x + 6x - 3 = 2x^2 + 5x - 3$

::: tip Supprimer des parenthèses
- Précédées d'un $+$ : on les enlève sans rien changer.
- Précédées d'un $-$ : on les enlève en **changeant tous les signes** à l'intérieur.

$$a - (b - c + d) = a - b + c - d$$
:::

## 3.2 Identités remarquables <Badge text="Collège" />

::: tip Les trois identités à connaître par cœur
$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$
$$(a + b)(a - b) = a^2 - b^2$$
:::

**Exemples (développer)**

- $(x + 5)^2 = x^2 + 10x + 25$
- $(3x - 2)^2 = 9x^2 - 12x + 4$
- $(2x + 7)(2x - 7) = 4x^2 - 49$
- Calcul mental : $102^2 = (100 + 2)^2 = 10\,000 + 400 + 4 = 10\,404$ ; $49 \times 51 = (50-1)(50+1) = 2\,500 - 1 = 2\,499$

::: warning Piège classique
$(a + b)^2 \neq a^2 + b^2$. Par exemple $(3 + 4)^2 = 49$, alors que $3^2 + 4^2 = 25$.
:::

::: tip Pour aller plus loin
$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
Pour $(a+b)^n$ en général, voir le binôme de Newton au [chapitre 15](./15-probabilites).
:::

## 3.3 Factoriser <Badge text="Collège" /> <Badge text="2nde" />

Factoriser, c'est transformer une **somme** en **produit**. C'est l'opération inverse du développement.

::: tip Trois méthodes
1. **Facteur commun** : $ka + kb = k(a + b)$
2. **Identité remarquable** lue à l'envers : $a^2 - b^2 = (a - b)(a + b)$, $a^2 + 2ab + b^2 = (a+b)^2$, etc.
3. **Second degré** : avec les racines, voir le [chapitre 4](./04-second-degre).
:::

**Exemples**

- $6x^2 - 9x = 3x(2x - 3)$
- $(x + 1)(2x - 3) + (x + 1)(x + 5)$ : le facteur commun est $(x + 1)$, d'où
  $$(x + 1)\big[(2x - 3) + (x + 5)\big] = (x + 1)(3x + 2)$$
- $x^2 - 16 = (x - 4)(x + 4)$
- $9x^2 - 30x + 25 = (3x - 5)^2$
- $(2x + 1)^2 - 9 = (2x + 1 - 3)(2x + 1 + 3) = (2x - 2)(2x + 4)$

## 3.4 Équations du premier degré <Badge text="Collège" />

::: tip Règles
On ne change pas les solutions d'une équation si on :
- ajoute ou soustrait le même nombre aux deux membres ;
- multiplie ou divise les deux membres par le même nombre **non nul**.

$$ax + b = 0 \iff x = -\frac{b}{a} \quad (a \neq 0)$$
:::

**Exemples**

- $3x + 7 = 22 \iff 3x = 15 \iff x = 5$
- $5x - 2 = 2x + 10 \iff 3x = 12 \iff x = 4$
- $\dfrac{x}{4} - \dfrac{1}{2} = \dfrac{x}{3}$ : on multiplie tout par $12$, d'où $3x - 6 = 4x$, donc $x = -6$.

::: tip Équation produit nul
$$A \times B = 0 \iff A = 0 \text{ ou } B = 0$$
:::

Exemple : $(2x - 6)(x + 5) = 0 \iff x = 3$ ou $x = -5$.

::: tip Équation quotient nul
$$\frac{A}{B} = 0 \iff A = 0 \text{ et } B \neq 0$$
:::

Exemple : $\dfrac{x - 2}{x + 1} = 0 \iff x = 2$ (et $2 \neq -1$, c'est bon).

::: tip Équation $x^2 = a$
- Si $a > 0$ : deux solutions, $x = \sqrt{a}$ ou $x = -\sqrt{a}$.
- Si $a = 0$ : une solution, $x = 0$.
- Si $a < 0$ : aucune solution réelle.
:::

Exemple : $x^2 = 49 \iff x = 7$ ou $x = -7$.

## 3.5 Inéquations <Badge text="Collège" /> <Badge text="2nde" />

::: tip Règles
Mêmes règles que pour les équations, **sauf** :

quand on multiplie ou divise par un nombre **négatif**, on **change le sens** de l'inégalité.
$$-2x < 6 \iff x > -3$$
:::

**Exemples**

- $4x - 3 \le 9 \iff 4x \le 12 \iff x \le 3$, soit $x \in \left]-\infty ; 3\right]$
- $5 - 3x > 11 \iff -3x > 6 \iff x < -2$, soit $x \in \left]-\infty ; -2\right[$

::: tip Notation des intervalles
| Inégalité | Intervalle | Crochet |
|---|---|---|
| $a \le x \le b$ | $[a ; b]$ | fermé : $a$ et $b$ inclus |
| $a < x < b$ | $]a ; b[$ | ouvert : $a$ et $b$ exclus |
| $x \ge a$ | $[a ; +\infty[$ | toujours ouvert du côté de l'infini |
| $x < b$ | $]-\infty ; b[$ | |
:::

## 3.6 Tableau de signes <Badge text="2nde" />

::: tip Signe de $ax + b$ ($a \neq 0$)
$ax + b$ s'annule en $x = -\frac{b}{a}$. Il est du **signe de $a$ à droite** de cette valeur, et du signe contraire à gauche.
:::

**Exemple : résoudre $(2x - 4)(-x + 3) > 0$**

$2x - 4 = 0$ pour $x = 2$ ; $-x + 3 = 0$ pour $x = 3$.

| $x$ | $-\infty$ | | $2$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $2x - 4$ | | $-$ | $0$ | $+$ | $\vert$ | $+$ | |
| $-x + 3$ | | $+$ | $\vert$ | $+$ | $0$ | $-$ | |
| **Produit** | | $-$ | $0$ | $+$ | $0$ | $-$ | |

Solution : $x \in \left]2 ; 3\right[$.

Pour un **quotient**, même tableau, mais on met une **double barre** $\|$ là où le dénominateur s'annule (valeur interdite).

## 3.7 Systèmes de deux équations <Badge text="Collège" /> <Badge text="2nde" />

::: tip Deux méthodes
$$\begin{cases} ax + by = c \\ a'x + b'y = c' \end{cases}$$
- **Substitution** : on exprime une inconnue en fonction de l'autre dans une équation, puis on remplace dans l'autre.
- **Combinaison** : on multiplie les équations pour que, par addition ou soustraction, une inconnue disparaisse.

Il y a une solution unique si $ab' - a'b \neq 0$.
:::

**Exemple par substitution**
$$\begin{cases} x + 2y = 8 \\ 3x - y = 3 \end{cases}$$
La première donne $x = 8 - 2y$. On remplace : $3(8 - 2y) - y = 3$, d'où $24 - 7y = 3$, donc $y = 3$, puis $x = 2$.

**Exemple par combinaison**
$$\begin{cases} 2x + 3y = 13 \\ 5x - 3y = 1 \end{cases}$$
On additionne : $7x = 14$, donc $x = 2$, puis $3y = 13 - 4 = 9$, donc $y = 3$.

**Problème type** : $3$ cafés et $2$ croissants coûtent $7{,}40$ €, $2$ cafés et $3$ croissants coûtent $7{,}10$ €. Avec $c$ le prix d'un café et $k$ celui d'un croissant :
$$\begin{cases} 3c + 2k = 7{,}40 \\ 2c + 3k = 7{,}10 \end{cases}$$
On multiplie la première par $3$ et la seconde par $2$, puis on soustrait : $5c = 22{,}20 - 14{,}20 = 8$, d'où $c = 1{,}60$ € et $k = 1{,}30$ €.

## 3.8 Valeur absolue <Badge text="2nde" /> <Badge text="Ancien prog." />

::: tip Définition
$$|x| = \begin{cases} x & \text{si } x \ge 0 \\ -x & \text{si } x < 0 \end{cases}$$
$|x - a|$ est la **distance** entre $x$ et $a$ sur la droite des réels.
:::

::: tip Propriétés
$$|ab| = |a| \times |b| \qquad |a + b| \le |a| + |b| \qquad \sqrt{x^2} = |x|$$
$$|x - a| \le r \iff a - r \le x \le a + r$$
:::

**Exemples**

- $|-7| = 7$ ; $|3 - \pi| = \pi - 3$
- $|x - 2| = 5 \iff x = 7$ ou $x = -3$
- $|x - 1| < 3 \iff -2 < x < 4$

## Exercices

**1.** Développer et réduire $(2x - 3)^2 - (x + 1)(x - 1)$.

::: details Correction
$(4x^2 - 12x + 9) - (x^2 - 1) = 3x^2 - 12x + 10$.
:::

**2.** Factoriser $25x^2 - 4$, puis $(x - 3)^2 - 2x(x - 3)$.

::: details Correction
$25x^2 - 4 = (5x - 2)(5x + 2)$.

$(x - 3)\big[(x - 3) - 2x\big] = (x - 3)(-x - 3) = -(x - 3)(x + 3)$.
:::

**3.** Résoudre $\dfrac{2x + 1}{3} = \dfrac{x - 4}{2}$.

::: details Correction
Produit en croix : $2(2x + 1) = 3(x - 4)$, d'où $4x + 2 = 3x - 12$, donc $x = -14$.
:::

**4.** Résoudre $\dfrac{x + 2}{x - 1} \le 0$.

::: details Correction
Le numérateur s'annule en $-2$, le dénominateur en $1$ (valeur interdite). Le quotient est négatif ou nul entre les deux : $x \in [-2 ; 1[$ ($1$ est exclu).
:::

**5.** Au cinéma, $2$ places adulte et $3$ places enfant coûtent $43$ €. $1$ place adulte et $2$ places enfant coûtent $25$ €. Quels sont les prix ?

::: details Correction
$2a + 3e = 43$ et $a + 2e = 25$. La seconde donne $a = 25 - 2e$. On remplace : $50 - 4e + 3e = 43$, donc $e = 7$ € et $a = 11$ €.
:::

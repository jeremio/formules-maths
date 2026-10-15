# 2. Arithmétique

Les nombres entiers : divisibilité, nombres premiers, PGCD, puis les congruences (maths expertes, l'ancienne spécialité maths de Terminale S).

## 2.1 Multiples et diviseurs <Badge text="Collège" />

::: tip Définition
$a$ est un **multiple** de $b$ (ou $b$ est un **diviseur** de $a$, ou $b$ **divise** $a$, noté $b \mid a$) s'il existe un entier $k$ tel que :
$$a = k \times b$$
:::

**Exemples**

- $36 = 4 \times 9$ : donc $4$ et $9$ divisent $36$, et $36$ est un multiple de $4$ et de $9$.
- Diviseurs de $36$ : $1, 2, 3, 4, 6, 9, 12, 18, 36$.
- Multiples de $7$ : $0, 7, 14, 21, 28, \ldots$

## 2.2 Critères de divisibilité <Badge text="Collège" />

::: tip Un nombre est divisible par…
| Par | Si… | Exemple |
|---|---|---|
| $2$ | son dernier chiffre est pair ($0, 2, 4, 6, 8$) | $3\,174$ |
| $3$ | la somme de ses chiffres est divisible par $3$ | $471$ : $4+7+1 = 12$ |
| $4$ | ses deux derniers chiffres forment un multiple de $4$ | $1\,316$ : $16$ |
| $5$ | il se termine par $0$ ou $5$ | $2\,045$ |
| $9$ | la somme de ses chiffres est divisible par $9$ | $5\,742$ : $5+7+4+2 = 18$ |
| $10$ | il se termine par $0$ | $890$ |
| $11$ | la somme alternée des chiffres est divisible par $11$ | $9\,163$ : $9-1+6-3 = 11$ |
:::

## 2.3 Nombres premiers et décomposition <Badge text="Collège" /> <Badge text="2nde" />

::: tip Nombre premier
Un entier $p \ge 2$ est **premier** s'il a exactement deux diviseurs : $1$ et lui-même.

Les premiers nombres premiers : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, \ldots$

($1$ n'est **pas** premier ; $2$ est le seul nombre premier pair.)
:::

::: tip Décomposition en produit de facteurs premiers
Tout entier $n \ge 2$ s'écrit de façon unique (à l'ordre près) comme produit de nombres premiers.

Méthode : on divise successivement par $2, 3, 5, 7, \ldots$ tant que c'est possible.
:::

**Exemples**

- $360 = 2 \times 180 = 2^2 \times 90 = 2^3 \times 45 = 2^3 \times 3^2 \times 5$
- $1\,001 = 7 \times 11 \times 13$
- Pour savoir si $n$ est premier, il suffit de tester les diviseurs premiers jusqu'à $\sqrt{n}$. Par exemple, $97$ : on teste $2, 3, 5, 7$ (car $\sqrt{97} < 10$), aucun ne divise, donc $97$ est premier.

## 2.4 PGCD et PPCM <Badge text="Collège" /> <Badge text="Maths expertes" />

::: tip Définitions
- $\text{PGCD}(a, b)$ : le **plus grand diviseur commun** à $a$ et $b$.
- $\text{PPCM}(a, b)$ : le **plus petit multiple commun** non nul.
- $a$ et $b$ sont **premiers entre eux** si $\text{PGCD}(a,b) = 1$.

$$\text{PGCD}(a,b) \times \text{PPCM}(a,b) = a \times b$$
:::

::: tip Avec les décompositions
- PGCD : les facteurs **communs**, avec le **plus petit** exposant.
- PPCM : **tous** les facteurs, avec le **plus grand** exposant.
:::

Exemple avec $a = 360 = 2^3 \times 3^2 \times 5$ et $b = 84 = 2^2 \times 3 \times 7$ :
- $\text{PGCD} = 2^2 \times 3 = 12$
- $\text{PPCM} = 2^3 \times 3^2 \times 5 \times 7 = 2\,520$
- Vérification : $12 \times 2\,520 = 30\,240 = 360 \times 84$.

::: tip Algorithme d'Euclide
$$\text{PGCD}(a, b) = \text{PGCD}(b, r) \quad \text{où } r \text{ est le reste de } a \div b$$
On recommence jusqu'à obtenir un reste nul : le PGCD est le **dernier reste non nul**.
:::

Exemple : $\text{PGCD}(252, 198)$.

| Division | Reste |
|---|---|
| $252 = 1 \times 198 + 54$ | $54$ |
| $198 = 3 \times 54 + 36$ | $36$ |
| $54 = 1 \times 36 + 18$ | $18$ |
| $36 = 2 \times 18 + 0$ | $0$ |

Donc $\text{PGCD}(252, 198) = 18$.

Application : rendre une fraction irréductible. $\dfrac{198}{252} = \dfrac{198 \div 18}{252 \div 18} = \dfrac{11}{14}$.

## 2.5 Division euclidienne <Badge text="Collège" /> <Badge text="Maths expertes" />

::: tip Division euclidienne
Pour deux entiers $a$ et $b > 0$, il existe un unique couple $(q, r)$ tel que :
$$a = b \times q + r \qquad 0 \le r < b$$
$a$ : dividende, $b$ : diviseur, $q$ : quotient, $r$ : reste.
:::

**Exemples**

- $47 = 6 \times 7 + 5$ : le quotient est $7$, le reste $5$.
- $-17 = 5 \times (-4) + 3$ : le reste doit être positif, donc $q = -4$ et $r = 3$ (et pas $q = -3$, $r = -2$).
- $100$ jours après un lundi : $100 = 7 \times 14 + 2$, donc on tombe un mercredi.

## 2.6 Congruences <Badge text="Maths expertes" /> <Badge text="Ancien prog." />

::: tip Définition
$$a \equiv b \pmod{n} \iff n \text{ divise } a - b \iff a \text{ et } b \text{ ont le même reste dans la division par } n$$
:::

::: tip Règles de calcul
Si $a \equiv b \pmod n$ et $c \equiv d \pmod n$, alors :
$$a + c \equiv b + d \pmod n \qquad a \times c \equiv b \times d \pmod n$$
$$a^k \equiv b^k \pmod n \quad \text{pour tout entier } k \ge 0$$
:::

::: warning
On ne peut **pas** diviser librement une congruence : $2 \times 3 \equiv 2 \times 0 \pmod 6$, mais $3 \not\equiv 0 \pmod 6$.
:::

**Exemples**

- $38 \equiv 3 \pmod 5$ car $38 = 7 \times 5 + 3$.
- Dernier chiffre de $7^{100}$ (calcul modulo $10$) : $7^1 \equiv 7$, $7^2 \equiv 9$, $7^3 \equiv 3$, $7^4 \equiv 1 \pmod{10}$. Comme $100 = 4 \times 25$ :
  $$7^{100} = (7^4)^{25} \equiv 1^{25} = 1 \pmod{10}$$
  Le dernier chiffre est $1$.
- Reste de $2^{50}$ dans la division par $7$ : $2^3 = 8 \equiv 1 \pmod 7$ et $50 = 3 \times 16 + 2$, donc
  $$2^{50} = (2^3)^{16} \times 2^2 \equiv 4 \pmod 7$$

## 2.7 Bézout, Gauss, Fermat <Badge text="Maths expertes" /> <Badge text="Ancien prog." />

::: tip Théorème de Bézout
$a$ et $b$ sont premiers entre eux si et seulement s'il existe deux entiers $u$ et $v$ tels que :
$$au + bv = 1$$
Plus généralement (identité de Bézout) : il existe $u, v$ entiers avec $au + bv = \text{PGCD}(a,b)$.
:::

::: tip Théorème de Gauss
Si $a$ divise $bc$ et si $a$ est premier avec $b$, alors $a$ divise $c$.
:::

::: tip Petit théorème de Fermat
Si $p$ est premier et $a$ n'est pas divisible par $p$ :
$$a^{p-1} \equiv 1 \pmod p$$
Pour tout entier $a$ : $a^p \equiv a \pmod p$.
:::

**Exemples**

- $3 \times 5 + 7 \times (-2) = 1$, donc $3$ et $7$ sont premiers entre eux (avec $u = 5$ et $v = -2$).
- Équation $5x + 3y = 1$ : une solution est $(2, -3)$. Toutes les solutions sont $(2 + 3k,\ -3 - 5k)$, $k \in \mathbb{Z}$.
- $7$ divise $3n$ et $7$ est premier avec $3$, donc (Gauss) $7$ divise $n$.
- Fermat avec $p = 13$ : $2^{12} \equiv 1 \pmod{13}$. Vérification : $2^{12} = 4096 = 13 \times 315 + 1$.

## Exercices

**1.** Décomposer $588$ en produit de facteurs premiers.

::: details Correction
$588 = 2 \times 294 = 2^2 \times 147 = 2^2 \times 3 \times 49 = 2^2 \times 3 \times 7^2$.
:::

**2.** Calculer $\text{PGCD}(1\,071, 462)$ par l'algorithme d'Euclide, puis simplifier $\dfrac{462}{1071}$.

::: details Correction
$1071 = 2 \times 462 + 147$ ; $462 = 3 \times 147 + 21$ ; $147 = 7 \times 21 + 0$. Le PGCD vaut $21$.

$\dfrac{462}{1071} = \dfrac{22}{51}$.
:::

**3.** Un fleuriste a $84$ roses et $126$ tulipes. Il veut faire le maximum de bouquets identiques en utilisant toutes les fleurs. Combien de bouquets, et quelle composition ?

::: details Correction
$\text{PGCD}(84, 126) = 42$. Il fait $42$ bouquets de $2$ roses et $3$ tulipes.
:::

**4.** Quel est le reste de la division de $3^{2026}$ par $5$ ?

::: details Correction
$3^4 = 81 \equiv 1 \pmod 5$ et $2026 = 4 \times 506 + 2$. Donc $3^{2026} \equiv 3^2 = 9 \equiv 4 \pmod 5$. Le reste est $4$.
:::

**5.** Deux bus partent ensemble à 7 h. L'un repasse toutes les $12$ minutes, l'autre toutes les $18$ minutes. À quelle heure repartent-ils ensemble pour la première fois ?

::: details Correction
$\text{PPCM}(12, 18) = 36$ minutes. Ils repartent ensemble à 7 h 36.
:::

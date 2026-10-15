# 17. Matrices et graphes

Un chapitre de maths expertes (et de l'ancienne spécialité de Terminale ES) : calcul matriciel, graphes et chaînes de Markov.

## 17.1 Matrices et opérations <Badge text="Maths expertes" />

::: tip Définition
Une matrice $n \times p$ est un tableau de nombres à $n$ lignes et $p$ colonnes. $a_{ij}$ désigne le coefficient de la ligne $i$ et de la colonne $j$.
$$A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$$
La matrice **identité** est $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ : $AI = IA = A$.
:::

::: tip Addition et multiplication par un réel
On opère coefficient par coefficient (même taille obligatoire pour l'addition).
:::

::: tip Produit (ligne par colonne)
Le coefficient $(i, j)$ de $AB$ est le produit de la **ligne** $i$ de $A$ par la **colonne** $j$ de $B$ :
$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} e & f \\ g & h \end{pmatrix} = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$$
Le nombre de colonnes de $A$ doit égaler le nombre de lignes de $B$. **En général, $AB \neq BA$.**
:::

**Exemples**

- $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ 5 & -2 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 8 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 \\ 6 \end{pmatrix} = \begin{pmatrix} 5 + 12 \\ 15 + 24 \end{pmatrix} = \begin{pmatrix} 17 \\ 39 \end{pmatrix}$
- Le produit dans l'autre sens n'est pas commutatif :
  $$\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} 7 & 2 \\ 3 & 1 \end{pmatrix} \qquad \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}$$

## 17.2 Inverse et systèmes <Badge text="Maths expertes" />

::: tip Inverse d'une matrice $2 \times 2$
$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc$$
$A$ est inversible si et seulement si $\det A \neq 0$, et alors :
$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$
:::

::: tip Résolution d'un système
Le système s'écrit $AX = B$. Si $A$ est inversible :
$$X = A^{-1}B$$
:::

**Exemple** : résoudre $\begin{cases} 2x + y = 5 \\ x + 3y = 10 \end{cases}$.

$A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$, $\det A = 6 - 1 = 5$, donc $A^{-1} = \frac{1}{5}\begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix}$.
$$X = \frac{1}{5}\begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ 10 \end{pmatrix} = \frac{1}{5}\begin{pmatrix} 5 \\ 15 \end{pmatrix} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$$
Donc $x = 1$ et $y = 3$.

## 17.3 Puissances de matrices et suites <Badge text="Maths expertes" />

::: tip Suites matricielles
Si $U_{n+1} = AU_n$, alors :
$$U_n = A^n U_0$$
Pour une matrice **diagonale**, les puissances se calculent terme à terme :
$$\begin{pmatrix} a & 0 \\ 0 & b \end{pmatrix}^n = \begin{pmatrix} a^n & 0 \\ 0 & b^n \end{pmatrix}$$
Si $A = PDP^{-1}$ avec $D$ diagonale, alors $A^n = PD^nP^{-1}$.
:::

## 17.4 Graphes <Badge text="Maths expertes" />

::: tip Vocabulaire
- Un **graphe** est formé de **sommets** reliés par des **arêtes** (ou des **arcs** orientés).
- Le **degré** d'un sommet est le nombre d'arêtes qui en partent. La somme des degrés vaut le double du nombre d'arêtes.
- La **matrice d'adjacence** $M$ a pour coefficient $m_{ij}$ le nombre d'arêtes allant de $i$ à $j$.
- Le coefficient $(i, j)$ de $M^n$ est le **nombre de chemins de longueur $n$** de $i$ à $j$.
:::

<figure class="figure">
<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
<g stroke="currentColor" stroke-width="1.5">
<line x1="50" y1="40" x2="210" y2="40"/>
<line x1="50" y1="40" x2="130" y2="120"/>
<line x1="210" y1="40" x2="130" y2="120"/>
</g>
<g fill="var(--vp-c-bg)" stroke="var(--courbe-1)" stroke-width="2">
<circle cx="50" cy="40" r="15"/><circle cx="210" cy="40" r="15"/><circle cx="130" cy="120" r="15"/>
</g>
<g fill="currentColor" font-size="14" text-anchor="middle">
<text x="50" y="45">1</text><text x="210" y="45">2</text><text x="130" y="125">3</text>
</g>
</svg>
<figcaption>Un triangle : chaque sommet est relié aux deux autres.</figcaption>
</figure>

Exemple : pour ce graphe, $M = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ et $M^2 = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. Il y a $2$ chemins de longueur $2$ qui partent de $1$ et y reviennent ($1 \to 2 \to 1$ et $1 \to 3 \to 1$).

## 17.5 Chaînes de Markov <Badge text="Maths expertes" />

::: tip Principe
Un système passe d'un état à l'autre à chaque étape avec des probabilités fixes. On les range dans la **matrice de transition** $P$ (chaque ligne a une somme égale à $1$). Si $\pi_n$ est la loi (vecteur ligne) à l'étape $n$ :
$$\pi_{n+1} = \pi_n P \qquad \pi_n = \pi_0 P^n$$
Un **état stable** $\pi$ vérifie $\pi = \pi P$.
:::

**Exemple (météo)** : s'il fait beau, il fera beau le lendemain avec une probabilité de $0{,}8$. S'il pleut, il pleuvra le lendemain avec une probabilité de $0{,}6$.
$$P = \begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}4 & 0{,}6 \end{pmatrix}$$
État stable $(b ; p)$ avec $b + p = 1$ : $b = 0{,}8b + 0{,}4p$ donne $0{,}2b = 0{,}4p$, soit $b = 2p$. Donc $b = \frac{2}{3}$ et $p = \frac{1}{3}$ : à long terme, il fait beau $2$ jours sur $3$.

## Exercices

**1.** Calculer $\begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} 1 & 4 \\ 2 & 1 \end{pmatrix}$.

::: details Correction
$\begin{pmatrix} 2 - 2 & 8 - 1 \\ 0 + 6 & 0 + 3 \end{pmatrix} = \begin{pmatrix} 0 & 7 \\ 6 & 3 \end{pmatrix}$.
:::

**2.** Inverser $A = \begin{pmatrix} 3 & 2 \\ 4 & 3 \end{pmatrix}$.

::: details Correction
$\det A = 9 - 8 = 1$, donc $A^{-1} = \begin{pmatrix} 3 & -2 \\ -4 & 3 \end{pmatrix}$.
:::

**3.** Avec la matrice météo ci-dessus, il fait beau aujourd'hui. Quelle est la probabilité qu'il fasse beau dans deux jours ?

::: details Correction
$\pi_0 = (1 ; 0)$, $\pi_1 = (0{,}8 ; 0{,}2)$, $\pi_2 = (0{,}8 \times 0{,}8 + 0{,}2 \times 0{,}4 ; \ldots) = (0{,}72 ; 0{,}28)$. La probabilité vaut $0{,}72$.
:::

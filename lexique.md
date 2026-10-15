# Lexique et notations

Les symboles et le vocabulaire qu'on croise partout, pour relire une formule sans buter.

## Ensembles de nombres

| Notation | Nom | Contenu | Exemples |
|---|---|---|---|
| $\mathbb{N}$ | entiers naturels | $0, 1, 2, 3, \ldots$ | $0$ ; $42$ |
| $\mathbb{Z}$ | entiers relatifs | $\ldots, -2, -1, 0, 1, 2, \ldots$ | $-7$ |
| $\mathbb{D}$ | décimaux | nombres à écriture décimale finie | $0{,}25$ ; $-3{,}1$ |
| $\mathbb{Q}$ | rationnels | quotients $\frac{p}{q}$ d'entiers | $\frac{1}{3}$ ; $-\frac{5}{2}$ |
| $\mathbb{R}$ | réels | tous les nombres de la droite | $\sqrt{2}$ ; $\pi$ ; $e$ |
| $\mathbb{C}$ | complexes | les $a + ib$ avec $i^2 = -1$ | $2 - 3i$ |

$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$. Une étoile retire le zéro : $\mathbb{R}^* = \mathbb{R} \setminus \{0\}$. Un $+$ ou un $-$ garde les positifs ou les négatifs : $\mathbb{R}^+ = [0 ; +\infty[$.

## Intervalles

| Notation | Signifie | Bornes |
|---|---|---|
| $[a ; b]$ | $a \le x \le b$ | $a$ et $b$ inclus |
| $]a ; b[$ | $a < x < b$ | $a$ et $b$ exclus |
| $[a ; b[$ | $a \le x < b$ | $a$ inclus, $b$ exclu |
| $[a ; +\infty[$ | $x \ge a$ | côté infini toujours ouvert |
| $]-\infty ; b[$ | $x < b$ | |

$A \cup B$ : réunion (dans $A$ **ou** dans $B$). $A \cap B$ : intersection (dans $A$ **et** dans $B$).

## Symboles logiques et ensemblistes

| Symbole | Se lit | Exemple |
|---|---|---|
| $\in$ | appartient à | $3 \in \mathbb{N}$ |
| $\notin$ | n'appartient pas à | $\frac12 \notin \mathbb{Z}$ |
| $\subset$ | est inclus dans | $\mathbb{N} \subset \mathbb{Z}$ |
| $\varnothing$ | ensemble vide | |
| $\forall$ | pour tout | $\forall x \in \mathbb{R}, x^2 \ge 0$ |
| $\exists$ | il existe | $\exists x \in \mathbb{R}, x^2 = 2$ |
| $\implies$ | implique, donc | $x = 2 \implies x^2 = 4$ |
| $\iff$ | équivaut à, si et seulement si | $2x = 6 \iff x = 3$ |
| $\setminus$ | privé de | $\mathbb{R} \setminus \{0\}$ |
| $\{\ldots\}$ | ensemble des éléments | $\{1 ; 2 ; 3\}$ |

::: warning Implication et équivalence
$x = 2 \implies x^2 = 4$ est vrai, mais la réciproque est fausse ($x$ peut valoir $-2$). On ne peut donc pas écrire $\iff$ ici.
:::

## Symboles de calcul

| Symbole | Signification | Exemple |
|---|---|---|
| $\approx$ | environ égal | $\pi \approx 3{,}14$ |
| $\neq$ | différent de | $1 \neq 2$ |
| $\le$, $\ge$ | inférieur ou égal, supérieur ou égal | $x \le 3$ |
| $\pm$ | plus ou moins | $x = \pm 2$ signifie $x = 2$ ou $x = -2$ |
| $\vert x \vert$ | valeur absolue | $\vert -5 \vert = 5$ |
| $\sqrt{x}$ | racine carrée | $\sqrt{49} = 7$ |
| $n!$ | factorielle | $4! = 24$ |
| $\binom{n}{k}$ | « $k$ parmi $n$ » | $\binom{5}{2} = 10$ |
| $\equiv$ | congru à (modulo) | $17 \equiv 2 \pmod 5$ |
| $\infty$ | infini | |

## Sommes, produits, limites, intégrales

| Notation | Signification | Exemple |
|---|---|---|
| $\displaystyle\sum_{k=1}^{n} u_k$ | somme $u_1 + u_2 + \cdots + u_n$ | $\displaystyle\sum_{k=1}^{4} k = 10$ |
| $\displaystyle\prod_{k=1}^{n} u_k$ | produit $u_1 \times u_2 \times \cdots \times u_n$ | $\displaystyle\prod_{k=1}^{4} k = 4! = 24$ |
| $\displaystyle\lim_{x \to a} f(x)$ | limite de $f$ quand $x$ tend vers $a$ | $\displaystyle\lim_{x \to +\infty} \frac{1}{x} = 0$ |
| $x \to 0^+$ | $x$ tend vers $0$ par valeurs positives | |
| $f'(x)$, $\frac{df}{dx}$ | dérivée de $f$ | $(x^2)' = 2x$ |
| $f''(x)$ | dérivée seconde | |
| $\displaystyle\int_a^b f(x)\,dx$ | intégrale de $f$ entre $a$ et $b$ | $\displaystyle\int_0^1 x\,dx = \frac{1}{2}$ |
| $\Big[F(x)\Big]_a^b$ | $F(b) - F(a)$ | |

## Géométrie

| Notation | Signification |
|---|---|
| $[AB]$ | segment d'extrémités $A$ et $B$ |
| $(AB)$ | droite passant par $A$ et $B$ |
| $[AB)$ | demi-droite d'origine $A$ passant par $B$ |
| $AB$ | longueur du segment $[AB]$ |
| $\overrightarrow{AB}$ | vecteur de $A$ vers $B$ |
| $\Vert\vec u\Vert$ | norme (longueur) du vecteur $\vec u$ |
| $\vec u \cdot \vec v$ | produit scalaire |
| $\parallel$ | parallèle à |
| $\perp$ | perpendiculaire à |
| $\widehat{ABC}$ | angle de sommet $B$ |

## Probabilités

| Notation | Signification |
|---|---|
| $\Omega$ | univers (toutes les issues) |
| $P(A)$ | probabilité de l'événement $A$ |
| $\bar A$ | événement contraire de $A$ |
| $P_A(B)$ ou $P(B \mid A)$ | probabilité de $B$ sachant $A$ |
| $E(X)$ | espérance de $X$ |
| $V(X)$, $\sigma(X)$ | variance et écart-type de $X$ |
| $\mathcal{B}(n, p)$ | loi binomiale |
| $\mathcal{N}(\mu, \sigma^2)$ | loi normale |

## Vocabulaire

| Mot | Définition |
|---|---|
| **Antécédent** | un $x$ tel que $f(x)$ vaut la valeur donnée |
| **Image** | la valeur $f(x)$ associée à $x$ |
| **Ensemble de définition** | les $x$ pour lesquels $f(x)$ existe |
| **Racine** (d'un polynôme) | une valeur qui l'annule |
| **Coefficient directeur** | la pente d'une droite |
| **Dérivée** | la pente de la tangente, la vitesse de variation |
| **Primitive** | une fonction dont la dérivée est la fonction donnée |
| **Asymptote** | une droite dont la courbe se rapproche indéfiniment |
| **Monotone** | toujours croissante, ou toujours décroissante |
| **Majorée** / **minorée** | qui reste sous / au-dessus d'une valeur fixe |
| **Converge** | qui a une limite finie |
| **Conjecture** | ce que l'on suppose vrai sans l'avoir encore prouvé |
| **Réciproque** | l'énoncé « si B alors A » quand on connaît « si A alors B » |
| **Contraposée** | « si non B alors non A », toujours équivalente à « si A alors B » |
| **Espérance** | la moyenne théorique d'une variable aléatoire |
| **Écart-type** | la dispersion moyenne autour de la moyenne |
| **Affixe** | le nombre complexe associé à un point du plan |

## Alphabet grec usuel

| Lettre | Nom | Usage courant |
|---|---|---|
| $\alpha$, $\beta$ | alpha, bêta | angles, sommet $(\alpha ; \beta)$ d'une parabole |
| $\Delta$, $\delta$ | delta | discriminant, petite variation |
| $\varepsilon$ | epsilon | très petite quantité |
| $\theta$ | thêta | angle, argument |
| $\lambda$ | lambda | paramètre (loi exponentielle, droite) |
| $\mu$ | mu | moyenne |
| $\pi$ | pi | $3{,}14159\ldots$ |
| $\sigma$, $\Sigma$ | sigma | écart-type, somme |
| $\varphi$ | phi | nombre d'or $\frac{1 + \sqrt5}{2}$, angle |
| $\omega$, $\Omega$ | oméga | pulsation, univers |

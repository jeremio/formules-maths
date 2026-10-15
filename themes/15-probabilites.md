# 15. Probabilités et dénombrement

Calculer des chances : événements, arbres, probabilités conditionnelles, dénombrement et lois de probabilité.

## 15.1 Vocabulaire et règles de base <Badge text="Collège" /> <Badge text="2nde" />

::: tip Définitions
- **Univers** $\Omega$ : l'ensemble des issues possibles.
- **Événement** : un ensemble d'issues. $\bar A$ est l'événement **contraire** de $A$.
- $A \cap B$ (« $A$ et $B$ ») : intersection. $A \cup B$ (« $A$ ou $B$ ») : réunion.
- $A$ et $B$ sont **incompatibles** si $A \cap B = \varnothing$.
:::

::: tip Règles
$$0 \le P(A) \le 1 \qquad P(\Omega) = 1 \qquad P(\bar A) = 1 - P(A)$$
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
**Équiprobabilité** (toutes les issues ont la même chance) :
$$P(A) = \frac{\text{nombre d'issues favorables}}{\text{nombre d'issues possibles}}$$
:::

**Exemples**

- Dé équilibré : $P(\text{pair}) = \frac{3}{6} = \frac{1}{2}$ ; $P(\text{pas de } 6) = 1 - \frac{1}{6} = \frac{5}{6}$.
- Carte tirée dans un jeu de $32$ : $P(\text{roi ou cœur}) = \frac{4}{32} + \frac{8}{32} - \frac{1}{32} = \frac{11}{32}$.

## 15.2 Probabilités conditionnelles et arbres <Badge text="1re" />

::: tip Probabilité de $B$ sachant $A$ ($P(A) \neq 0$)
$$P_A(B) = \frac{P(A \cap B)}{P(A)} \qquad \text{d'où} \qquad P(A \cap B) = P(A) \times P_A(B)$$
:::

<figure class="figure">
<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
<g stroke="currentColor" stroke-width="1.5" fill="none">
<line x1="20" y1="100" x2="130" y2="50"/>
<line x1="20" y1="100" x2="130" y2="150"/>
<line x1="150" y1="50" x2="260" y2="22"/>
<line x1="150" y1="50" x2="260" y2="78"/>
<line x1="150" y1="150" x2="260" y2="122"/>
<line x1="150" y1="150" x2="260" y2="178"/>
</g>
<g fill="currentColor" font-size="15" font-style="italic">
<text x="134" y="55">A</text>
<text x="134" y="155">Ā</text>
<text x="266" y="27">B</text>
<text x="266" y="83">B̄</text>
<text x="266" y="127">B</text>
<text x="266" y="183">B̄</text>
</g>
<g fill="var(--courbe-1)" font-size="12">
<text x="50" y="62">P(A)</text>
<text x="50" y="148">P(Ā)</text>
<text x="168" y="26">P<tspan baseline-shift="sub" font-size="9">A</tspan>(B)</text>
<text x="168" y="84">P<tspan baseline-shift="sub" font-size="9">A</tspan>(B̄)</text>
<text x="168" y="126">P<tspan baseline-shift="sub" font-size="9">Ā</tspan>(B)</text>
<text x="168" y="184">P<tspan baseline-shift="sub" font-size="9">Ā</tspan>(B̄)</text>
</g>
</svg>
<figcaption>Arbre pondéré : on multiplie le long d'un chemin, et la somme des branches issues d'un même nœud vaut 1.</figcaption>
</figure>

::: tip Règles des arbres
1. La somme des probabilités des branches issues d'un même nœud vaut $1$.
2. La probabilité d'un chemin est le **produit** des probabilités le long du chemin.
3. **Formule des probabilités totales** : la probabilité d'un événement est la **somme** des probabilités des chemins qui y mènent.
$$P(B) = P(A) \times P_A(B) + P(\bar A) \times P_{\bar A}(B)$$
:::

::: tip Indépendance
$A$ et $B$ sont **indépendants** si :
$$P(A \cap B) = P(A) \times P(B) \qquad \text{(autrement dit, } P_A(B) = P(B))$$
:::

**Exemple (test de dépistage)** : $2\,\%$ de la population est malade ($M$). Le test est positif ($T$) chez $95\,\%$ des malades et chez $3\,\%$ des personnes saines.

- $P(T) = 0{,}02 \times 0{,}95 + 0{,}98 \times 0{,}03 = 0{,}019 + 0{,}0294 = 0{,}0484$
- Probabilité d'être malade si le test est positif (formule de Bayes) :
  $$P_T(M) = \frac{P(M \cap T)}{P(T)} = \frac{0{,}019}{0{,}0484} \approx 0{,}39$$
  Seulement $39\,\%$ : la plupart des positifs sont des faux positifs, car la maladie est rare.

## 15.3 Variables aléatoires <Badge text="1re" /> <Badge text="Tle" />

::: tip Loi, espérance, variance
Une variable aléatoire $X$ prend les valeurs $x_1, \ldots, x_n$ avec les probabilités $p_1, \ldots, p_n$ (de somme $1$).
$$E(X) = \sum_{i} p_i x_i \quad \text{(moyenne à long terme)}$$
$$V(X) = \sum_{i} p_i \big(x_i - E(X)\big)^2 = E(X^2) - E(X)^2 \qquad \sigma(X) = \sqrt{V(X)}$$
:::

::: tip Linéarité
$$E(aX + b) = aE(X) + b \qquad V(aX + b) = a^2 V(X)$$
$$E(X + Y) = E(X) + E(Y)$$
$$V(X + Y) = V(X) + V(Y) \quad \text{si } X \text{ et } Y \text{ sont indépendantes}$$
:::

**Exemple (jeu)** : on mise $2$ € et on lance un dé. On gagne $10$ € avec un $6$, sinon rien. Le gain net $X$ vaut $8$ avec probabilité $\frac{1}{6}$ et $-2$ avec probabilité $\frac{5}{6}$.

$E(X) = 8 \times \frac16 - 2 \times \frac56 = \frac{8 - 10}{6} = -\frac{1}{3}$. Le jeu est défavorable : on perd en moyenne $0{,}33$ € par partie.

## 15.4 Loi binomiale <Badge text="1re" /> <Badge text="Tle" />

::: tip Schéma de Bernoulli
On répète $n$ fois, de façon **indépendante**, une épreuve à deux issues : succès (probabilité $p$) ou échec ($1 - p$). Le nombre $X$ de succès suit la **loi binomiale** $\mathcal{B}(n, p)$.
$$P(X = k) = \binom{n}{k}\,p^k\,(1 - p)^{n - k}$$
$$E(X) = np \qquad V(X) = np(1 - p)$$
:::

**Exemples**

- On lance $10$ fois une pièce. Probabilité d'obtenir exactement $5$ piles :
  $$\binom{10}{5}\left(\frac12\right)^{10} = \frac{252}{1024} \approx 0{,}246$$
- Un QCM de $10$ questions à $4$ choix, réponses au hasard : $X \sim \mathcal{B}(10 ; 0{,}25)$. En moyenne $E(X) = 2{,}5$ bonnes réponses.
- Probabilité d'au moins un succès : $P(X \ge 1) = 1 - P(X = 0) = 1 - (1 - p)^n$. Avec $n = 10$ et $p = 0{,}3$ : $1 - 0{,}7^{10} \approx 0{,}972$.
- $X \sim \mathcal{B}(10 ; 0{,}3)$ : $P(X = 3) = 120 \times 0{,}3^3 \times 0{,}7^7 \approx 0{,}267$.

## 15.5 Autres lois <Badge text="Tle" /> <Badge text="Ancien prog." />

::: tip Loi géométrique (rang du premier succès)
$$P(X = k) = (1 - p)^{k-1}\,p \qquad E(X) = \frac{1}{p}$$
Elle est « sans mémoire ».
:::

Exemple : en lançant un dé jusqu'à obtenir un $6$, il faut en moyenne $6$ lancers.

::: tip Loi uniforme sur $[a ; b]$ (loi continue)
$$P(c \le X \le d) = \frac{d - c}{b - a} \qquad E(X) = \frac{a + b}{2}$$
:::

::: tip Loi exponentielle de paramètre $\lambda$ (durée de vie)
$$P(X \le t) = 1 - e^{-\lambda t} \qquad P(X > t) = e^{-\lambda t} \qquad E(X) = \frac{1}{\lambda}$$
Elle aussi est sans mémoire : $P_{X > s}(X > s + t) = P(X > t)$.
:::

Exemple : une ampoule a une durée de vie moyenne de $1\,000$ h, donc $\lambda = 0{,}001$. $P(X > 500) = e^{-0{,}5} \approx 0{,}61$.

::: tip Loi normale $\mathcal{N}(\mu, \sigma^2)$ (courbe en cloche)
Pour une variable de moyenne $\mu$ et d'écart-type $\sigma$ :
$$P(\mu - \sigma \le X \le \mu + \sigma) \approx 0{,}683$$
$$P(\mu - 2\sigma \le X \le \mu + 2\sigma) \approx 0{,}954 \quad (\text{exactement } 0{,}95 \text{ avec } 1{,}96\sigma)$$
$$P(\mu - 3\sigma \le X \le \mu + 3\sigma) \approx 0{,}997$$
La variable $Z = \frac{X - \mu}{\sigma}$ suit la loi normale centrée réduite $\mathcal{N}(0, 1)$.
:::

<Courbe :fonctions="'exp(-x*x/2)/sqrt(2*PI)'" :legende="['densité de la loi N(0, 1), aire grisée ≈ 0,954']" :xmin="-4" :xmax="4" :ymin="-0.05" :ymax="0.45" :pas-y="0.1" :aire="[-2, 2]" :hauteur="240" />

Exemple : des tailles d'adultes suivent $\mathcal{N}(170, 7^2)$. Environ $95\,\%$ des personnes mesurent entre $156$ et $184$ cm.

## 15.6 Dénombrement <Badge text="Tle" />

::: tip Les outils
| Situation | Nombre | Exemple |
|---|---|---|
| $k$ choix successifs **avec remise** parmi $n$ ($k$-uplets) | $n^k$ | codes à $4$ chiffres : $10^4$ |
| Ranger $n$ objets (permutations) | $n! = n \times (n - 1) \times \cdots \times 1$ | $5$ livres : $5! = 120$ |
| $k$ objets ordonnés **sans remise** parmi $n$ (arrangements) | $\dfrac{n!}{(n - k)!}$ | podium de $8$ coureurs : $8 \times 7 \times 6 = 336$ |
| $k$ objets **sans ordre** parmi $n$ (combinaisons) | $\dbinom{n}{k} = \dfrac{n!}{k!\,(n - k)!}$ | mains de $5$ cartes parmi $32$ : $201\,376$ |
| Parties d'un ensemble à $n$ éléments | $2^n$ | |

Par convention, $0! = 1$.
:::

::: tip Propriétés des coefficients binomiaux
$$\binom{n}{0} = \binom{n}{n} = 1 \qquad \binom{n}{1} = n \qquad \binom{n}{k} = \binom{n}{n - k}$$
$$\binom{n}{k} + \binom{n}{k + 1} = \binom{n + 1}{k + 1} \quad \text{(triangle de Pascal)}$$
:::

Triangle de Pascal (chaque nombre est la somme des deux au-dessus) :

```
n = 0 :            1
n = 1 :          1   1
n = 2 :        1   2   1
n = 3 :      1   3   3   1
n = 4 :    1   4   6   4   1
n = 5 :  1   5  10  10   5   1
```

::: tip Binôme de Newton
$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}$$
:::

**Exemples**

- $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$ (coefficients de la ligne $4$).
- Loto (choisir $5$ numéros parmi $49$) : $\binom{49}{5} = 1\,906\,884$ grilles possibles.
- Nombre de poignées de main entre $10$ personnes : $\binom{10}{2} = 45$.
- Anagrammes de « MATHS » : $5! = 120$.

## 15.7 Concentration et loi des grands nombres <Badge text="Tle" />

::: tip Inégalité de Bienaymé-Tchebychev
$$P\big(|X - E(X)| \ge \delta\big) \le \frac{V(X)}{\delta^2}$$
:::

::: tip Loi des grands nombres
Si $M_n$ est la moyenne de $n$ variables indépendantes de même loi, d'espérance $\mu$, alors pour tout $\delta > 0$ :
$$\lim_{n \to +\infty} P\big(|M_n - \mu| \ge \delta\big) = 0$$
En clair, la fréquence observée se rapproche de la probabilité quand le nombre d'essais augmente.
:::

Exemple : $X$ a pour espérance $50$ et pour variance $25$. Alors $P(|X - 50| \ge 10) \le \frac{25}{100} = 0{,}25$.

## Exercices

**1.** Dans une classe, $60\,\%$ des élèves font du sport, et $30\,\%$ font du sport **et** de la musique. On choisit un sportif au hasard. Quelle est la probabilité qu'il fasse de la musique ?

::: details Correction
$P_S(M) = \frac{P(S \cap M)}{P(S)} = \frac{0{,}3}{0{,}6} = 0{,}5$.
:::

**2.** Une urne contient $3$ boules rouges et $2$ vertes. On tire deux boules **sans remise**. Probabilité d'avoir deux boules de la même couleur ?

::: details Correction
$P(RR) = \frac35 \times \frac24 = \frac{6}{20}$ et $P(VV) = \frac25 \times \frac14 = \frac{2}{20}$. Total : $\frac{8}{20} = 0{,}4$.
:::

**3.** Un tireur atteint sa cible avec une probabilité de $0{,}8$. Il tire $5$ fois. Probabilité qu'il touche exactement $4$ fois ? Au moins une fois ?

::: details Correction
$X \sim \mathcal{B}(5 ; 0{,}8)$. $P(X = 4) = 5 \times 0{,}8^4 \times 0{,}2 = 0{,}4096$.

$P(X \ge 1) = 1 - 0{,}2^5 = 0{,}99968$.
:::

**4.** Combien de mots de passe de $3$ lettres (parmi $26$) suivies de $2$ chiffres peut-on former ?

::: details Correction
$26^3 \times 10^2 = 17\,576 \times 100 = 1\,757\,600$.
:::

**5.** Une variable $X$ prend les valeurs $0$, $1$ et $4$ avec les probabilités $0{,}5$, $0{,}3$ et $0{,}2$. Calculer $E(X)$, $V(X)$ et $\sigma(X)$.

::: details Correction
$E(X) = 0 + 0{,}3 + 0{,}8 = 1{,}1$. $E(X^2) = 0 + 0{,}3 + 3{,}2 = 3{,}5$.

$V(X) = 3{,}5 - 1{,}21 = 2{,}29$ et $\sigma(X) \approx 1{,}51$.
:::

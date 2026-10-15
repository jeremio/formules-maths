# 16. Statistiques

Résumer une série de données (moyenne, médiane, dispersion), relier deux variables, et estimer à partir d'un échantillon.

## 16.1 Indicateurs de position <Badge text="Collège" /> <Badge text="2nde" />

::: tip Moyenne
$$\bar x = \frac{x_1 + x_2 + \cdots + x_n}{n}$$
**Moyenne pondérée** (valeurs $x_i$ d'effectifs ou de coefficients $n_i$) :
$$\bar x = \frac{n_1 x_1 + n_2 x_2 + \cdots + n_p x_p}{n_1 + n_2 + \cdots + n_p}$$
:::

::: tip Médiane
On range les valeurs dans l'ordre croissant. La **médiane** $Me$ partage la série en deux moitiés de même effectif.
- Effectif $n$ impair : c'est la valeur de rang $\frac{n + 1}{2}$.
- Effectif $n$ pair : c'est la moyenne des valeurs de rangs $\frac{n}{2}$ et $\frac{n}{2} + 1$.
:::

::: tip Quartiles
- $Q_1$ : la plus petite valeur telle qu'au moins $25\,\%$ des données lui soient inférieures ou égales (rang $\frac{n}{4}$ arrondi à l'entier supérieur).
- $Q_3$ : idem avec $75\,\%$ (rang $\frac{3n}{4}$ arrondi à l'entier supérieur).
:::

::: tip Mode
La valeur la plus fréquente.
:::

**Exemple** : notes $8, 12, 15, 9, 12, 17, 10, 14$ ($n = 8$).

- Rangées : $8, 9, 10, 12, 12, 14, 15, 17$.
- Moyenne : $\frac{97}{8} = 12{,}125$.
- Médiane : moyenne des 4<sup>e</sup> et 5<sup>e</sup> valeurs, $\frac{12 + 12}{2} = 12$.
- $Q_1$ : rang $2$, donc $Q_1 = 9$. $Q_3$ : rang $6$, donc $Q_3 = 14$.
- Mode : $12$.

**Exemple (moyenne pondérée)** : un élève a $14$ (coef. $3$), $9$ (coef. $2$) et $12$ (coef. $1$). Moyenne : $\frac{42 + 18 + 12}{6} = 12$.

::: warning Moyenne et médiane
La moyenne est sensible aux valeurs extrêmes, la médiane non. Salaires $1500, 1600, 1700, 1800, 20\,000$ : moyenne $5\,320$ €, médiane $1\,700$ €.
:::

## 16.2 Indicateurs de dispersion <Badge text="2nde" />

::: tip Étendue et écart interquartile
$$\text{étendue} = \max - \min \qquad \text{écart interquartile} = Q_3 - Q_1$$
:::

::: tip Variance et écart-type
$$V = \frac{1}{n}\sum_{i=1}^{n} (x_i - \bar x)^2 = \overline{x^2} - \bar x^2 \qquad \sigma = \sqrt{V}$$
L'écart-type mesure la dispersion autour de la moyenne, dans la même unité que les données.
:::

**Exemple** : série $2, 4, 4, 4, 5, 5, 7, 9$. Moyenne $\bar x = 5$.

Écarts au carré : $9, 1, 1, 1, 0, 0, 4, 16$, de somme $32$. $V = \frac{32}{8} = 4$, donc $\sigma = 2$.

::: tip Diagramme en boîte (boîte à moustaches)
On le construit avec cinq valeurs : min, $Q_1$, médiane, $Q_3$, max. La boîte contient la moitié centrale des données.
:::

<figure class="figure">
<svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="80" x2="340" y2="80" stroke="currentColor" stroke-opacity="0.6"/>
<g fill="currentColor" font-size="12" text-anchor="middle">
<text x="40" y="98">8</text><text x="70" y="98">9</text><text x="190" y="98">12</text><text x="250" y="98">14</text><text x="310" y="98">17</text>
</g>
<g stroke="var(--courbe-1)" stroke-width="2" fill="none">
<line x1="40" y1="45" x2="70" y2="45"/>
<rect x="70" y="25" width="180" height="40" fill="var(--courbe-aire)"/>
<line x1="190" y1="25" x2="190" y2="65"/>
<line x1="250" y1="45" x2="310" y2="45"/>
<line x1="40" y1="35" x2="40" y2="55"/>
<line x1="310" y1="35" x2="310" y2="55"/>
</g>
<g fill="currentColor" font-size="11" text-anchor="middle" fill-opacity="0.75">
<text x="40" y="20">min</text><text x="70" y="18">Q₁</text><text x="190" y="18">Me</text><text x="250" y="18">Q₃</text><text x="310" y="20">max</text>
</g>
</svg>
<figcaption>Boîte à moustaches de la série de notes ci-dessus.</figcaption>
</figure>

## 16.3 Deux variables : nuage de points et ajustement <Badge text="2nde" /> <Badge text="Tle" />

::: tip Ajustement affine par les moindres carrés
Pour une série de points $(x_i ; y_i)$, la droite de régression de $y$ en $x$ est $y = ax + b$ avec :
$$a = \frac{\text{Cov}(x, y)}{V(x)} \qquad b = \bar y - a\bar x$$
$$\text{Cov}(x, y) = \frac{1}{n}\sum (x_i - \bar x)(y_i - \bar y) = \overline{xy} - \bar x\,\bar y$$
Elle passe par le **point moyen** $G(\bar x ; \bar y)$. En pratique, on obtient $a$ et $b$ à la calculatrice.
:::

::: tip Coefficient de corrélation
$$r = \frac{\text{Cov}(x, y)}{\sigma_x\,\sigma_y} \qquad -1 \le r \le 1$$
Plus $|r|$ est proche de $1$, plus l'ajustement affine est pertinent. Une corrélation n'est pas une causalité.
:::

**Exemple** : $x = 1, 2, 3, 4$ et $y = 3, 5, 6, 8$.

- $\bar x = 2{,}5$ et $\bar y = 5{,}5$.
- Covariance :
  $$\text{Cov} = \frac{(-1{,}5)(-2{,}5) + (-0{,}5)(-0{,}5) + (0{,}5)(0{,}5) + (1{,}5)(2{,}5)}{4} = \frac{8}{4} = 2$$
- $V(x) = \frac{2{,}25 + 0{,}25 + 0{,}25 + 2{,}25}{4} = 1{,}25$.
- $a = \frac{2}{1{,}25} = 1{,}6$ et $b = 5{,}5 - 1{,}6 \times 2{,}5 = 1{,}5$. Droite : $y = 1{,}6x + 1{,}5$.

<Courbe :fonctions="'1.6*x + 1.5'" :legende="['droite de régression y = 1,6x + 1,5']" :xmin="0" :xmax="5" :ymin="0" :ymax="10" :points="[[1,3],[2,5],[3,6],[4,8],[2.5,5.5,'G']]" :hauteur="280" />

## 16.4 Échantillonnage et estimation <Badge text="2nde" /> <Badge text="Tle" /> <Badge text="Ancien prog." />

::: tip Intervalle de fluctuation (la proportion $p$ est connue)
Pour un échantillon de taille $n$ ($n \ge 25$, $0{,}2 \le p \le 0{,}8$), la fréquence observée $f$ est dans l'intervalle suivant dans environ $95\,\%$ des cas :
$$\left[p - \frac{1}{\sqrt{n}} ; p + \frac{1}{\sqrt{n}}\right] \quad \text{(version 2nde)}$$
$$\left[p - 1{,}96\sqrt{\frac{p(1 - p)}{n}} ; p + 1{,}96\sqrt{\frac{p(1 - p)}{n}}\right] \quad \text{(version Terminale)}$$
Si $f$ est en dehors, on rejette l'hypothèse sur $p$ (avec un risque d'erreur de $5\,\%$).
:::

::: tip Intervalle de confiance (on estime $p$ inconnue à partir de $f$)
$$\left[f - \frac{1}{\sqrt{n}} ; f + \frac{1}{\sqrt{n}}\right] \quad \text{au niveau de confiance } 95\,\%$$
:::

**Exemples**

- Une pièce est supposée équilibrée ($p = 0{,}5$). Sur $100$ lancers, on obtient $62$ piles. Intervalle de fluctuation : $[0{,}4 ; 0{,}6]$. Comme $0{,}62$ est en dehors, on soupçonne la pièce d'être truquée.
- Sondage : $520$ personnes sur $1\,000$ votent pour A. $f = 0{,}52$, et $\frac{1}{\sqrt{1000}} \approx 0{,}032$. Intervalle de confiance : $[0{,}488 ; 0{,}552]$. On ne peut pas affirmer que A est majoritaire.
- Pour une précision de $\pm 2\,\%$, il faut $\frac{1}{\sqrt{n}} \le 0{,}02$, soit $n \ge 2\,500$.

## Exercices

**1.** Un salarié a eu $3$ mois à $1\,800$ €, $8$ mois à $2\,000$ € et $1$ mois à $3\,200$ € (prime). Quel est son salaire mensuel moyen ?

::: details Correction
$\frac{3 \times 1800 + 8 \times 2000 + 3200}{12} = \frac{5400 + 16000 + 3200}{12} = \frac{24\,600}{12} = 2\,050$ €.
:::

**2.** Donner la médiane, $Q_1$ et $Q_3$ de la série $3, 7, 8, 5, 12, 14, 21, 13, 18$.

::: details Correction
Rangée : $3, 5, 7, 8, 12, 13, 14, 18, 21$ ($n = 9$). Médiane : valeur de rang $5$, soit $12$.

$Q_1$ : rang $\frac{9}{4} = 2{,}25$, arrondi à $3$, soit $7$. $Q_3$ : rang $6{,}75$, arrondi à $7$, soit $14$.
:::

**3.** Calculer la moyenne et l'écart-type de la série $10, 12, 14, 16, 18$.

::: details Correction
$\bar x = 14$. Écarts au carré : $16, 4, 0, 4, 16$, de somme $40$. $V = 8$ et $\sigma = \sqrt{8} \approx 2{,}83$.
:::

**4.** Dans une usine, $8\,\%$ des pièces sont défectueuses d'habitude. Sur un lot de $400$ pièces, on en trouve $45$ défectueuses. Faut-il s'inquiéter (intervalle de la version Terminale) ?

::: details Correction
$1{,}96\sqrt{\frac{0{,}08 \times 0{,}92}{400}} \approx 0{,}027$. Intervalle : $[0{,}053 ; 0{,}107]$. On observe $f = \frac{45}{400} = 0{,}1125$, en dehors : la production semble s'être dégradée.
:::

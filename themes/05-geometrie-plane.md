# 5. Géométrie plane

Périmètres et aires, Pythagore, Thalès, puis la géométrie repérée du lycée : vecteurs, droites, produit scalaire.

## 5.1 Périmètres et aires <Badge text="Collège" />

::: tip Formules usuelles
| Figure | Périmètre | Aire |
|---|---|---|
| Carré de côté $c$ | $4c$ | $c^2$ |
| Rectangle $L \times \ell$ | $2(L + \ell)$ | $L \times \ell$ |
| Triangle (base $b$, hauteur $h$) | somme des côtés | $\dfrac{b \times h}{2}$ |
| Parallélogramme (base $b$, hauteur $h$) | somme des côtés | $b \times h$ |
| Losange (côté $c$, diagonales $D$ et $d$) | $4c$ | $\dfrac{D \times d}{2}$ |
| Trapèze (bases $B$ et $b$, hauteur $h$) | somme des côtés | $\dfrac{(B + b) \times h}{2}$ |
| Disque de rayon $r$ | $2\pi r$ (circonférence) | $\pi r^2$ |
:::

**Exemples**

- Rectangle de $8$ m sur $5$ m : périmètre $26$ m, aire $40$ m².
- Triangle de base $10$ cm et de hauteur $6$ cm : aire $\frac{10 \times 6}{2} = 30$ cm².
- Disque de rayon $3$ cm : périmètre $6\pi \approx 18{,}85$ cm, aire $9\pi \approx 28{,}27$ cm².
- Trapèze de bases $7$ et $3$, de hauteur $4$ : aire $\frac{(7 + 3) \times 4}{2} = 20$.

::: tip Arc et secteur de cercle (angle $\theta$ en degrés)
$$\text{longueur de l'arc} = 2\pi r \times \frac{\theta}{360}$$
$$\text{aire du secteur} = \pi r^2 \times \frac{\theta}{360}$$
:::

Exemple : une part de $45°$ d'une pizza de rayon $16$ cm a une aire de $\pi \times 256 \times \frac{45}{360} = 32\pi \approx 100{,}5$ cm².

## 5.2 Angles <Badge text="Collège" />

::: tip À retenir
- La somme des angles d'un triangle vaut $180°$.
- La somme des angles d'un quadrilatère vaut $360°$ ; celle d'un polygone à $n$ côtés, $(n - 2) \times 180°$.
- Angles **complémentaires** : somme $90°$. Angles **supplémentaires** : somme $180°$.
- Angles opposés par le sommet : égaux.
- Deux droites parallèles coupées par une sécante : les angles **alternes-internes** sont égaux, les angles **correspondants** aussi.
- Angle **inscrit** : il vaut la moitié de l'angle **au centre** qui intercepte le même arc.
:::

**Exemples**

- Un triangle a deux angles de $50°$ et $65°$. Le troisième vaut $180 - 50 - 65 = 65°$ : le triangle est isocèle.
- Chaque angle d'un hexagone régulier vaut $\frac{(6-2) \times 180}{6} = 120°$.

## 5.3 Théorème de Pythagore <Badge text="Collège" />

<figure class="figure">
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<polygon points="40,170 260,170 40,40" fill="none" stroke="currentColor" stroke-width="2"/>
<polyline points="40,152 58,152 58,170" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="26" y="188" fill="currentColor" font-size="16" font-style="italic">A</text>
<text x="264" y="188" fill="currentColor" font-size="16" font-style="italic">B</text>
<text x="26" y="36" fill="currentColor" font-size="16" font-style="italic">C</text>
<text x="150" y="190" fill="var(--courbe-1)" font-size="15" text-anchor="middle">AB</text>
<text x="8" y="110" fill="var(--courbe-1)" font-size="15">AC</text>
<text x="156" y="96" fill="var(--courbe-2)" font-size="15">BC (hypoténuse)</text>
</svg>
<figcaption>Triangle rectangle en A : l'hypoténuse est le côté opposé à l'angle droit, le plus long.</figcaption>
</figure>

::: tip Pythagore
Si le triangle $ABC$ est rectangle en $A$, alors :
$$BC^2 = AB^2 + AC^2$$
Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.
:::

::: tip Réciproque
Si $BC^2 = AB^2 + AC^2$, alors le triangle est rectangle en $A$. Si l'égalité est fausse, il n'est pas rectangle.
:::

**Exemples**

- Côtés de l'angle droit $3$ et $4$ : hypoténuse $\sqrt{9 + 16} = \sqrt{25} = 5$.
- Hypoténuse $13$, un côté $5$ : l'autre côté vaut $\sqrt{169 - 25} = \sqrt{144} = 12$.
- Diagonale d'un carré de côté $c$ : $c\sqrt{2}$. Diagonale d'un écran de $80 \times 45$ cm : $\sqrt{6400 + 2025} \approx 91{,}8$ cm.
- Triangle de côtés $8$, $15$, $17$ : $64 + 225 = 289 = 17^2$, il est rectangle. Triangle de côtés $6$, $7$, $9$ : $36 + 49 = 85 \neq 81$, il ne l'est pas.

## 5.4 Théorème de Thalès <Badge text="Collège" />

<figure class="figure">
<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="180" x2="290" y2="180" stroke="currentColor" stroke-width="1.5"/>
<line x1="30" y1="180" x2="270" y2="16" stroke="currentColor" stroke-width="1.5"/>
<line x1="140" y1="105" x2="140" y2="180" stroke="var(--courbe-1)" stroke-width="2"/>
<line x1="250" y1="30" x2="250" y2="180" stroke="var(--courbe-1)" stroke-width="2"/>
<text x="14" y="196" fill="currentColor" font-size="16" font-style="italic">A</text>
<text x="124" y="98" fill="currentColor" font-size="16" font-style="italic">M</text>
<text x="134" y="198" fill="currentColor" font-size="16" font-style="italic">N</text>
<text x="232" y="26" fill="currentColor" font-size="16" font-style="italic">B</text>
<text x="244" y="198" fill="currentColor" font-size="16" font-style="italic">C</text>
</svg>
<figcaption>(MN) parallèle à (BC) : les triangles AMN et ABC ont leurs côtés proportionnels.</figcaption>
</figure>

::: tip Thalès
Si $M \in (AB)$, $N \in (AC)$ et $(MN) \parallel (BC)$, alors :
$$\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$$
Cela vaut aussi dans la configuration « papillon » (droites croisées en $A$).
:::

::: tip Réciproque
Si $A, M, B$ et $A, N, C$ sont alignés dans le même ordre et si $\frac{AM}{AB} = \frac{AN}{AC}$, alors $(MN) \parallel (BC)$.
:::

**Exemples**

- $AM = 3$, $AB = 5$, $BC = 8$ et $(MN) \parallel (BC)$. Alors $\frac{3}{5} = \frac{MN}{8}$, donc $MN = \frac{3 \times 8}{5} = 4{,}8$.
- Mesurer un arbre : un bâton de $1$ m fait une ombre de $0{,}8$ m, l'arbre une ombre de $12$ m. Hauteur de l'arbre : $\frac{12 \times 1}{0{,}8} = 15$ m.

::: tip Agrandissement et réduction de rapport $k$
- Les longueurs sont multipliées par $k$.
- Les aires sont multipliées par $k^2$.
- Les volumes sont multipliés par $k^3$.
:::

Exemple : sur une maquette au $\frac{1}{50}$, une pièce de $20$ m² occupe $\frac{20}{2500} = 0{,}008$ m², soit $80$ cm².

## 5.5 Transformations <Badge text="Collège" />

::: tip Ce qu'elles conservent
| Transformation | Conserve | Effet |
|---|---|---|
| Symétrie axiale | longueurs, angles, aires | « pliage » le long d'une droite |
| Symétrie centrale | longueurs, angles, aires | demi-tour autour d'un point |
| Translation | longueurs, angles, aires | glissement selon un vecteur |
| Rotation | longueurs, angles, aires | on tourne d'un angle donné autour d'un point |
| Homothétie de rapport $k$ | angles, alignement | longueurs $\times \vert k \vert$, aires $\times k^2$ |
:::

## 5.6 Repère, milieu, distance <Badge text="2nde" />

::: tip Dans un repère orthonormé, avec $A(x_A ; y_A)$ et $B(x_B ; y_B)$
$$\text{Milieu } I \text{ de } [AB] : \quad I\left(\frac{x_A + x_B}{2} ; \frac{y_A + y_B}{2}\right)$$
$$\text{Distance : } AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$
:::

**Exemple** avec $A(1 ; 2)$ et $B(7 ; 10)$ :
- milieu $I(4 ; 6)$ ;
- distance $AB = \sqrt{6^2 + 8^2} = \sqrt{100} = 10$.

## 5.7 Vecteurs <Badge text="2nde" />

::: tip Coordonnées et opérations
$$\overrightarrow{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix} \qquad \|\overrightarrow{AB}\| = AB$$
Avec $\vec u \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec v \begin{pmatrix} x' \\ y' \end{pmatrix}$ :
$$\vec u + \vec v \begin{pmatrix} x + x' \\ y + y' \end{pmatrix} \qquad k\vec u \begin{pmatrix} kx \\ ky \end{pmatrix}$$
$$\|\vec u\| = \sqrt{x^2 + y^2}$$
:::

::: tip Relation de Chasles
$$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$$
:::

::: tip Colinéarité
$\vec u$ et $\vec v$ sont **colinéaires** (même direction) si et seulement si :
$$\det(\vec u, \vec v) = xy' - x'y = 0$$
- $A, B, C$ sont **alignés** si $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires.
- $(AB) \parallel (CD)$ si $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont colinéaires.
- $ABCD$ est un **parallélogramme** si $\overrightarrow{AB} = \overrightarrow{DC}$.
:::

**Exemples**

- $A(1 ; 3)$ et $B(4 ; -1)$ : $\overrightarrow{AB}(3 ; -4)$ et $AB = \sqrt{9 + 16} = 5$.
- $\vec u(2 ; -3)$ et $\vec v(-6 ; 9)$ : $\det = 2 \times 9 - (-6)(-3) = 0$, ils sont colinéaires ($\vec v = -3\vec u$).
- $A(0 ; 1)$, $B(2 ; 5)$, $C(3 ; 7)$ : $\overrightarrow{AB}(2 ; 4)$ et $\overrightarrow{AC}(3 ; 6)$, $\det = 12 - 12 = 0$, les points sont alignés.

## 5.8 Équations de droites <Badge text="2nde" /> <Badge text="1re" />

::: tip Équation réduite
Toute droite non verticale a une équation $y = mx + p$.
- $m$ : **coefficient directeur** (la pente), $m = \dfrac{y_B - y_A}{x_B - x_A}$
- $p$ : **ordonnée à l'origine** (là où la droite coupe l'axe des ordonnées)

Une droite verticale a une équation $x = c$.
:::

::: tip Équation cartésienne
Toute droite a une équation $ax + by + c = 0$. Un **vecteur directeur** est $\vec u(-b ; a)$, un **vecteur normal** est $\vec n(a ; b)$.
:::

::: tip Parallèles et perpendiculaires
- Parallèles : même coefficient directeur, $m = m'$.
- Perpendiculaires (repère orthonormé) : $m \times m' = -1$.
:::

**Exemples**

- Droite passant par $A(1 ; 2)$ et $B(3 ; 8)$ : $m = \frac{8 - 2}{3 - 1} = 3$, puis $2 = 3 \times 1 + p$ donne $p = -1$. Équation : $y = 3x - 1$.
- Perpendiculaire à $y = 3x - 1$ passant par $A(1 ; 2)$ : pente $-\frac{1}{3}$, et $2 = -\frac{1}{3} + p$ donne $y = -\frac{1}{3}x + \frac{7}{3}$.
- Intersection de $y = 2x - 1$ et $y = -x + 5$ : $2x - 1 = -x + 5$ donne $x = 2$, puis $y = 3$. Point $(2 ; 3)$.

<Courbe :fonctions="['3*x - 1', '-x/3 + 7/3']" :legende="['y = 3x − 1', 'y = −x/3 + 7/3 (perpendiculaire en A)']" :xmin="-3" :xmax="6" :ymin="-3" :ymax="9" :points="[[1,2,'A'],[3,8,'B']]" />

## 5.9 Produit scalaire <Badge text="1re" />

::: tip Quatre façons de le calculer
$$\vec u \cdot \vec v = \|\vec u\| \times \|\vec v\| \times \cos(\vec u, \vec v)$$
$$\vec u \cdot \vec v = xx' + yy' \quad \text{(repère orthonormé)}$$
$$\vec u \cdot \vec v = \frac{1}{2}\left(\|\vec u + \vec v\|^2 - \|\vec u\|^2 - \|\vec v\|^2\right)$$
$$\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}$$
où $H$ est le projeté orthogonal de $C$ sur $(AB)$.
:::

::: tip Propriété clé
$$\vec u \perp \vec v \iff \vec u \cdot \vec v = 0$$
:::

**Exemples**

- $\vec u(3 ; 4)$, $\vec v(-4 ; 3)$ : $\vec u \cdot \vec v = -12 + 12 = 0$, les vecteurs sont orthogonaux.
- $\|\vec u\| = 2$, $\|\vec v\| = 5$, angle de $60°$ : $\vec u \cdot \vec v = 2 \times 5 \times \frac{1}{2} = 5$.
- Angle entre $\vec u(1 ; 0)$ et $\vec v(1 ; 1)$ : $\cos\theta = \frac{1}{1 \times \sqrt{2}}$, donc $\theta = 45°$.

## 5.10 Al-Kashi et triangles quelconques <Badge text="1re" />

::: tip Loi des cosinus (Al-Kashi)
Dans un triangle $ABC$ avec $a = BC$, $b = AC$, $c = AB$ :
$$a^2 = b^2 + c^2 - 2bc\cos\hat{A}$$
C'est Pythagore généralisé : si $\hat A = 90°$, on retrouve $a^2 = b^2 + c^2$.
:::

::: tip Loi des sinus et aire
$$\frac{a}{\sin \hat A} = \frac{b}{\sin \hat B} = \frac{c}{\sin \hat C}$$
$$\mathcal{A} = \frac{1}{2}bc\sin \hat A$$
:::

**Exemples**

- $b = 5$, $c = 8$, $\hat A = 60°$ : $a^2 = 25 + 64 - 2 \times 5 \times 8 \times 0{,}5 = 49$, donc $a = 7$.
- Aire du même triangle : $\frac{1}{2} \times 5 \times 8 \times \sin 60° = 10\sqrt{3} \approx 17{,}3$.

## 5.11 Équation de cercle <Badge text="1re" />

::: tip Cercle de centre $\Omega(a ; b)$ et de rayon $r$
$$(x - a)^2 + (y - b)^2 = r^2$$
Cercle de diamètre $[AB]$ : $M$ est sur le cercle si et seulement si $\overrightarrow{MA} \cdot \overrightarrow{MB} = 0$.
:::

**Exemples**

- Centre $(2 ; -1)$, rayon $3$ : $(x - 2)^2 + (y + 1)^2 = 9$.
- $x^2 + y^2 - 6x + 4y - 12 = 0$. On complète les carrés :
  $$(x - 3)^2 - 9 + (y + 2)^2 - 4 - 12 = 0$$
  $$(x - 3)^2 + (y + 2)^2 = 25$$
  C'est le cercle de centre $(3 ; -2)$ et de rayon $5$.

## Exercices

**1.** Une échelle de $5$ m est posée contre un mur, son pied à $1{,}4$ m du mur. À quelle hauteur touche-t-elle le mur ?

::: details Correction
Pythagore : $h = \sqrt{25 - 1{,}96} = \sqrt{23{,}04} = 4{,}8$ m.
:::

**2.** Les points $A(-1 ; 2)$, $B(3 ; 4)$ et $C(5 ; 0)$ forment-ils un triangle rectangle ?

::: details Correction
$\overrightarrow{BA}(-4 ; -2)$ et $\overrightarrow{BC}(2 ; -4)$ : leur produit scalaire vaut $-8 + 8 = 0$. Le triangle est rectangle en $B$.
:::

**3.** Donner l'équation réduite de la droite passant par $A(-2 ; 5)$ et parallèle à $y = -3x + 7$.

::: details Correction
Même pente $m = -3$. $5 = -3 \times (-2) + p$ donne $p = -1$. Équation : $y = -3x - 1$.
:::

**4.** Un triangle a pour côtés $4$, $6$ et $8$. Calculer son plus grand angle.

::: details Correction
Le plus grand angle est en face du plus grand côté : $64 = 16 + 36 - 48\cos\theta$, d'où $\cos\theta = -\frac{12}{48} = -0{,}25$ et $\theta \approx 104{,}5°$.
:::

**5.** On double le rayon d'un disque. Par combien son aire est-elle multipliée ?

::: details Correction
Rapport $k = 2$, donc l'aire est multipliée par $k^2 = 4$.
:::

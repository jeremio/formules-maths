# 7. Géométrie dans l'espace

Volumes et aires des solides, puis vecteurs, droites et plans de l'espace (Terminale).

## 7.1 Volumes <Badge text="Collège" />

::: tip Formules usuelles
| Solide | Volume |
|---|---|
| Cube d'arête $a$ | $a^3$ |
| Pavé droit $L \times \ell \times h$ | $L \times \ell \times h$ |
| Prisme droit, cylindre | $\mathcal{B} \times h$ (aire de base $\times$ hauteur) |
| Cylindre de rayon $r$ | $\pi r^2 h$ |
| Pyramide, cône | $\dfrac{1}{3} \times \mathcal{B} \times h$ |
| Cône de rayon $r$ | $\dfrac{1}{3}\pi r^2 h$ |
| Boule de rayon $r$ | $\dfrac{4}{3}\pi r^3$ |
:::

::: tip Aires de surfaces
| Surface | Aire |
|---|---|
| Sphère de rayon $r$ | $4\pi r^2$ |
| Surface latérale d'un cylindre | $2\pi r h$ |
| Patron d'un pavé | $2(L\ell + Lh + \ell h)$ |
:::

**Exemples**

- Une piscine de $10 \times 4 \times 1{,}5$ m contient $60$ m³, soit $60\,000$ L.
- Une canette cylindrique de rayon $3$ cm et de hauteur $11$ cm : $V = \pi \times 9 \times 11 \approx 311$ cm³, soit environ $31$ cL.
- Un cône de rayon $5$ cm et de hauteur $12$ cm : $V = \frac{1}{3} \times \pi \times 25 \times 12 = 100\pi \approx 314$ cm³.
- Une balle de rayon $10$ cm : $V = \frac{4}{3}\pi \times 1000 \approx 4\,189$ cm³ ; surface $4\pi \times 100 \approx 1\,257$ cm².
- La pyramide de Khéops (base carrée de $230$ m, hauteur $146$ m) : $V = \frac{1}{3} \times 230^2 \times 146 \approx 2{,}57$ millions de m³.

## 7.2 Repérage dans l'espace <Badge text="Tle" />

::: tip Coordonnées dans un repère orthonormé $(O ; \vec i, \vec j, \vec k)$
Avec $A(x_A ; y_A ; z_A)$ et $B(x_B ; y_B ; z_B)$ :
$$\overrightarrow{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \\ z_B - z_A \end{pmatrix}$$
$$AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$
$$\text{Milieu : } \left(\frac{x_A + x_B}{2} ; \frac{y_A + y_B}{2} ; \frac{z_A + z_B}{2}\right)$$
:::

Exemple : $A(1 ; 2 ; 3)$ et $B(3 ; 0 ; 4)$. $\overrightarrow{AB}(2 ; -2 ; 1)$, $AB = \sqrt{4 + 4 + 1} = 3$, milieu $(2 ; 1 ; 3{,}5)$.

## 7.3 Produit scalaire dans l'espace <Badge text="Tle" />

::: tip Formules
$$\vec u \cdot \vec v = xx' + yy' + zz' \qquad \|\vec u\| = \sqrt{x^2 + y^2 + z^2}$$
$$\vec u \perp \vec v \iff \vec u \cdot \vec v = 0$$
Les autres formules du plan restent valables, voir le [chapitre 5](./05-geometrie-plane).
:::

Exemple : $\vec u(1 ; 2 ; -1)$ et $\vec v(3 ; -1 ; 1)$ : $\vec u \cdot \vec v = 3 - 2 - 1 = 0$, les vecteurs sont orthogonaux.

## 7.4 Droites de l'espace <Badge text="Tle" />

::: tip Représentation paramétrique
La droite passant par $A(x_A ; y_A ; z_A)$ et de vecteur directeur $\vec u(a ; b ; c)$ :
$$\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases} \quad t \in \mathbb{R}$$
:::

::: tip Positions relatives de deux droites
- **Parallèles** : vecteurs directeurs colinéaires.
- **Sécantes** : un point commun (le système a une solution unique).
- **Non coplanaires** : ni parallèles ni sécantes (impossible dans le plan, possible dans l'espace).
:::

Exemple : la droite passant par $A(1 ; 0 ; 2)$ de vecteur directeur $\vec u(2 ; 1 ; -1)$ a pour représentation $x = 1 + 2t$, $y = t$, $z = 2 - t$. Pour $t = 3$, on obtient le point $(7 ; 3 ; -1)$.

## 7.5 Plans de l'espace <Badge text="Tle" />

::: tip Équation cartésienne
Un plan de **vecteur normal** $\vec n(a ; b ; c)$ a une équation de la forme :
$$ax + by + cz + d = 0$$
On trouve $d$ en écrivant qu'un point connu du plan vérifie l'équation.
:::

::: tip Positions relatives
- Une droite de vecteur directeur $\vec u$ est **orthogonale** au plan si $\vec u$ est colinéaire à $\vec n$.
- Une droite est **parallèle** au plan si $\vec u \cdot \vec n = 0$.
- Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires, perpendiculaires si $\vec n \cdot \vec n' = 0$.
:::

::: tip Distance d'un point à un plan
Distance de $M(x_0 ; y_0 ; z_0)$ au plan $ax + by + cz + d = 0$ :
$$d = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
En pratique, on calcule le **projeté orthogonal** $H$ de $M$ sur le plan, puis $MH$.
:::

**Exemples**

- Plan passant par $A(1 ; 2 ; -1)$ de vecteur normal $\vec n(2 ; -1 ; 3)$ : $2x - y + 3z + d = 0$ avec $2 - 2 - 3 + d = 0$, donc $d = 3$. Équation : $2x - y + 3z + 3 = 0$.
- Intersection de ce plan avec la droite $x = t$, $y = 1 + t$, $z = 2t$ : on remplace, $2t - 1 - t + 6t + 3 = 0$, donc $t = -\frac{2}{7}$. Point $\left(-\frac{2}{7} ; \frac{5}{7} ; -\frac{4}{7}\right)$.
- Distance de l'origine au plan $2x - y + 2z - 9 = 0$ : $\frac{|-9|}{\sqrt{4 + 1 + 4}} = \frac{9}{3} = 3$.

## Exercices

**1.** Un aquarium de $60 \times 30 \times 40$ cm est rempli aux trois quarts. Combien de litres contient-il ?

::: details Correction
$60 \times 30 \times 40 = 72\,000$ cm³ $= 72$ L. Aux trois quarts : $54$ L.
:::

**2.** On double le rayon d'une boule. Par combien son volume est-il multiplié ?

::: details Correction
Agrandissement de rapport $2$ : le volume est multiplié par $2^3 = 8$.
:::

**3.** Les points $A(1 ; 0 ; 1)$, $B(2 ; 1 ; 0)$ et $C(4 ; 3 ; -2)$ sont-ils alignés ?

::: details Correction
$\overrightarrow{AB}(1 ; 1 ; -1)$ et $\overrightarrow{AC}(3 ; 3 ; -3) = 3\overrightarrow{AB}$. Les vecteurs sont colinéaires, donc les points sont alignés.
:::

**4.** Donner une équation du plan passant par $O$ et orthogonal à la droite de vecteur directeur $\vec u(1 ; -2 ; 2)$. Calculer la distance du point $M(3 ; 0 ; 3)$ à ce plan.

::: details Correction
$\vec u$ est normal au plan : $x - 2y + 2z = 0$ (car $O$ est dans le plan, $d = 0$).

Distance : $\frac{|3 - 0 + 6|}{\sqrt{1 + 4 + 4}} = \frac{9}{3} = 3$.
:::

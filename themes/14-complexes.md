# 14. Nombres complexes

Un nombre $i$ tel que $i^2 = -1$ : il permet de résoudre toutes les équations du second degré et de faire de la géométrie par le calcul.

## 14.1 Forme algébrique <Badge text="Maths expertes" /> <Badge text="Ancien prog." />

::: tip Définition
$$i^2 = -1$$
Tout nombre complexe s'écrit de façon unique $z = a + ib$, avec $a$ et $b$ réels :
- $a = \text{Re}(z)$ est la **partie réelle** ;
- $b = \text{Im}(z)$ est la **partie imaginaire**.

$z$ est **réel** si $b = 0$, **imaginaire pur** si $a = 0$. L'ensemble des complexes se note $\mathbb{C}$.
:::

::: tip Calculs
On calcule comme avec des polynômes en $i$, en remplaçant $i^2$ par $-1$.
$$(a + ib) + (c + id) = (a + c) + i(b + d)$$
$$(a + ib)(c + id) = (ac - bd) + i(ad + bc)$$
Puissances de $i$ : $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, puis le cycle recommence.
:::

**Exemples**

- $(2 + 3i) + (1 - 5i) = 3 - 2i$
- $(2 + 3i)(1 - 5i) = 2 - 10i + 3i - 15i^2 = 2 - 7i + 15 = 17 - 7i$
- $(1 + i)^2 = 1 + 2i + i^2 = 2i$
- $i^{10} = i^{8} \times i^2 = -1$

## 14.2 Conjugué et quotient <Badge text="Maths expertes" />

::: tip Conjugué de $z = a + ib$
$$\bar z = a - ib$$
$$z \bar z = a^2 + b^2 \ \text{(un réel positif)} \qquad z + \bar z = 2a \qquad z - \bar z = 2ib$$
$$\overline{z + z'} = \bar z + \bar z' \qquad \overline{z z'} = \bar z \, \bar z' \qquad \overline{\left(\frac{z}{z'}\right)} = \frac{\bar z}{\bar z'}$$
:::

::: tip Quotient : multiplier en haut et en bas par le conjugué du dénominateur
$$\frac{1}{a + ib} = \frac{a - ib}{a^2 + b^2}$$
:::

**Exemples**

- $\overline{3 - 4i} = 3 + 4i$, et $(3 - 4i)(3 + 4i) = 9 + 16 = 25$.
- $\dfrac{1}{1 + i} = \dfrac{1 - i}{2} = \dfrac12 - \dfrac12 i$
- $\dfrac{3 + i}{1 - 2i} = \dfrac{(3 + i)(1 + 2i)}{1 + 4} = \dfrac{3 + 6i + i - 2}{5} = \dfrac{1 + 7i}{5}$

## 14.3 Équation du second degré dans $\mathbb{C}$ <Badge text="Tle" /> <Badge text="Maths expertes" />

::: tip Si $\Delta = b^2 - 4ac < 0$ (coefficients réels)
L'équation $az^2 + bz + c = 0$ a deux solutions complexes **conjuguées** :
$$z_1 = \frac{-b - i\sqrt{-\Delta}}{2a} \qquad z_2 = \frac{-b + i\sqrt{-\Delta}}{2a}$$
:::

**Exemples**

- $z^2 + 1 = 0$ : $z = i$ ou $z = -i$.
- $z^2 - 2z + 5 = 0$ : $\Delta = 4 - 20 = -16$, donc
  $$z = \frac{2 \pm 4i}{2} = 1 \pm 2i$$
- $z^2 + z + 1 = 0$ : $\Delta = -3$, donc $z = -\frac{1}{2} \pm i\frac{\sqrt{3}}{2}$.

## 14.4 Module et argument <Badge text="Maths expertes" />

::: tip Interprétation géométrique
Le complexe $z = a + ib$ est représenté par le point $M(a ; b)$ du plan. On dit que $z$ est l'**affixe** de $M$.
- **Module** : $|z| = \sqrt{a^2 + b^2} = OM$ (la distance à l'origine).
- **Argument** : $\arg(z) = \theta$, l'angle entre l'axe des abscisses et $\overrightarrow{OM}$, défini à $2\pi$ près.
$$\cos\theta = \frac{a}{|z|} \qquad \sin\theta = \frac{b}{|z|}$$
:::

<figure class="figure">
<svg viewBox="-40 -170 300 200" xmlns="http://www.w3.org/2000/svg">
<line x1="-30" y1="0" x2="250" y2="0" stroke="currentColor" stroke-opacity="0.6"/>
<line x1="0" y1="20" x2="0" y2="-160" stroke="currentColor" stroke-opacity="0.6"/>
<line x1="0" y1="0" x2="180" y2="-120" stroke="var(--courbe-1)" stroke-width="2"/>
<line x1="180" y1="-120" x2="180" y2="0" stroke="currentColor" stroke-dasharray="4 3"/>
<line x1="180" y1="-120" x2="0" y2="-120" stroke="currentColor" stroke-dasharray="4 3"/>
<circle cx="180" cy="-120" r="4" fill="currentColor"/>
<path d="M 40,0 A 40,40 0 0 0 33.3,-22.2" fill="none" stroke="currentColor"/>
<text x="46" y="-8" fill="currentColor" font-size="14" font-style="italic">θ</text>
<text x="188" y="-124" fill="currentColor" font-size="14" font-style="italic">M(z)</text>
<text x="80" y="-74" fill="var(--courbe-1)" font-size="14">|z|</text>
<text x="176" y="16" fill="currentColor" font-size="13">a</text>
<text x="-14" y="-116" fill="currentColor" font-size="13">b</text>
<text x="236" y="-6" fill="currentColor" font-size="12">Re</text>
<text x="6" y="-150" fill="currentColor" font-size="12">Im</text>
</svg>
<figcaption>Le point M d'affixe z = a + ib : module |z| = OM, argument θ.</figcaption>
</figure>

::: tip Propriétés
$$|zz'| = |z| \times |z'| \qquad \left|\frac{z}{z'}\right| = \frac{|z|}{|z'|} \qquad |\bar z| = |z| \qquad |z|^2 = z\bar z$$
$$\arg(zz') = \arg z + \arg z' \qquad \arg\frac{z}{z'} = \arg z - \arg z' \qquad \arg(z^n) = n\arg z$$
:::

**Exemples**

- $|3 + 4i| = \sqrt{9 + 16} = 5$
- $z = 1 + i$ : $|z| = \sqrt{2}$, $\cos\theta = \sin\theta = \frac{\sqrt2}{2}$, donc $\arg z = \frac{\pi}{4}$.
- $z = -2i$ : $|z| = 2$, $\arg z = -\frac{\pi}{2}$.
- $z = 1 - i\sqrt{3}$ : $|z| = 2$, $\cos\theta = \frac{1}{2}$ et $\sin\theta = -\frac{\sqrt3}{2}$, donc $\arg z = -\frac{\pi}{3}$.

## 14.5 Formes trigonométrique et exponentielle <Badge text="Tle" /> <Badge text="Maths expertes" />

::: tip Écritures
Avec $r = |z|$ et $\theta = \arg z$ :
$$z = r(\cos\theta + i\sin\theta) = r\,e^{i\theta}$$
$$e^{i\theta} = \cos\theta + i\sin\theta$$
Valeurs à connaître : $e^{i\pi} = -1$ (identité d'Euler, $e^{i\pi} + 1 = 0$), $e^{i\pi/2} = i$, $e^{2i\pi} = 1$.
:::

::: tip Calculs en forme exponentielle (le grand intérêt)
$$r e^{i\theta} \times r' e^{i\theta'} = rr'\,e^{i(\theta + \theta')} \qquad \frac{r e^{i\theta}}{r' e^{i\theta'}} = \frac{r}{r'}\,e^{i(\theta - \theta')}$$
$$\left(r e^{i\theta}\right)^n = r^n e^{in\theta} \qquad \overline{r e^{i\theta}} = r e^{-i\theta}$$
:::

::: tip Formules de Moivre et d'Euler
$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta) \quad \text{(Moivre)}$$
$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2} \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i} \quad \text{(Euler)}$$
:::

**Exemples**

- $1 + i = \sqrt{2}\,e^{i\pi/4}$
- $(1 + i)^8 = (\sqrt{2})^8 e^{i \cdot 8\pi/4} = 16\,e^{2i\pi} = 16$
- $(1 + i\sqrt{3})^6 = \left(2e^{i\pi/3}\right)^6 = 64\,e^{2i\pi} = 64$
- $\frac{2e^{i\pi/3}}{e^{i\pi/6}} = 2e^{i\pi/6} = \sqrt{3} + i$

## 14.6 Géométrie avec les complexes <Badge text="Maths expertes" /> <Badge text="Ancien prog." />

::: tip Traductions géométriques (points $A$, $B$, $C$ d'affixes $z_A$, $z_B$, $z_C$)
| Géométrie | Complexes |
|---|---|
| vecteur $\overrightarrow{AB}$ | $z_B - z_A$ |
| distance $AB$ | $\vert z_B - z_A \vert$ |
| milieu de $[AB]$ | $\frac{z_A + z_B}{2}$ |
| angle $(\overrightarrow{AB}, \overrightarrow{AC})$ | $\arg\left(\frac{z_C - z_A}{z_B - z_A}\right)$ |
| $A, B, C$ alignés | $\frac{z_C - z_A}{z_B - z_A}$ est réel |
| $(AB) \perp (AC)$ | $\frac{z_C - z_A}{z_B - z_A}$ est imaginaire pur |
| translation de vecteur d'affixe $b$ | $z' = z + b$ |
| rotation de centre $O$, d'angle $\theta$ | $z' = e^{i\theta} z$ |
| homothétie de centre $O$, de rapport $k$ | $z' = kz$ |
:::

**Exemple** : $A(1)$, $B(3 + i)$, $C(2i)$. On calcule $\frac{z_C - z_A}{z_B - z_A} = \frac{-1 + 2i}{2 + i} = \frac{(-1 + 2i)(2 - i)}{5} = \frac{5i}{5} = i$.

C'est un imaginaire pur de module $1$ : le triangle $ABC$ est **rectangle isocèle** en $A$.

## 14.7 Racines $n$-ièmes de l'unité <Badge text="Maths expertes" />

::: tip Solutions de $z^n = 1$
$$z_k = e^{2ik\pi/n} \qquad k = 0, 1, \ldots, n - 1$$
Ce sont les sommets d'un polygone régulier à $n$ côtés inscrit dans le cercle de rayon $1$. Leur somme est nulle (pour $n \ge 2$).
:::

Exemple : $z^3 = 1$ a pour solutions $1$, $j = e^{2i\pi/3} = -\frac12 + i\frac{\sqrt3}{2}$ et $j^2 = \bar j$. On a $1 + j + j^2 = 0$.

## Exercices

**1.** Écrire sous forme algébrique $(3 - 2i)^2$ et $\dfrac{5}{2 + i}$.

::: details Correction
$(3 - 2i)^2 = 9 - 12i + 4i^2 = 5 - 12i$.

$\dfrac{5}{2 + i} = \dfrac{5(2 - i)}{4 + 1} = 2 - i$.
:::

**2.** Résoudre dans $\mathbb{C}$ : $z^2 + 4z + 13 = 0$.

::: details Correction
$\Delta = 16 - 52 = -36$. Donc $z = \frac{-4 \pm 6i}{2} = -2 \pm 3i$.
:::

**3.** Donner le module et un argument de $z = -\sqrt{3} + i$, puis sa forme exponentielle.

::: details Correction
$|z| = \sqrt{3 + 1} = 2$. $\cos\theta = -\frac{\sqrt3}{2}$ et $\sin\theta = \frac12$, donc $\theta = \frac{5\pi}{6}$. $z = 2e^{5i\pi/6}$.
:::

**4.** Calculer $(1 - i)^{10}$.

::: details Correction
$1 - i = \sqrt{2}\,e^{-i\pi/4}$. Donc $(1 - i)^{10} = 2^5 e^{-10i\pi/4} = 32\,e^{-5i\pi/2} = 32\,e^{-i\pi/2} = -32i$.
:::

**5.** Résoudre $\bar z = 2z - 3 + 3i$ (indication : poser $z = a + ib$).

::: details Correction
$a - ib = 2a + 2ib - 3 + 3i$. Parties réelles : $a = 2a - 3$, donc $a = 3$. Parties imaginaires : $-b = 2b + 3$, donc $b = -1$. Solution : $z = 3 - i$.
:::

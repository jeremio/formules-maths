# 1. Calcul numérique

Les bases du calcul : priorités, fractions, puissances, racines, pourcentages, proportionnalité.

## 1.1 Priorités opératoires <Badge text="Collège" />

::: tip Ordre des calculs
1. **P**arenthèses (les plus intérieures d'abord)
2. **E**xposants (puissances)
3. **M**ultiplications et **D**ivisions, de gauche à droite
4. **A**dditions et **S**oustractions, de gauche à droite

Moyen mnémotechnique : **PEMDAS**.
:::

**Exemples**

- $2 + 3 \times 4 = 2 + 12 = 14$ (et pas $20$)
- $(2 + 3) \times 4 = 5 \times 4 = 20$
- $20 - 8 \div 2 \times 3$ : on fait $8 \div 2 = 4$, puis $4 \times 3 = 12$, enfin $20 - 12 = 8$
- $-3^2 = -9$ mais $(-3)^2 = 9$ : l'exposant ne porte que sur ce qui le touche.

## 1.2 Les quatre opérations et les signes <Badge text="Collège" />

::: tip Vocabulaire
| Opération | Résultat | Exemple |
|---|---|---|
| Addition | somme | $7 + 5 = 12$ |
| Soustraction | différence | $7 - 5 = 2$ |
| Multiplication | produit | $7 \times 5 = 35$ |
| Division | quotient | $35 \div 5 = 7$ |
:::

::: tip Règle des signes (produit et quotient)
$$(+)\times(+) = (+) \qquad (-)\times(-) = (+) \qquad (+)\times(-) = (-)$$
Même règle pour la division. Un produit contenant un nombre **pair** de facteurs négatifs est positif, un nombre **impair** le rend négatif.
:::

**Exemples**

- $-4 \times (-5) = 20$
- $-12 \div 3 = -4$
- $(-1)\times(-2)\times(-3) = -6$ (trois signes moins, donc négatif)
- $-7 + 3 = -4$ ; $-7 - 3 = -10$ ; $5 - (-2) = 5 + 2 = 7$ (soustraire un négatif revient à ajouter)

::: warning Division par zéro
On ne divise **jamais** par $0$. $\frac{5}{0}$ n'existe pas. En revanche $\frac{0}{5} = 0$.
:::

## 1.3 Fractions <Badge text="Collège" />

::: tip Simplifier
$$\frac{a \times k}{b \times k} = \frac{a}{b} \quad (k \neq 0)$$
On divise le numérateur et le dénominateur par un même nombre (idéalement leur PGCD).
:::

Exemple : $\frac{18}{24} = \frac{3 \times 6}{4 \times 6} = \frac{3}{4}$

::: tip Additionner, soustraire : même dénominateur obligatoire
$$\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c} \qquad \frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$$
:::

Exemples :
- $\dfrac{2}{7} + \dfrac{3}{7} = \dfrac{5}{7}$
- $\dfrac{1}{4} + \dfrac{1}{6} = \dfrac{3}{12} + \dfrac{2}{12} = \dfrac{5}{12}$ (dénominateur commun : $12$)
- $\dfrac{5}{6} - \dfrac{1}{3} = \dfrac{5}{6} - \dfrac{2}{6} = \dfrac{3}{6} = \dfrac{1}{2}$

::: tip Multiplier : numérateurs entre eux, dénominateurs entre eux
$$\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$$
:::

Exemple : $\frac{2}{3} \times \frac{9}{4} = \frac{18}{12} = \frac{3}{2}$. Astuce : simplifier **avant** de multiplier, $\frac{2}{3}\times\frac{9}{4} = \frac{2 \times 3 \times 3}{3 \times 2 \times 2} = \frac{3}{2}$ (on barre le $2$ et le $3$ présents en haut et en bas).

::: tip Diviser : multiplier par l'inverse
$$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c} \qquad \text{l'inverse de } \frac{c}{d} \text{ est } \frac{d}{c}$$
:::

Exemples :
- $\dfrac{3}{5} \div \dfrac{6}{7} = \dfrac{3}{5} \times \dfrac{7}{6} = \dfrac{21}{30} = \dfrac{7}{10}$
- $\dfrac{4}{9} \div 2 = \dfrac{4}{9} \times \dfrac{1}{2} = \dfrac{2}{9}$

::: tip Fraction d'une quantité
Prendre $\frac{a}{b}$ d'une quantité $Q$, c'est calculer $\frac{a}{b} \times Q$.
:::

Exemple : les $\frac{3}{4}$ de $60$ € valent $\frac{3 \times 60}{4} = 45$ €.

## 1.4 Puissances <Badge text="Collège" /> <Badge text="2nde" />

::: tip Définition
$$a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ facteurs}} \qquad a^0 = 1 \qquad a^1 = a \qquad a^{-n} = \frac{1}{a^n}$$
:::

::: tip Règles de calcul ($a, b \neq 0$, $m, n$ entiers)
$$a^m \times a^n = a^{m+n} \qquad \frac{a^m}{a^n} = a^{m-n} \qquad (a^m)^n = a^{m \times n}$$
$$(a \times b)^n = a^n \times b^n \qquad \left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$$
:::

**Exemples**

- $2^3 \times 2^4 = 2^7 = 128$
- $\dfrac{5^6}{5^4} = 5^2 = 25$
- $(3^2)^3 = 3^6 = 729$
- $10^{-3} = \dfrac{1}{1000} = 0{,}001$
- $(2 \times 5)^3 = 2^3 \times 5^3 = 8 \times 125 = 1000$

::: warning Piège classique
$a^m + a^n \neq a^{m+n}$. Par exemple $2^2 + 2^3 = 4 + 8 = 12$, alors que $2^5 = 32$.
:::

::: tip Puissances de 10 et écriture scientifique
$$10^n = 1\underbrace{0\cdots0}_{n \text{ zéros}} \qquad 10^{-n} = 0{,}\underbrace{0\cdots0}_{n-1}1$$
Écriture scientifique : $a \times 10^n$ avec $1 \le a < 10$.
:::

Exemples :
- $45\,000 = 4{,}5 \times 10^4$
- $0{,}000\,72 = 7{,}2 \times 10^{-4}$
- $(3 \times 10^5) \times (2 \times 10^{-2})$ $= 6 \times 10^3 = 6000$

Préfixes utiles : kilo $= 10^3$, méga $= 10^6$, giga $= 10^9$, téra $= 10^{12}$ ; milli $= 10^{-3}$, micro $= 10^{-6}$, nano $= 10^{-9}$.

## 1.5 Racines carrées <Badge text="Collège" /> <Badge text="2nde" />

::: tip Définition
Pour $a \ge 0$, $\sqrt{a}$ est le nombre **positif** dont le carré vaut $a$.
$$\left(\sqrt{a}\right)^2 = a \qquad \sqrt{a^2} = |a|$$
:::

::: tip Règles ($a, b \ge 0$)
$$\sqrt{a \times b} = \sqrt{a} \times \sqrt{b} \qquad \sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \ (b > 0)$$
:::

::: warning
$\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$. Par exemple $\sqrt{9 + 16} = \sqrt{25} = 5$, alors que $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$.
:::

**Exemples**

- Carrés parfaits à connaître : $\sqrt{1}=1$, $\sqrt{4}=2$, $\sqrt{9}=3$, $\sqrt{16}=4$, $\sqrt{25}=5$, $\sqrt{36}=6$, $\sqrt{49}=7$, $\sqrt{64}=8$, $\sqrt{81}=9$, $\sqrt{100}=10$, $\sqrt{121}=11$, $\sqrt{144}=12$
- Simplifier : $\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2}$
- $\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$
- Supprimer la racine au dénominateur : $\dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$. Avec une différence, on multiplie par la quantité conjuguée :
  $$\frac{1}{\sqrt{3} - 1} = \frac{\sqrt{3} + 1}{(\sqrt{3}-1)(\sqrt{3}+1)} = \frac{\sqrt{3}+1}{2}$$
- Valeurs approchées : $\sqrt{2} \approx 1{,}414$, $\sqrt{3} \approx 1{,}732$, $\sqrt{5} \approx 2{,}236$

## 1.6 Arrondis et valeurs approchées <Badge text="Collège" />

::: tip Règle d'arrondi
On regarde le chiffre juste après la position voulue : de $0$ à $4$, on garde ; de $5$ à $9$, on augmente le chiffre précédent de $1$.
:::

Exemples avec $\pi = 3{,}141\,59\ldots$ :
- à l'unité : $3$
- au dixième : $3{,}1$
- au centième : $3{,}14$
- au millième : $3{,}142$

Troncature : on coupe sans arrondir ($\pi$ tronqué au millième : $3{,}141$).

## 1.7 Proportionnalité et produit en croix <Badge text="Collège" />

::: tip Proportionnalité
Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre $k$ (le **coefficient de proportionnalité**) : $y = k \times x$.
:::

::: tip Produit en croix (règle de trois)
$$\frac{a}{b} = \frac{c}{d} \iff a \times d = b \times c$$
Si trois valeurs sont connues, la quatrième vaut :
$$d = \frac{b \times c}{a}$$
:::

| Quantité | $a$ | $c$ |
|---|---|---|
| Prix | $b$ | $d = \dfrac{b \times c}{a}$ |

**Exemples**

- $3$ kg de pommes coûtent $7{,}50$ €. Combien coûtent $5$ kg ?
  $$\text{prix} = \frac{7{,}50 \times 5}{3} = 12{,}50 \text{ €}$$
- Une recette pour $4$ personnes demande $300$ g de farine. Pour $6$ personnes : $\frac{300 \times 6}{4} = 450$ g.
- Résoudre $\frac{x}{12} = \frac{5}{8}$ : $8x = 60$, donc $x = 7{,}5$.
- Une carte au $1/25\,000$ : $4$ cm sur la carte représentent $4 \times 25\,000 = 100\,000$ cm $= 1$ km.

## 1.8 Pourcentages <Badge text="Collège" /> <Badge text="2nde" />

::: tip Prendre un pourcentage
$$t\,\% \text{ de } Q = \frac{t}{100} \times Q$$
Proportion en pourcentage : $\dfrac{\text{partie}}{\text{total}} \times 100$.
:::

Exemples :
- $15\,\%$ de $80$ : $0{,}15 \times 80 = 12$
- $18$ élèves sur $24$ : $\dfrac{18}{24} \times 100 = 75\,\%$

::: tip Évolutions : coefficient multiplicateur
| Évolution | Coefficient multiplicateur $CM$ |
|---|---|
| hausse de $t\,\%$ | $CM = 1 + \dfrac{t}{100}$ |
| baisse de $t\,\%$ | $CM = 1 - \dfrac{t}{100}$ |

$$V_{\text{finale}} = V_{\text{initiale}} \times CM \qquad \text{taux d'évolution} = \frac{V_f - V_i}{V_i}$$
:::

**Exemples**

- Un article à $80$ € augmente de $15\,\%$ : $80 \times 1{,}15 = 92$ €.
- Soldes à $-30\,\%$ sur $120$ € : $120 \times 0{,}70 = 84$ €.
- Un prix passe de $50$ € à $60$ € : taux $= \dfrac{60-50}{50} = 0{,}2 = +20\,\%$.

::: tip Évolutions successives et évolution réciproque
- Successives : on **multiplie** les coefficients, $CM_{\text{global}} = CM_1 \times CM_2$.
- Réciproque (revenir à la valeur de départ) : $CM_{\text{réciproque}} = \dfrac{1}{CM}$.
:::

Exemples :
- $+10\,\%$ puis $-10\,\%$ : $1{,}1 \times 0{,}9 = 0{,}99$, soit $-1\,\%$ au total (et pas $0\,\%$).
- $+20\,\%$ deux fois de suite : $1{,}2^2 = 1{,}44$, soit $+44\,\%$.
- Après une hausse de $25\,\%$, quelle baisse ramène au prix initial ? $\frac{1}{1{,}25} = 0{,}8$, soit $-20\,\%$.
- TVA à $20\,\%$ : prix TTC $=$ prix HT $\times 1{,}2$, donc prix HT $=$ prix TTC $\div 1{,}2$. Ainsi $60$ € TTC font $50$ € HT.

## 1.9 Vitesse, débit, grandeurs composées <Badge text="Collège" />

::: tip Vitesse moyenne
$$v = \frac{d}{t} \qquad d = v \times t \qquad t = \frac{d}{v}$$
Conversion : $1 \text{ m/s} = 3{,}6 \text{ km/h}$.
:::

Exemples :
- $150$ km en $2$ h $30$ : $v = \dfrac{150}{2{,}5} = 60$ km/h.
- À $90$ km/h pendant $20$ min : $d = 90 \times \dfrac{20}{60} = 30$ km.
- $36$ km/h $= 36 \div 3{,}6 = 10$ m/s.
- Attention aux durées : $1$ h $15$ min $= 1{,}25$ h (et pas $1{,}15$ h).

Autres grandeurs du même type : débit $= \dfrac{\text{volume}}{\text{temps}}$, masse volumique $\rho = \dfrac{m}{V}$, densité de population $= \dfrac{\text{habitants}}{\text{surface}}$.

## 1.10 Conversions d'unités <Badge text="Collège" />

::: tip Tableaux de conversion
- Longueurs : km, hm, dam, **m**, dm, cm, mm (facteur $10$ entre deux unités)
- Aires : km², hm², dam², **m²**, dm², cm², mm² (facteur $100$)
- Volumes : m³, dm³, cm³, mm³ (facteur $1000$)
- $1 \text{ dm}^3 = 1 \text{ L}$ ; $1 \text{ cm}^3 = 1 \text{ mL}$ ; $1 \text{ m}^3 = 1000 \text{ L}$
- $1 \text{ ha} = 10\,000 \text{ m}^2$ ; $1 \text{ are} = 100 \text{ m}^2$
- Durées : $1 \text{ h} = 60 \text{ min} = 3600 \text{ s}$
:::

Exemples :
- $3{,}5 \text{ m} = 350 \text{ cm}$
- $2{,}4 \text{ m}^2 = 24\,000 \text{ cm}^2$
- $0{,}75 \text{ m}^3 = 750 \text{ L}$
- $2{,}6$ h $= 2$ h $+ \ 0{,}6 \times 60$ min $= 2$ h $36$ min

## Exercices

**1.** Calculer $5 - 3 \times (4 - 6)^2$.

::: details Correction
$(4-6)^2 = (-2)^2 = 4$, puis $3 \times 4 = 12$, et $5 - 12 = -7$.
:::

**2.** Calculer et simplifier $\dfrac{2}{3} + \dfrac{5}{6} \times \dfrac{4}{5}$.

::: details Correction
La multiplication d'abord : $\dfrac{5}{6} \times \dfrac{4}{5} = \dfrac{20}{30} = \dfrac{2}{3}$. Puis $\dfrac{2}{3} + \dfrac{2}{3} = \dfrac{4}{3}$.
:::

**3.** Écrire $\dfrac{6 \times 10^{8}}{3 \times 10^{-2}}$ en écriture scientifique.

::: details Correction
$\dfrac{6}{3} \times 10^{8 - (-2)} = 2 \times 10^{10}$.
:::

**4.** Un loyer de $650$ € augmente de $2\,\%$ par an pendant $3$ ans. Quel est le nouveau loyer ? Quel est le pourcentage global d'augmentation ?

::: details Correction
$CM = 1{,}02^3 \approx 1{,}0612$. Loyer : $650 \times 1{,}0612 \approx 689{,}79$ €. Hausse globale : environ $+6{,}12\,\%$ (et pas $6\,\%$).
:::

**5.** Une voiture consomme $6{,}5$ L aux $100$ km. Combien consomme-t-elle pour $340$ km ?

::: details Correction
Produit en croix : $\dfrac{6{,}5 \times 340}{100} = 22{,}1$ L.
:::

**6.** Simplifier $\sqrt{72} - 2\sqrt{8}$.

::: details Correction
$\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$ et $2\sqrt{8} = 2 \times 2\sqrt{2} = 4\sqrt{2}$. Résultat : $2\sqrt{2}$.
:::

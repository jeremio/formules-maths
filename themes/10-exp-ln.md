# 10. Exponentielle et logarithme

Deux fonctions réciproques l'une de l'autre, qui transforment les produits en sommes (et inversement).

## 10.1 La fonction exponentielle <Badge text="1re" /> <Badge text="Tle" />

::: tip Définition et valeurs clés
$\exp$ est l'unique fonction égale à sa dérivée et qui vaut $1$ en $0$ :
$$\exp' = \exp \qquad \exp(0) = 1 \qquad e = \exp(1) \approx 2{,}718$$
On note $\exp(x) = e^x$. Pour tout réel $x$ : $e^x > 0$.
:::

::: tip Règles de calcul (comme les puissances)
$$e^{a + b} = e^a \times e^b \qquad e^{a - b} = \frac{e^a}{e^b} \qquad e^{-a} = \frac{1}{e^a}$$
$$(e^a)^n = e^{na} \qquad \sqrt{e^a} = e^{a/2}$$
:::

::: tip Équations et inéquations
$\exp$ est strictement croissante sur $\mathbb{R}$, donc :
$$e^a = e^b \iff a = b \qquad e^a < e^b \iff a < b$$
:::

::: tip Dérivées et limites
$$(e^{u})' = u'\,e^{u} \qquad (e^{ax+b})' = a\,e^{ax+b}$$
$$\lim_{x \to -\infty} e^x = 0 \qquad \lim_{x \to +\infty} e^x = +\infty$$
:::

**Exemples**

- $e^{3} \times e^{-1} = e^{2}$ ; $\frac{e^{5x}}{e^{2x}} = e^{3x}$ ; $(e^{x})^2 = e^{2x}$
- $e^{2x - 1} = e^{x + 3} \iff 2x - 1 = x + 3 \iff x = 4$
- $e^{x^2} = e \iff x^2 = 1 \iff x = 1$ ou $x = -1$
- $e^{3x} > 1 \iff e^{3x} > e^0 \iff x > 0$

## 10.2 La fonction logarithme népérien <Badge text="Tle" />

::: tip Définition
$\ln$ est la fonction réciproque de $\exp$. Elle est définie sur $]0 ; +\infty[$ :
$$y = \ln x \iff x = e^y \quad (x > 0)$$
$$e^{\ln x} = x \ (x > 0) \qquad \ln(e^x) = x \ (x \in \mathbb{R})$$
$$\ln 1 = 0 \qquad \ln e = 1$$
:::

::: tip Règles de calcul ($a, b > 0$)
$$\ln(ab) = \ln a + \ln b \qquad \ln\frac{a}{b} = \ln a - \ln b$$
$$\ln\frac{1}{a} = -\ln a \qquad \ln(a^n) = n\ln a \qquad \ln\sqrt{a} = \frac{1}{2}\ln a$$
:::

::: tip Équations et inéquations
$\ln$ est strictement croissante sur $]0 ; +\infty[$, donc pour $a, b > 0$ :
$$\ln a = \ln b \iff a = b \qquad \ln a < \ln b \iff a < b$$
$$e^x = k \iff x = \ln k \quad (k > 0)$$
:::

::: tip Dérivées et limites
$$(\ln x)' = \frac{1}{x} \qquad (\ln u)' = \frac{u'}{u}$$
$$\lim_{x \to 0^+} \ln x = -\infty \qquad \lim_{x \to +\infty} \ln x = +\infty$$
$\ln x < 0$ sur $]0 ; 1[$ et $\ln x > 0$ sur $]1 ; +\infty[$.
:::

<Courbe :fonctions="['exp(x)', 'ln(x)', 'x']" :legende="['eˣ', 'ln x', 'y = x (axe de symétrie)']" :xmin="-4" :xmax="5" :ymin="-4" :ymax="5" :points="[[0,1],[1,0]]" />

Les courbes de $e^x$ et de $\ln x$ sont symétriques par rapport à la droite $y = x$.

**Exemples**

- $\ln 8 = \ln 2^3 = 3\ln 2$ ; $\ln 6 = \ln 2 + \ln 3$ ; $\ln\frac{1}{4} = -2\ln 2$
- $e^{x} = 5 \iff x = \ln 5 \approx 1{,}609$
- $\ln(2x - 1) = 0 \iff 2x - 1 = 1 \iff x = 1$ (et on vérifie que $2x - 1 > 0$)
- $\ln(x) + \ln(x - 1) = \ln 6$ : sur $]1 ; +\infty[$, cela donne $x(x - 1) = 6$, soit $x^2 - x - 6 = 0$, d'où $x = 3$ ($x = -2$ est rejeté).
- Placement à $3\,\%$ par an : le capital double quand $1{,}03^n \ge 2$, soit $n \ge \frac{\ln 2}{\ln 1{,}03} \approx 23{,}4$. Il faut $24$ ans.

## 10.3 Croissances comparées <Badge text="Tle" />

::: tip L'exponentielle l'emporte sur les puissances, qui l'emportent sur le logarithme
$$\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \qquad \lim_{x \to -\infty} x^n e^x = 0$$
$$\lim_{x \to +\infty} \frac{\ln x}{x^n} = 0 \qquad \lim_{x \to 0^+} x^n \ln x = 0$$
:::

::: tip Limites de référence
$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1 \qquad \lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$
:::

Exemple : $\lim\limits_{x \to +\infty} (x^2 - e^x) = -\infty$, car $x^2 - e^x = e^x\left(\frac{x^2}{e^x} - 1\right)$ et $\frac{x^2}{e^x} \to 0$.

## 10.4 Logarithme décimal et puissances réelles <Badge text="Tle" /> <Badge text="Ancien prog." />

::: tip Logarithme décimal
$$\log x = \frac{\ln x}{\ln 10} \qquad \log(10^n) = n$$
Il compte les « chiffres » d'un nombre : c'est l'échelle des décibels, du pH, de Richter.
:::

::: tip Puissances à exposant réel ($a > 0$)
$$a^x = e^{x \ln a}$$
:::

**Exemples**

- $\log 1000 = 3$ ; $\log 0{,}01 = -2$
- $2^{0{,}5} = e^{0{,}5 \ln 2} = \sqrt{2}$
- pH $= -\log[\text{H}_3\text{O}^+]$ : pour une concentration de $10^{-3}$ mol/L, le pH vaut $3$.

## Exercices

**1.** Simplifier $A = \frac{e^{2x} \times e^{-x+1}}{e^{x}}$ et $B = \ln 50 - \ln 2 + \ln\frac{1}{25}$.

::: details Correction
$A = e^{2x - x + 1 - x} = e^{1} = e$.

$B = \ln\frac{50}{2 \times 25} = \ln 1 = 0$.
:::

**2.** Résoudre $e^{2x} - 3e^{x} + 2 = 0$ (indication : poser $X = e^x$).

::: details Correction
$X^2 - 3X + 2 = 0$ donne $X = 1$ ou $X = 2$. Donc $e^x = 1$, soit $x = 0$, ou $e^x = 2$, soit $x = \ln 2$.
:::

**3.** Résoudre $\ln(3x - 2) \le \ln(x + 4)$.

::: details Correction
Conditions : $3x - 2 > 0$ et $x + 4 > 0$, soit $x > \frac{2}{3}$. Puis $3x - 2 \le x + 4 \iff x \le 3$.

Solution : $x \in \left]\frac{2}{3} ; 3\right]$.
:::

**4.** Dériver $f(x) = \ln(x^2 + 4)$ et $g(x) = (x - 1)e^{-x}$.

::: details Correction
$f'(x) = \frac{2x}{x^2 + 4}$.

$g'(x) = e^{-x} - (x - 1)e^{-x} = (2 - x)e^{-x}$.
:::

**5.** Une population de bactéries est modélisée par $N(t) = 500\,e^{0{,}2t}$ ($t$ en heures). Au bout de combien de temps dépasse-t-elle $10\,000$ ?

::: details Correction
$500\,e^{0{,}2t} > 10\,000 \iff e^{0{,}2t} > 20 \iff t > \frac{\ln 20}{0{,}2} \approx 14{,}98$. Il faut un peu moins de $15$ heures.
:::

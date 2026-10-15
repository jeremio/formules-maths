# 13. Intégration et équations différentielles

Primitives, intégrales et aires, puis les équations différentielles qui modélisent croissances et désintégrations.

## 13.1 Primitives <Badge text="Tle" />

::: tip Définition
$F$ est une **primitive** de $f$ si $F' = f$. Si $F$ est une primitive, toutes les primitives sont les $F + C$ ($C$ constante).
:::

::: tip Primitives usuelles
| $f(x)$ | une primitive $F(x)$ | Valable sur |
|---|---|---|
| $k$ | $kx$ | $\mathbb{R}$ |
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n + 1}$ | $\mathbb{R}$ (ou $\mathbb{R}^*$ si $n < 0$) |
| $\dfrac{1}{x}$ | $\ln x$ | $]0 ; +\infty[$ |
| $\dfrac{1}{x^2}$ | $-\dfrac{1}{x}$ | $\mathbb{R}^*$ |
| $\dfrac{1}{\sqrt{x}}$ | $2\sqrt{x}$ | $]0 ; +\infty[$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |
| $e^{ax}$ | $\dfrac{1}{a}e^{ax}$ | $\mathbb{R}$ |
| $\cos x$ | $\sin x$ | $\mathbb{R}$ |
| $\sin x$ | $-\cos x$ | $\mathbb{R}$ |
:::

::: tip Formes composées (à reconnaître)
| $f$ | une primitive |
|---|---|
| $u'\,u^n$ | $\dfrac{u^{n+1}}{n + 1}$ |
| $\dfrac{u'}{u}$ | $\ln \vert u \vert$ |
| $\dfrac{u'}{u^2}$ | $-\dfrac{1}{u}$ |
| $\dfrac{u'}{\sqrt{u}}$ | $2\sqrt{u}$ |
| $u'\,e^u$ | $e^u$ |
:::

**Exemples**

- $f(x) = 3x^2 - 4x + 5$ : $F(x) = x^3 - 2x^2 + 5x$
- $f(x) = 2x(x^2 + 1)^3$ : de la forme $u'u^3$, donc $F(x) = \frac{(x^2 + 1)^4}{4}$
- $f(x) = \frac{2x}{x^2 + 1}$ : de la forme $\frac{u'}{u}$, donc $F(x) = \ln(x^2 + 1)$
- $f(x) = x\,e^{x^2}$ : $\frac{1}{2} \times 2x\,e^{x^2}$, donc $F(x) = \frac{1}{2}e^{x^2}$
- La primitive de $f(x) = 2x$ qui vaut $5$ en $1$ : $F(x) = x^2 + C$ avec $1 + C = 5$, donc $F(x) = x^2 + 4$.

## 13.2 Intégrale et aire <Badge text="Tle" />

::: tip Définition
Si $F$ est une primitive de $f$ continue sur $[a ; b]$ :
$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$
Si $f \ge 0$ sur $[a ; b]$, c'est l'**aire** (en unités d'aire) entre la courbe, l'axe des abscisses et les droites $x = a$ et $x = b$.
:::

**Exemple** : $\displaystyle\int_0^2 x^2\,dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} - 0 = \frac{8}{3} \approx 2{,}67$.

<Courbe :fonctions="'x**2'" :legende="['f(x) = x², aire entre 0 et 2 = 8/3']" :xmin="-1" :xmax="3" :ymin="-1" :ymax="5" :aire="[0, 2]" :hauteur="280" />

::: tip Propriétés
$$\int_a^b (f + g) = \int_a^b f + \int_a^b g \qquad \int_a^b kf = k\int_a^b f \quad \text{(linéarité)}$$
$$\int_a^b f + \int_b^c f = \int_a^c f \quad \text{(Chasles)} \qquad \int_a^a f = 0 \qquad \int_b^a f = -\int_a^b f$$
$$f \le g \text{ sur } [a ; b] \implies \int_a^b f \le \int_a^b g \quad \text{(positivité, si } a \le b)$$
:::

::: tip Aire entre deux courbes
Si $f \ge g$ sur $[a ; b]$ :
$$\mathcal{A} = \int_a^b \big(f(x) - g(x)\big)\,dx$$
:::

::: tip Valeur moyenne
$$\mu = \frac{1}{b - a}\int_a^b f(x)\,dx$$
:::

**Exemples**

- $\displaystyle\int_1^e \frac{1}{x}\,dx = \Big[\ln x\Big]_1^e = 1 - 0 = 1$
- $\displaystyle\int_0^{\pi} \sin x\,dx = \Big[-\cos x\Big]_0^{\pi} = 1 + 1 = 2$
- Aire entre $f(x) = x$ et $g(x) = x^2$ sur $[0 ; 1]$ : $\int_0^1 (x - x^2)\,dx = \frac12 - \frac13 = \frac{1}{6}$.
- Valeur moyenne de $x^2$ sur $[0 ; 3]$ : $\frac{1}{3} \times \frac{27}{3} = 3$.

## 13.3 Intégration par parties <Badge text="Tle" />

::: tip Formule
$$\int_a^b u(x)\,v'(x)\,dx = \Big[u(x)\,v(x)\Big]_a^b - \int_a^b u'(x)\,v(x)\,dx$$
On choisit pour $u$ ce qui se simplifie en dérivant (un polynôme, $\ln x$), et pour $v'$ ce qu'on sait primitiver ($e^x$, $\cos x$…).
:::

**Exemples**

- $\displaystyle\int_0^1 x\,e^x\,dx$ : $u = x$, $v' = e^x$, donc $u' = 1$, $v = e^x$.
  $$\int_0^1 x\,e^x\,dx = \Big[x\,e^x\Big]_0^1 - \int_0^1 e^x\,dx = e - (e - 1) = 1$$
- $\displaystyle\int_1^e \ln x\,dx$ : $u = \ln x$, $v' = 1$, donc $u' = \frac{1}{x}$, $v = x$.
  $$\int_1^e \ln x\,dx = \Big[x\ln x\Big]_1^e - \int_1^e 1\,dx = e - (e - 1) = 1$$

## 13.4 Équations différentielles <Badge text="Tle" />

::: tip $y' = ay$
Les solutions sont les fonctions :
$$y(x) = C\,e^{ax} \quad (C \in \mathbb{R})$$
La condition initiale $y(0) = y_0$ donne $C = y_0$.
:::

::: tip $y' = ay + b$ ($a \neq 0$)
$$y(x) = C\,e^{ax} - \frac{b}{a}$$
La solution constante $-\frac{b}{a}$ est l'état d'équilibre.
:::

::: tip $y' = ay + f$ (cas général)
Solution générale = solution générale de $y' = ay$ + une solution particulière.
:::

**Exemples**

- Désintégration radioactive : $N' = -\lambda N$, d'où $N(t) = N_0 e^{-\lambda t}$. Demi-vie : $t_{1/2} = \frac{\ln 2}{\lambda}$.
- Refroidissement d'un café à $80$ °C dans une pièce à $20$ °C : $T' = -0{,}1(T - 20)$, soit $T' = -0{,}1T + 2$. Donc $T(t) = Ce^{-0{,}1t} + 20$, et $T(0) = 80$ donne $C = 60$ : $T(t) = 60e^{-0{,}1t} + 20$.
- $y' = 2y$ avec $y(0) = 3$ : $y(x) = 3e^{2x}$.

::: tip $y'' + \omega^2 y = 0$ <Badge text="Ancien prog." />
$$y(x) = A\cos(\omega x) + B\sin(\omega x)$$
C'est l'équation des oscillations (ressort, pendule).
:::

## Exercices

**1.** Calculer $\displaystyle\int_{-1}^{2} (3x^2 - 2x + 1)\,dx$.

::: details Correction
$\Big[x^3 - x^2 + x\Big]_{-1}^{2} = (8 - 4 + 2) - (-1 - 1 - 1) = 6 + 3 = 9$.
:::

**2.** Calculer $\displaystyle\int_0^1 \frac{x}{x^2 + 1}\,dx$.

::: details Correction
C'est $\frac{1}{2}\frac{u'}{u}$ avec $u = x^2 + 1$ : $\left[\frac{1}{2}\ln(x^2 + 1)\right]_0^1 = \frac{1}{2}\ln 2 \approx 0{,}347$.
:::

**3.** Calculer l'aire entre les courbes de $f(x) = 4 - x^2$ et de $g(x) = x + 2$ entre leurs points d'intersection.

::: details Correction
$4 - x^2 = x + 2 \iff x^2 + x - 2 = 0 \iff x = -2$ ou $x = 1$. Sur $[-2 ; 1]$, $f \ge g$ :
$$\int_{-2}^{1} (-x^2 - x + 2)\,dx = \left[-\frac{x^3}{3} - \frac{x^2}{2} + 2x\right]_{-2}^{1} = \frac{7}{6} - \left(-\frac{10}{3}\right) = \frac{9}{2}$$
:::

**4.** Calculer $\displaystyle\int_0^{\pi} x\cos x\,dx$ par parties.

::: details Correction
$u = x$, $v' = \cos x$, donc $u' = 1$, $v = \sin x$.
$$\Big[x\sin x\Big]_0^{\pi} - \int_0^{\pi} \sin x\,dx = 0 - 2 = -2$$
:::

**5.** Le carbone 14 a une demi-vie de $5\,730$ ans. Quelle proportion en reste-t-il au bout de $10\,000$ ans ?

::: details Correction
$\lambda = \frac{\ln 2}{5730}$, puis $\frac{N}{N_0} = e^{-\lambda \times 10000} = 2^{-10000/5730} \approx 0{,}298$. Il en reste environ $30\,\%$.
:::

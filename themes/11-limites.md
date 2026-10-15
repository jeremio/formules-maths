# 11. Limites et continuité

Comment se comporte une fonction aux bords de son domaine, et ce qu'on peut déduire de sa continuité.

## 11.1 Limites des fonctions de référence <Badge text="Tle" />

::: tip En $+\infty$
$$\lim_{x \to +\infty} x^n = +\infty \qquad \lim_{x \to +\infty} \sqrt{x} = +\infty \qquad \lim_{x \to +\infty} \frac{1}{x^n} = 0$$
$$\lim_{x \to +\infty} e^x = +\infty \qquad \lim_{x \to +\infty} \ln x = +\infty$$
:::

::: tip En $-\infty$
$$\lim_{x \to -\infty} x^n = \begin{cases} +\infty & n \text{ pair} \\ -\infty & n \text{ impair} \end{cases} \qquad \lim_{x \to -\infty} e^x = 0 \qquad \lim_{x \to -\infty} \frac{1}{x} = 0$$
:::

::: tip En $0$
$$\lim_{x \to 0^+} \frac{1}{x} = +\infty \qquad \lim_{x \to 0^-} \frac{1}{x} = -\infty \qquad \lim_{x \to 0^+} \ln x = -\infty$$
:::

## 11.2 Opérations sur les limites <Badge text="Tle" />

::: tip Les règles « intuitives »
| Somme | Produit | Quotient |
|---|---|---|
| $\ell + \infty = \infty$ | $\ell \times \infty = \pm\infty$ ($\ell \neq 0$, règle des signes) | $\frac{\ell}{\infty} = 0$ |
| $+\infty + \infty = +\infty$ | $\infty \times \infty = \pm\infty$ | $\frac{\ell}{0^{\pm}} = \pm\infty$ ($\ell \neq 0$) |
:::

::: warning Les 4 formes indéterminées
$$\infty - \infty \qquad 0 \times \infty \qquad \frac{\infty}{\infty} \qquad \frac{0}{0}$$
Il faut transformer l'expression pour conclure : factoriser par le terme dominant, multiplier par la quantité conjuguée, utiliser les croissances comparées, etc.
:::

::: tip Astuces pour lever l'indétermination
- **Polynôme** en $\pm\infty$ : il a la même limite que son terme de plus haut degré.
- **Fraction rationnelle** en $\pm\infty$ : même limite que le quotient des termes de plus haut degré.
- **Racines** : multiplier par la quantité conjuguée.
- **exp et ln** : croissances comparées ([chapitre 10](./10-exp-ln)).
:::

**Exemples**

- $\lim\limits_{x \to +\infty} (x^3 - 5x^2 + 1) = \lim\limits_{x \to +\infty} x^3 = +\infty$
- $\lim\limits_{x \to +\infty} \frac{3x^2 + 1}{2x^2 - x} = \lim\limits_{x \to +\infty} \frac{3x^2}{2x^2} = \frac{3}{2}$
- $\lim\limits_{x \to -\infty} \frac{x + 1}{x^2 + 3} = \lim\limits_{x \to -\infty} \frac{1}{x} = 0$
- $\lim\limits_{x \to 2^+} \frac{1}{x - 2} = +\infty$ et $\lim\limits_{x \to 2^-} \frac{1}{x - 2} = -\infty$
- Quantité conjuguée : $\sqrt{x + 1} - \sqrt{x} = \frac{1}{\sqrt{x + 1} + \sqrt{x}}$, qui tend vers $0$ en $+\infty$.

## 11.3 Asymptotes <Badge text="Tle" />

::: tip Trois types
| Si… | alors la courbe a une asymptote… |
|---|---|
| $\lim\limits_{x \to \pm\infty} f(x) = \ell$ | **horizontale** d'équation $y = \ell$ |
| $\lim\limits_{x \to a} f(x) = \pm\infty$ | **verticale** d'équation $x = a$ |
| $\lim\limits_{x \to \pm\infty} \big[f(x) - (mx + p)\big] = 0$ | **oblique** d'équation $y = mx + p$ |
:::

**Exemple** : $f(x) = \frac{2x + 1}{x - 1}$.

- En $\pm\infty$ : $f(x) \to \frac{2x}{x} = 2$, asymptote horizontale $y = 2$.
- En $1$ : le numérateur tend vers $3$ et le dénominateur vers $0$, asymptote verticale $x = 1$.

<Courbe :fonctions="'(2*x + 1)/(x - 1)'" :legende="['f(x) = (2x + 1)/(x − 1)']" :xmin="-6" :xmax="8" :ymin="-6" :ymax="10" :verticales="[1]" :horizontales="[2]" />

## 11.4 Théorèmes de comparaison <Badge text="Tle" />

::: tip Comparaison
Si $f(x) \ge g(x)$ et $\lim g = +\infty$, alors $\lim f = +\infty$.
:::

::: tip Théorème des gendarmes
Si $g(x) \le f(x) \le h(x)$ et si $g$ et $h$ ont la **même limite** $\ell$, alors $\lim f = \ell$.
:::

Exemple : $-1 \le \sin x \le 1$, donc $-\frac{1}{x} \le \frac{\sin x}{x} \le \frac{1}{x}$ pour $x > 0$. Les deux bornes tendent vers $0$, donc $\lim\limits_{x \to +\infty} \frac{\sin x}{x} = 0$.

## 11.5 Continuité et théorème des valeurs intermédiaires <Badge text="Tle" />

::: tip Continuité
Une fonction est **continue** si sa courbe se trace « sans lever le crayon ». Les fonctions usuelles (polynômes, $\exp$, $\ln$, $\sqrt{\ }$, $\sin$, $\cos$, et leurs sommes, produits, quotients, composées) sont continues sur leur ensemble de définition.
:::

::: tip Théorème des valeurs intermédiaires (TVI)
Si $f$ est continue sur $[a ; b]$, alors pour tout $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ a **au moins une** solution dans $[a ; b]$.

Si de plus $f$ est **strictement monotone**, la solution est **unique** (corollaire, ou « théorème de la bijection »).
:::

**Exemple** : montrer que $x^3 + x - 1 = 0$ a une unique solution sur $[0 ; 1]$.

$f(x) = x^3 + x - 1$ est continue, et strictement croissante car $f'(x) = 3x^2 + 1 > 0$. De plus $f(0) = -1 < 0$ et $f(1) = 1 > 0$. Donc il existe une unique solution $\alpha$. Par balayage à la calculatrice : $\alpha \approx 0{,}682$.

## Exercices

**1.** Calculer $\lim\limits_{x \to +\infty} \frac{5x^3 - 2x}{1 - x^3}$.

::: details Correction
Quotient des termes dominants : $\frac{5x^3}{-x^3} = -5$. La limite vaut $-5$.
:::

**2.** Calculer $\lim\limits_{x \to +\infty} (e^x - x^3)$ et $\lim\limits_{x \to 0^+} x \ln x$.

::: details Correction
$e^x - x^3 = e^x\left(1 - \frac{x^3}{e^x}\right)$ et $\frac{x^3}{e^x} \to 0$, donc la limite vaut $+\infty$.

Par croissance comparée, $\lim\limits_{x \to 0^+} x \ln x = 0$.
:::

**3.** Trouver les asymptotes de $f(x) = \frac{3}{x + 2} + 1$.

::: details Correction
Verticale $x = -2$ (le dénominateur s'annule). Horizontale $y = 1$ (car $\frac{3}{x + 2} \to 0$ en $\pm\infty$).
:::

**4.** Montrer que $e^x = 3 - x$ a une unique solution sur $\mathbb{R}$, et la situer entre deux entiers.

::: details Correction
$g(x) = e^x + x - 3$ est continue et strictement croissante ($g'(x) = e^x + 1 > 0$). Ses limites sont $-\infty$ en $-\infty$ et $+\infty$ en $+\infty$ : il y a une unique solution. $g(0) = -2 < 0$ et $g(1) = e - 2 > 0$, donc la solution est entre $0$ et $1$ (environ $0{,}79$).
:::

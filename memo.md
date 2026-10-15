# Fiche mémo

L'essentiel des formules, sans exemples. Pour le détail et les exemples, suivre le lien de chaque thème.

## Calcul numérique

[Chapitre 1](./themes/01-calcul-numerique)

$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd} \qquad \frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$$
$$a^m a^n = a^{m+n} \qquad \frac{a^m}{a^n} = a^{m-n} \qquad (a^m)^n = a^{mn} \qquad a^{-n} = \frac{1}{a^n} \qquad a^0 = 1$$
$$\sqrt{ab} = \sqrt a \sqrt b \qquad \sqrt{\frac{a}{b}} = \frac{\sqrt a}{\sqrt b} \qquad \sqrt{a^2} = |a|$$
$$\text{produit en croix : } \frac{a}{b} = \frac{c}{d} \iff ad = bc \qquad d = \frac{bc}{a}$$
$$\text{hausse de } t\,\% : \times\left(1 + \frac{t}{100}\right) \qquad \text{baisse de } t\,\% : \times\left(1 - \frac{t}{100}\right) \qquad \text{taux} = \frac{V_f - V_i}{V_i}$$
$$v = \frac{d}{t} \qquad 1 \text{ m/s} = 3{,}6 \text{ km/h}$$

## Arithmétique

[Chapitre 2](./themes/02-arithmetique)

$$a = bq + r, \ 0 \le r < b \qquad \text{PGCD}(a, b) \times \text{PPCM}(a, b) = ab$$
$$a \equiv b \pmod n \iff n \mid a - b \qquad au + bv = 1 \iff \text{PGCD}(a, b) = 1 \qquad a^{p-1} \equiv 1 \pmod p$$

## Calcul littéral

[Chapitre 3](./themes/03-calcul-litteral)

$$(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2$$
$$ax + b = 0 \iff x = -\frac{b}{a} \qquad AB = 0 \iff A = 0 \text{ ou } B = 0$$
Inéquation : multiplier ou diviser par un négatif **change le sens**.

## Second degré

[Chapitre 4](./themes/04-second-degre)

$$\Delta = b^2 - 4ac \qquad x_{1,2} = \frac{-b \pm \sqrt\Delta}{2a} \qquad x_0 = -\frac{b}{2a}$$
$$\text{sommet : } \alpha = -\frac{b}{2a}, \ \beta = f(\alpha) \qquad x_1 + x_2 = -\frac{b}{a} \qquad x_1 x_2 = \frac{c}{a}$$
Signe de $a$ à l'extérieur des racines.

## Géométrie plane

[Chapitre 5](./themes/05-geometrie-plane)

$$\text{Pythagore : } BC^2 = AB^2 + AC^2 \qquad \text{Thalès : } \frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$$
$$\mathcal{A}_{\text{triangle}} = \frac{bh}{2} \qquad \mathcal{A}_{\text{disque}} = \pi r^2 \qquad \mathcal{P}_{\text{cercle}} = 2\pi r \qquad \mathcal{A}_{\text{trapèze}} = \frac{(B + b)h}{2}$$
$$AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} \qquad I\left(\frac{x_A + x_B}{2} ; \frac{y_A + y_B}{2}\right) \qquad m = \frac{y_B - y_A}{x_B - x_A}$$
$$\det(\vec u, \vec v) = xy' - x'y = 0 \iff \text{colinéaires} \qquad \vec u \cdot \vec v = xx' + yy' = \|\vec u\|\|\vec v\|\cos\theta$$
$$a^2 = b^2 + c^2 - 2bc\cos\hat A \qquad (x - a)^2 + (y - b)^2 = r^2$$

## Trigonométrie

[Chapitre 6](./themes/06-trigonometrie)

$$\sin = \frac{\text{opp}}{\text{hyp}} \qquad \cos = \frac{\text{adj}}{\text{hyp}} \qquad \tan = \frac{\text{opp}}{\text{adj}} \qquad \cos^2 x + \sin^2 x = 1 \qquad \pi \text{ rad} = 180°$$
$$\cos(a + b) = \cos a\cos b - \sin a\sin b \qquad \sin(a + b) = \sin a\cos b + \cos a\sin b$$
$$\sin 2a = 2\sin a\cos a \qquad \cos 2a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$$

| $x$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ |
| $\sin x$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ |

## Géométrie dans l'espace

[Chapitre 7](./themes/07-geometrie-espace)

$$V_{\text{prisme, cylindre}} = \mathcal{B}h \qquad V_{\text{pyramide, cône}} = \frac{1}{3}\mathcal{B}h \qquad V_{\text{boule}} = \frac{4}{3}\pi r^3 \qquad \mathcal{A}_{\text{sphère}} = 4\pi r^2$$
$$\text{plan de normale } \vec n(a ; b ; c) : ax + by + cz + d = 0 \qquad \text{droite : } M = A + t\vec u$$

## Dérivées

[Chapitre 9](./themes/09-derivation)

| $f$ | $x^n$ | $\frac{1}{x}$ | $\sqrt x$ | $e^x$ | $\ln x$ | $\cos x$ | $\sin x$ |
|---|---|---|---|---|---|---|---|
| $f'$ | $nx^{n-1}$ | $-\frac{1}{x^2}$ | $\frac{1}{2\sqrt x}$ | $e^x$ | $\frac{1}{x}$ | $-\sin x$ | $\cos x$ |

$$(uv)' = u'v + uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2} \qquad (u^n)' = nu'u^{n-1} \qquad (e^u)' = u'e^u \qquad (\ln u)' = \frac{u'}{u}$$
$$\text{tangente : } y = f'(a)(x - a) + f(a) \qquad f' > 0 \Rightarrow f \nearrow \qquad f'' \ge 0 \Rightarrow \text{convexe}$$

## Exponentielle et logarithme

[Chapitre 10](./themes/10-exp-ln)

$$e^{a + b} = e^a e^b \qquad e^{-a} = \frac{1}{e^a} \qquad \ln(ab) = \ln a + \ln b \qquad \ln\frac{a}{b} = \ln a - \ln b \qquad \ln(a^n) = n\ln a$$
$$e^{\ln x} = x \qquad \ln(e^x) = x \qquad \ln 1 = 0 \qquad \ln e = 1 \qquad e^x = k \iff x = \ln k$$
$$\frac{e^x}{x^n} \xrightarrow[x \to +\infty]{} +\infty \qquad \frac{\ln x}{x} \xrightarrow[x \to +\infty]{} 0 \qquad x\ln x \xrightarrow[x \to 0^+]{} 0$$

## Limites

[Chapitre 11](./themes/11-limites)

Formes indéterminées : $\infty - \infty$, $0 \times \infty$, $\frac{\infty}{\infty}$, $\frac{0}{0}$. Polynôme ou fraction rationnelle en $\pm\infty$ : termes de plus haut degré.

Asymptote horizontale $y = \ell$ si $f \to \ell$ en $\pm\infty$ ; verticale $x = a$ si $f \to \pm\infty$ en $a$.

## Suites

[Chapitre 12](./themes/12-suites)

$$\text{arithmétique : } u_n = u_0 + nr \qquad 1 + 2 + \cdots + n = \frac{n(n + 1)}{2} \qquad S = \text{nb termes} \times \frac{\text{premier} + \text{dernier}}{2}$$
$$\text{géométrique : } u_n = u_0 q^n \qquad 1 + q + \cdots + q^n = \frac{1 - q^{n+1}}{1 - q} \qquad q^n \to 0 \text{ si } |q| < 1$$

## Intégrales

[Chapitre 13](./themes/13-integration)

$$\int_a^b f(x)\,dx = F(b) - F(a) \qquad \int_a^b uv' = \Big[uv\Big]_a^b - \int_a^b u'v \qquad \mu = \frac{1}{b - a}\int_a^b f$$
$$y' = ay \iff y = Ce^{ax} \qquad y' = ay + b \iff y = Ce^{ax} - \frac{b}{a}$$

## Nombres complexes

[Chapitre 14](./themes/14-complexes)

$$i^2 = -1 \qquad \bar z = a - ib \qquad |z| = \sqrt{a^2 + b^2} \qquad z\bar z = |z|^2 \qquad z = re^{i\theta} = r(\cos\theta + i\sin\theta)$$
$$e^{i\theta}e^{i\theta'} = e^{i(\theta + \theta')} \qquad e^{i\pi} = -1 \qquad \Delta < 0 : z = \frac{-b \pm i\sqrt{-\Delta}}{2a}$$

## Probabilités

[Chapitre 15](./themes/15-probabilites)

$$P(\bar A) = 1 - P(A) \qquad P(A \cup B) = P(A) + P(B) - P(A \cap B) \qquad P_A(B) = \frac{P(A \cap B)}{P(A)}$$
$$P(B) = P(A)P_A(B) + P(\bar A)P_{\bar A}(B) \qquad \text{indépendance : } P(A \cap B) = P(A)P(B)$$
$$E(X) = \sum p_i x_i \qquad V(X) = E(X^2) - E(X)^2 \qquad \mathcal{B}(n, p) : P(X = k) = \binom{n}{k}p^k(1 - p)^{n-k}, \ E = np$$
$$\binom{n}{k} = \frac{n!}{k!(n - k)!} \qquad (a + b)^n = \sum_{k=0}^{n}\binom{n}{k}a^k b^{n-k}$$

## Statistiques

[Chapitre 16](./themes/16-statistiques)

$$\bar x = \frac{\sum n_i x_i}{\sum n_i} \qquad V = \overline{x^2} - \bar x^2 \qquad \sigma = \sqrt V \qquad \text{intervalle à } 95\,\% : \left[f - \frac{1}{\sqrt n} ; f + \frac{1}{\sqrt n}\right]$$

## Matrices

[Chapitre 17](./themes/17-matrices-graphes)

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \qquad AX = B \iff X = A^{-1}B \qquad U_n = A^n U_0$$

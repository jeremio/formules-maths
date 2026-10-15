# 12. Suites

Des listes de nombres $u_0, u_1, u_2, \ldots$ : intérêts composés, populations, remboursements…

## 12.1 Généralités <Badge text="1re" />

::: tip Deux façons de définir une suite
- **Explicite** : $u_n = f(n)$. On calcule directement n'importe quel terme.
- **Par récurrence** : $u_{n+1} = f(u_n)$, avec $u_0$ donné. Chaque terme se calcule à partir du précédent.
:::

**Exemples**

- $u_n = 3n^2 - 1$ : $u_0 = -1$, $u_1 = 2$, $u_{10} = 299$.
- $u_0 = 2$ et $u_{n+1} = 2u_n - 1$ : $u_1 = 3$, $u_2 = 5$, $u_3 = 9$.

::: tip Sens de variation
- $u$ est **croissante** si $u_{n+1} - u_n \ge 0$ pour tout $n$ ;
- $u$ est **décroissante** si $u_{n+1} - u_n \le 0$ pour tout $n$.

Si tous les termes sont strictement positifs, on peut aussi comparer $\frac{u_{n+1}}{u_n}$ à $1$.
:::

## 12.2 Suites arithmétiques <Badge text="1re" />

On ajoute toujours le même nombre $r$, la **raison**.

::: tip Formules
$$u_{n+1} = u_n + r$$
$$u_n = u_0 + nr \qquad u_n = u_p + (n - p)r$$
$$\text{Somme de termes consécutifs} = \text{nombre de termes} \times \frac{\text{premier} + \text{dernier}}{2}$$
$$1 + 2 + \cdots + n = \frac{n(n + 1)}{2}$$
:::

- Si $r > 0$, la suite est croissante ; si $r < 0$, décroissante.
- Sa représentation graphique est formée de points **alignés**.

**Exemples**

- $u_0 = 5$, $r = 3$ : $u_n = 5 + 3n$, et $u_{20} = 65$.
- $u_3 = 11$ et $u_7 = 23$ : $4r = 12$, donc $r = 3$ et $u_0 = 11 - 9 = 2$.
- $1 + 2 + \cdots + 100 = \frac{100 \times 101}{2} = 5\,050$.
- Somme $u_0 + \cdots + u_{20}$ pour $u_n = 5 + 3n$ : $21$ termes, donc $21 \times \frac{5 + 65}{2} = 735$.
- Un salaire de $2\,000$ € augmente de $50$ € par an : $u_n = 2000 + 50n$. Au bout de $10$ ans : $2\,500$ €.

## 12.3 Suites géométriques <Badge text="1re" />

On multiplie toujours par le même nombre $q$, la **raison**.

::: tip Formules
$$u_{n+1} = q \times u_n$$
$$u_n = u_0 \times q^n \qquad u_n = u_p \times q^{n - p}$$
$$\text{Somme de termes consécutifs} = \text{premier terme} \times \frac{1 - q^{\text{nombre de termes}}}{1 - q} \quad (q \neq 1)$$
$$1 + q + q^2 + \cdots + q^n = \frac{1 - q^{n+1}}{1 - q}$$
:::

- Avec $u_0 > 0$ : si $q > 1$, la suite est croissante ; si $0 < q < 1$, décroissante.
- Une évolution de $t\,\%$ par période donne une suite géométrique de raison $q = 1 + \frac{t}{100}$.

**Exemples**

- $u_0 = 3$, $q = 2$ : $u_n = 3 \times 2^n$, et $u_{10} = 3\,072$.
- Un capital de $1\,000$ € placé à $4\,\%$ par an : $C_n = 1000 \times 1{,}04^n$. Après $10$ ans : $C_{10} \approx 1\,480{,}24$ €.
- Une voiture perd $15\,\%$ de sa valeur par an : $V_n = V_0 \times 0{,}85^n$.
- $1 + 2 + 4 + \cdots + 2^{9} = \frac{1 - 2^{10}}{1 - 2} = 1\,023$.
- La légende de l'échiquier : $1 + 2 + \cdots + 2^{63} = 2^{64} - 1 \approx 1{,}8 \times 10^{19}$ grains de riz.

## 12.4 Limites de suites <Badge text="Tle" />

::: tip Limite de $q^n$
| $q$ | $\lim\limits_{n \to +\infty} q^n$ |
|---|---|
| $q > 1$ | $+\infty$ |
| $q = 1$ | $1$ |
| $-1 < q < 1$ | $0$ |
| $q \le -1$ | pas de limite |
:::

::: tip Conséquence : somme infinie géométrique
Si $-1 < q < 1$ :
$$1 + q + q^2 + \cdots = \frac{1}{1 - q}$$
:::

::: tip Théorèmes de convergence
- Une suite **croissante et majorée** converge. Une suite **décroissante et minorée** converge.
- Une suite croissante et non majorée tend vers $+\infty$.
- Les théorèmes de comparaison et des gendarmes s'appliquent comme pour les fonctions ([chapitre 11](./11-limites)).
- Si $u_{n+1} = f(u_n)$ converge vers $\ell$ et $f$ est continue, alors $\ell = f(\ell)$ (point fixe).
:::

**Exemples**

- $\lim 0{,}9^n = 0$ ; $\lim 1{,}01^n = +\infty$ (même si cela prend du temps).
- $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = \frac{1}{2} \times \frac{1}{1 - \frac12} = 1$.
- $0{,}999\ldots = \frac{9}{10} \times \frac{1}{1 - \frac{1}{10}} = 1$.
- $u_{n+1} = 0{,}5u_n + 3$ : si elle converge, sa limite vérifie $\ell = 0{,}5\ell + 3$, donc $\ell = 6$.

## 12.5 Raisonnement par récurrence <Badge text="Tle" />

::: tip Principe (comme des dominos)
Pour prouver qu'une propriété $P(n)$ est vraie pour tout $n \ge n_0$ :
1. **Initialisation** : on vérifie $P(n_0)$.
2. **Hérédité** : on suppose $P(n)$ vraie pour un $n$ quelconque, et on montre que $P(n+1)$ l'est aussi.
3. **Conclusion** : $P(n)$ est vraie pour tout $n \ge n_0$.
:::

Exemple d'usage : montrer que $u_n \le 6$ pour tout $n$, avec $u_0 = 1$ et $u_{n+1} = 0{,}5u_n + 3$.
- Initialisation : $u_0 = 1 \le 6$.
- Hérédité : si $u_n \le 6$, alors $0{,}5u_n + 3 \le 0{,}5 \times 6 + 3 = 6$, donc $u_{n+1} \le 6$.

## 12.6 Suites arithmético-géométriques <Badge text="Tle" /> <Badge text="Ancien prog." />

::: tip Méthode pour $u_{n+1} = a\,u_n + b$ ($a \neq 1$)
1. Chercher le point fixe $\ell = \frac{b}{1 - a}$.
2. La suite $v_n = u_n - \ell$ est géométrique de raison $a$.
3. D'où $u_n = (u_0 - \ell)\,a^n + \ell$.
:::

Exemple : $u_0 = 1$, $u_{n+1} = 0{,}5u_n + 3$. On a $\ell = 6$, donc $u_n = -5 \times 0{,}5^n + 6$, qui tend vers $6$.

## Exercices

**1.** Une suite arithmétique vérifie $u_5 = 17$ et $u_{12} = 38$. Trouver $r$, $u_0$ et $u_{100}$.

::: details Correction
$7r = 21$, donc $r = 3$. $u_0 = 17 - 15 = 2$, et $u_{100} = 2 + 300 = 302$.
:::

**2.** Calculer $S = 3 + 6 + 12 + \cdots + 3 \times 2^{9}$.

::: details Correction
Suite géométrique de premier terme $3$, de raison $2$, avec $10$ termes : $S = 3 \times \frac{1 - 2^{10}}{1 - 2} = 3 \times 1023 = 3\,069$.
:::

**3.** Une ville de $50\,000$ habitants perd $2\,\%$ de sa population par an. Combien d'habitants dans $10$ ans ? Au bout de combien d'années passe-t-elle sous $40\,000$ ?

::: details Correction
$P_n = 50\,000 \times 0{,}98^n$, donc $P_{10} \approx 40\,854$.

$0{,}98^n < 0{,}8 \iff n > \frac{\ln 0{,}8}{\ln 0{,}98} \approx 11{,}05$. Il faut $12$ ans.
:::

**4.** Soit $u_0 = 10$ et $u_{n+1} = 0{,}8u_n + 1$. Exprimer $u_n$ en fonction de $n$ et donner sa limite.

::: details Correction
Point fixe : $\ell = \frac{1}{1 - 0{,}8} = 5$. La suite $v_n = u_n - 5$ est géométrique de raison $0{,}8$ et $v_0 = 5$. Donc $u_n = 5 \times 0{,}8^n + 5$, qui tend vers $5$.
:::

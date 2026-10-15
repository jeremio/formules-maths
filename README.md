# formules-maths

Aide-mémoire des formules de mathématiques, du collège à la Terminale (spécialité maths, maths expertes et ancien programme de Terminale S) : formules, résultats et exemples chiffrés, sans démonstrations.

Site statique [VitePress](https://vitepress.dev), formules en LaTeX rendues par MathJax au build.

## Lancer

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # site statique dans .vitepress/dist
pnpm preview   # sert le build
```

## Organisation

| Chemin | Contenu |
|---|---|
| `index.md` | accueil et mode d'emploi |
| `themes/01-…` à `themes/17-…` | un chapitre par thème |
| `lexique.md` | symboles et vocabulaire |
| `memo.md` | fiche mémo (formules seules) |
| `.vitepress/config.mts` | barre latérale, interface en français, rendu des formules |
| `.vitepress/theme/components/Courbe.vue` | tracé SVG de fonctions |

## Écrire une page

- Formule encadrée : conteneur `::: tip Titre` … `:::`.
- Niveau : `<Badge text="1re" />` dans le titre.
- Correction repliée : `::: details Correction` … `:::`.
- Les longues formules en ligne (`$…$`) sont coupées automatiquement aux `=`, `\iff`, `\le`… pour passer à la ligne sur mobile. Une chaîne de calcul vraiment longue va plutôt dans un bloc `$$…$$` (qui défile horizontalement si besoin).
- Virgule décimale : `{,}` (`$3{,}14$`), sinon MathJax ajoute une espace.
- Les lettres accentuées dans `\text{…}` sont converties automatiquement en accents TeX.

### Courbes

```md
<Courbe :fonctions="['x**2 - 1', 'exp(x)']" :legende="['x² − 1', 'eˣ']"
        :xmin="-3" :xmax="3" :ymin="-2" :ymax="5"
        :points="[[1, 0, 'A']]" :verticales="[0]" :aire="[0, 1]" />
```

Les fonctions sont des expressions JavaScript en `x` ; `sqrt`, `exp`, `ln`, `log10`, `sin`, `cos`, `tan`, `abs`, `PI` et `E` sont disponibles. Autres options : `horizontales`, `pi-x` (graduations en multiples de π/2), `pas-x`, `pas-y`, `hauteur`.

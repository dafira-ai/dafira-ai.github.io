# Dafira UI kit

Building blocks for every page. Live examples: `/styleguide` (not indexed).

```astro
import { Section, SectionHeader, Button, FeatureColumns } from '../components/ui';
```

| Component | Use it for | Key props |
|---|---|---|
| `Container` | Horizontal frame and gutters | `size`: default · narrow · prose |
| `Section` | A page section: background, spacing, borders | `tone`: white · surface · navy, `space`: sm · md · lg, `border`, `size`, `id` |
| `SectionHeader` | Section title block | `eyebrow`, `title`, `lead`, `layout`: split · stacked, `as`, `tone` |
| `PageHero` | Top of an inner page | `eyebrow`, `title`, `lead`, slots `actions`, `aside` |
| `Eyebrow` | Mono label above a heading | `tone` |
| `Button` | Actions and text links | `variant`: primary · secondary · inverse · inverse-outline · ghost · link, `size`, `href`, `arrow` |
| `Badge` | Real statuses (Approved, Pending…) | `tone`: neutral · info · success · warning · danger |
| `Icon` | Line icons (also maps legacy emoji) | `name`, `class`, `label` |
| `FeatureList` | Short dash-marked lists | `items`, `columns` |
| `FeatureColumns` | Ruled columns of icon/title/text | `items[{icon,title,text,items,link}]`, `columns` |
| `CellGrid` | Dense grid of cells with hairlines | `columns`; children `<div class="bg-white p-6">` |
| `Card` | Navigation tiles and panels | `href`, `padding`, `tone` |
| `Quote` | Customer quotes (verbatim) | `quote`, `author`, `role`, `company`, `image`, `href`, `linkText` |
| `KeyFigure` | A number with its source | `value`, `label`, `source` (required) |
| `Callout` | Note / tip / warning in long-form | `tone`, `title` |
| `Steps` | Real sequences only | `items[{title,text}]`, `columns` |
| `Screenshot` | Product screenshots | `src`, `alt`, `caption` |
| `Prose` | Markdown / long-form typography | — |
| `Field` | Form controls with label, hint, error | `id`, `label`, `type`, `as`: input · textarea · select, `options` |
| `Reveal` | One discreet entrance on scroll | `delay` |
| `Logo`, `CTA`, `FAQ` | Shared brand blocks | see component files |

## Rules
- Tokens only: `navy`, `primary`, `ink`, `line`, `surface`, gray scale. No hex colours, gradients, glows or coloured shadows.
- No emoji as icons, no unsourced numbers, no stock photos.
- Motion: `data-play` on a container, `data-step` on children (`fade`, `grow`, `draw`, `out`) with `--d` delay in ms. Plays once, 240 ms / 8 px; static when motion is reduced.
- Logical properties only (`ms-`, `pe-`, `start-`, `text-start`, `border-s`…): the site also runs right-to-left in Arabic. Arrow icons get `rtl-flip`.
- Components inside `src/components/*.astro` must import kit files directly (`./ui/Button.astro`), not the barrel, to avoid circular imports.

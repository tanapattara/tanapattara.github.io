# Tanapattara's Classroom Handouts

A statically generated documentation site for programming course materials. The lessons are written mainly in Thai and cover frontend development, Git and GitHub, C#, object-oriented programming, Dart, Flutter, TypeScript, Next.js, React, React Native, Unity 2D, native mobile development, and IT security and laws. Practical labs are collected under a dedicated Labs section.

The site is built with Next.js, Nextra, and MDX, then deployed to GitHub Pages.

- Live site: [tanapattara.github.io](https://tanapattara.github.io)
- Developer documentation: [DEVELOPER.md](./DEVELOPER.md)

## Quick start

Requirements: Node.js 20.9 or later and npm.

```bash
git clone https://github.com/tanapattara/tanapattara.github.io.git
cd tanapattara.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Common commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact dependency versions in `package-lock.json` |
| `npm run dev` | Start the local development server |
| `npm run build` | Export the site to `out/` and generate the Pagefind search index |

## Repository layout

```text
app/
├── layout.jsx       # Shared Nextra layout, metadata, navbar, and footer
├── page.mdx         # Home page
├── _meta.js         # Top-level navigation labels and order
└── <topic>/         # Topic page and optional lesson sub-pages
public/
└── images/classroom/ # Images imported with the classroom material
scripts/
└── import-notion-export.mjs # Rebuild imported pages from the Notion export
mdx-components.js    # Components made available to MDX pages
next.config.mjs      # Nextra and static-export configuration
.github/workflows/   # GitHub Pages deployment workflow
```

For content conventions, route creation, navigation metadata, search, deployment, and troubleshooting, see the [developer guide](./DEVELOPER.md).

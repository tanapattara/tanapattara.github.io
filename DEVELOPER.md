# Developer guide

This guide describes how the repository works and how to safely add or change course material. It reflects the current project structure and deployment workflow.

## Architecture at a glance

The project is a documentation-only Next.js application using the App Router. Nextra compiles MDX lesson files, builds the page map, and supplies the documentation theme. Next.js exports the result as static files, and Pagefind adds a client-side search index. GitHub Actions publishes the contents of `out/` to GitHub Pages.

| Technology | Role |
| --- | --- |
| Next.js 16 | App Router and static site generation |
| React 19 | Rendering |
| Nextra 4 | MDX processing and file-based documentation navigation |
| `nextra-theme-docs` | Navbar, sidebar, table of contents, and search UI |
| Pagefind | Search index for the exported HTML |
| GitHub Actions/Pages | Production build and hosting |

Dependency versions are defined in `package.json`; reproducible versions are locked in `package-lock.json`.

## Prerequisites and setup

Use Node.js 20.9 or later. The deployment workflow uses the current Node.js 20 release, so Node.js 20 LTS is the best version to use locally. npm is included with Node.js.

```bash
git clone https://github.com/tanapattara/tanapattara.github.io.git
cd tanapattara.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to MDX and layout files are reflected by the development server.

Use `npm ci`, rather than `npm install`, for a clean checkout. It installs exactly what is recorded in the lockfile and does not rewrite it. Use `npm install <package>` only when intentionally changing dependencies, and commit both `package.json` and `package-lock.json`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs the Next.js development server |
| `npm run build` | Runs `next build`; npm then runs `postbuild` automatically |
| `npm run postbuild` | Generates Pagefind data in `out/_pagefind` from the rendered app |
| `npm run start` | Invokes `next start`; this is not the preview path for this static-export project |

The complete production check is:

```bash
npm run build
```

The generated site is written to `out/`. If a local production-style preview is needed, use a static server that supports clean URLs, for example `npx serve out`. Search is generated during the production build and should not be expected to work in `npm run dev`.

## Repository structure

```text
tanapattara.github.io/
├── .github/workflows/nextjs.yml  # Builds and deploys main to GitHub Pages
├── app/
│   ├── _meta.js                  # Top-level navigation order and labels
│   ├── layout.jsx                # Site metadata and shared Nextra layout
│   ├── page.mdx                  # Home page and topic cards
│   ├── csharp/                   # Topic with ordered lesson pages
│   ├── frontend/                 # Frontend Development lessons
│   ├── labs/                     # Practical labs grouped for quick access
│   ├── react/                    # Topic with a Hooks lesson
│   ├── react_native/             # Topic with ordered lesson pages
│   ├── typescript/               # Topic with ordered lesson pages
│   └── <other-topic>/page.mdx    # Single-page topics
├── public/
│   ├── .nojekyll                 # Prevents GitHub Pages from running Jekyll
│   ├── images/classroom/         # Imported classroom images
│   └── ads.txt                   # Public advertising declaration
├── scripts/
│   └── import-notion-export.mjs  # Converts the current Notion export to MDX
├── mdx-components.js             # Global MDX component mapping
├── next.config.mjs               # Nextra wrapper and static export settings
├── package.json                  # Scripts and direct dependencies
└── package-lock.json             # Locked dependency tree
```

In the App Router, folders determine URL paths:

| Source file | URL |
| --- | --- |
| `app/page.mdx` | `/` |
| `app/git/page.mdx` | `/git` |
| `app/typescript/page.mdx` | `/typescript` |
| `app/typescript/functions/page.mdx` | `/typescript/functions` |

## Add or edit content

### Rebuild the imported classroom content

The repository includes the route mapping used for the current Notion export. Pass the extracted directory that contains the `Classroom` folder:

```bash
node scripts/import-notion-export.mjs /path/to/extracted-export
```

The importer removes Notion-only metadata, rewrites page and image links, copies media to `public/images/classroom/`, and places pages tagged as labs under `app/labs/`. Review the generated changes and run `npm run build` before committing.

### Add a top-level topic

1. Create `app/<route>/page.mdx`.
2. Add the route to `app/_meta.js` in the position where it should appear.
3. Add a matching card to `app/page.mdx` so the topic is discoverable from the home page.
4. Run the development server and check the page, navigation, and links.
5. Run `npm run build` before submitting the change.

A typical index page is:

```mdx
---
title: ชื่อบทเรียน
sidebarTitle: ชื่อเมนู
asIndexPage: true
---

import { Cards } from "nextra/components";

# ชื่อบทเรียน

คำอธิบายบทเรียน...

<Cards>
  <Cards.Card title="หัวข้อย่อย" href="/route/lesson" />
</Cards>
```

`asIndexPage: true` is used by the existing multi-page topic landing pages. Follow that pattern when a topic has child lessons.

### Add a lesson to an existing topic

1. Create `app/<topic>/<lesson>/page.mdx`.
2. Add `<lesson>` and its display label to `app/<topic>/_meta.js`.
3. If the topic landing page contains cards, add a card that links to the new route.
4. Check the previous/next navigation and sidebar order in the browser.

For example:

```js
// app/typescript/_meta.js
export default {
  variables: "ชนิดข้อมูลและตัวแปร",
  functions: "ฟังก์ชัน",
  generics: "เจเนอริก",
};
```

```text
app/typescript/generics/page.mdx  ->  /typescript/generics
```

The order of keys in `_meta.js` controls the displayed lesson order. Keep every intended page in the appropriate metadata file; otherwise Nextra may append it using its filesystem-derived name and order.

### MDX and component usage

MDX accepts Markdown plus JSX. Import Nextra components at the top of the page that uses them:

```mdx
import { Callout, Cards, Steps, Tabs } from "nextra/components";

<Callout type="info">
  ข้อสังเกตที่สำคัญ
</Callout>
```

Fenced code blocks should always include a language identifier for syntax highlighting:

````mdx
```typescript
const courseName: string = "TypeScript";
```
````

`mdx-components.js` merges the docs theme's default components with page-provided components. Add a component there only when it should be available globally; page-specific components should be imported by the page.

## Content conventions

The audience is Thai-speaking students. Keep learner-facing explanations and code comments primarily in Thai, while retaining standard English technical terms when they improve clarity.

- Start each page with one `#` heading; use `##` and `###` in order below it.
- Explain a concept before showing its code example.
- Use descriptive sidebar labels without numeric prefixes.
- Keep route folder names stable because changing them breaks inbound links.
- Use lowercase route names. Existing routes use both hyphens (`state-management`) and one underscore (`react_native`); preserve existing URLs and prefer hyphens for new multiword routes.
- Use root-relative internal links, such as `/typescript/functions`.
- Verify that commands and code samples are internally consistent and runnable in the environment being taught.
- Do not place secrets, access tokens, student data, or private material in MDX or `public/`; everything in the repository and export is public.

Front matter is optional. Existing multi-page indexes and React Native lessons use it to set browser/sidebar titles:

```mdx
---
title: Navigation ใน React Native
sidebarTitle: Navigation
---
```

When `_meta.js` supplies a sidebar label, keep it consistent with `sidebarTitle` if both are present.

## Static assets

Put downloadable files and images in `public/`. Reference them from MDX using a root-relative URL:

```mdx
![คำอธิบายภาพ](/images/example.png)
```

Files under `public/` are copied to the root of the exported site. Use meaningful lowercase file names, optimize large images before committing, and add useful alternative text.

## Site-wide configuration

### `app/layout.jsx`

The root layout configures:

- page metadata and the AdSense account declaration;
- Nextra's `Head`, `Navbar`, `Layout`, and `Footer`;
- the repository links used by the navbar and “edit this page” feature;
- the generated page map and default sidebar collapse level;
- site-wide AdSense and Buy Me a Coffee scripts.

It is an asynchronous server component because it awaits `getPageMap()`. Preserve that behavior when modifying the layout. Also keep third-party IDs and repository URLs synchronized if ownership or deployment settings change.

### `next.config.mjs`

Nextra wraps the Next.js configuration. Two settings are essential to the current hosting model:

```js
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

`output: "export"` creates the static `out/` directory. Unoptimized images avoid depending on the Next.js image optimization server, which is unavailable on static hosting. Do not add features that require a long-running Next.js server unless the hosting architecture is intentionally changed.

## Search

The `build` command has an npm lifecycle hook:

```text
next build
  -> postbuild
  -> pagefind --site .next/server/app --output-path out/_pagefind
```

Pagefind scans the HTML rendered during the build and writes its browser assets into the exported site. When debugging search:

1. Run `npm run build`, not only the development server.
2. Confirm that `out/_pagefind/` exists.
3. Preview `out/` with a static server.
4. Check that the expected page contains indexable rendered text.

## Deployment

`.github/workflows/nextjs.yml` is the production path. A push to `main`, or a manual workflow dispatch, performs these steps:

1. Check out the repository.
2. Set up Node.js 20 and npm caching.
3. Run `npm ci`.
4. Run `npm run build`, including the Pagefind `postbuild` hook.
5. Upload `out/` as the GitHub Pages artifact.
6. Deploy the artifact through the `github-pages` environment.

The workflow uses the Pages deployment action; GitHub does not serve the source files directly from the branch. Repository settings must therefore use **GitHub Actions** as the Pages source.

Before merging or pushing to `main`, review the generated build locally. After deployment, check the Actions run and spot-check the live page, navigation, and search.

## Contributor checklist

- [ ] Content is accurate and written for the established Thai-speaking audience.
- [ ] The route appears in the correct `_meta.js` file and in the intended order.
- [ ] Topic landing-page cards include any new lessons.
- [ ] Internal links and static asset paths work.
- [ ] Code blocks have language identifiers and explanations.
- [ ] No secrets or private information are included.
- [ ] `npm run build` completes and creates `out/_pagefind/`.
- [ ] Dependency changes include both package files.

## Troubleshooting

### `next: command not found`

Dependencies have not been installed. Run `npm ci` from the repository root.

### A page is missing or ordered incorrectly

Confirm that its file is named `page.mdx`, that folder names match the URL, and that the route key exists in the nearest `_meta.js` file.

### Search is unavailable locally

This is expected during `npm run dev`. Run a production build and serve `out/` with a static server.

### The static build fails

Read the first build error and check the changed MDX for malformed front matter, unclosed JSX tags, invalid component imports, or broken fenced code blocks. Also confirm that the local Node.js major version matches the workflow's Node.js 20 baseline.

## References

- [Nextra documentation](https://nextra.site/docs)
- [Nextra file conventions](https://nextra.site/docs/file-conventions)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [MDX](https://mdxjs.com/)
- [Pagefind](https://pagefind.app/)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

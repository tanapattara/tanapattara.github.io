# Developer Documentation

This document covers everything a developer needs to know to work on this project.

---

## Table of Contents

- [Developer Documentation](#developer-documentation)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install Dependencies](#install-dependencies)
    - [Run Development Server](#run-development-server)
    - [Build for Production](#build-for-production)
  - [Adding Content](#adding-content)
    - [Creating a New Page](#creating-a-new-page)
    - [Creating a New Section (Folder)](#creating-a-new-section-folder)
    - [Content Writing Guidelines](#content-writing-guidelines)
      - [Language](#language)
      - [Sub-page Titles (No Numbering)](#sub-page-titles-no-numbering)
      - [Page Structure — Explanation Before Code](#page-structure--explanation-before-code)
    - [Controlling Sidebar Order with `_meta.js`](#controlling-sidebar-order-with-_metajs)
  - [Key Files Explained](#key-files-explained)
    - [`app/layout.jsx`](#applayoutjsx)
    - [`app/_meta.js`](#app_metajs)
    - [`next.config.mjs`](#nextconfigmjs)
    - [`mdx-components.js`](#mdx-componentsjs)
  - [Nextra Built-In Components](#nextra-built-in-components)
    - [`<Callout>`](#callout)
    - [`<Steps>`](#steps)
    - [`<Tabs>`](#tabs)
    - [`<Cards>`](#cards)
    - [`<FileTree>`](#filetree)
    - [Syntax Highlighting](#syntax-highlighting)
  - [Search (Pagefind)](#search-pagefind)
  - [Build \& Static Export](#build--static-export)
    - [GitHub Pages Deployment](#github-pages-deployment)
  - [Useful References](#useful-references)

---

## Overview

This is a **Classroom Handouts** documentation site built with [Nextra 4](https://nextra.site) on top of [Next.js](https://nextjs.org). Content is written in MDX (Markdown + JSX) and the site is exported as a fully static site, suitable for hosting on GitHub Pages.

---

## Tech Stack

| Package               | Version | Role                                      |
| --------------------- | ------- | ----------------------------------------- |
| `next`                | ^16.2.4 | React framework / app router              |
| `nextra`              | ^4.6.1  | MDX-based content layer on top of Next.js |
| `nextra-theme-docs`   | ^4.6.1  | Docs UI theme (sidebar, navbar, TOC, etc) |
| `react` / `react-dom` | ^19.2.5 | UI library                                |
| `pagefind`            | ^1.5.2  | Static full-text search index             |
| `typescript`          | ^6.0.3  | Type checking (dev only)                  |

---

## Project Structure

```
tanapattara.github.io/
├── app/                        # Next.js App Router directory
│   ├── _meta.js                # Top-level sidebar/navbar ordering
│   ├── layout.jsx              # Root layout (Navbar, Footer, theme setup)
│   ├── page.mdx                # Homepage content
│   ├── git/
│   │   └── page.mdx
│   ├── csharp/
│   │   └── page.mdx
│   ├── oop/
│   │   └── page.mdx
│   ├── dart/
│   │   └── page.mdx
│   ├── flutter/
│   │   └── page.mdx
│   ├── typescript/
│   │   └── page.mdx
│   ├── nextjs/
│   │   └── page.mdx
│   ├── react_native/
│   │   ├── _meta.js            # Sidebar ordering for this section
│   │   ├── page.mdx            # React Native index page
│   │   ├── intro/
│   │   │   └── page.mdx
│   │   ├── components/
│   │   │   └── page.mdx
│   │   ├── styling/
│   │   │   └── page.mdx
│   │   ├── navigation/
│   │   │   └── page.mdx
│   │   ├── state-management/
│   │   │   └── page.mdx
│   │   ├── api-networking/
│   │   │   └── page.mdx
│   │   ├── storage/
│   │   │   └── page.mdx
│   │   └── workshop/
│   │       └── page.mdx
│   ├── unity2d/
│   │   └── page.mdx
│   └── handouts/
│       ├── _meta.js            # Sidebar ordering for this section
│       ├── page.mdx            # Handouts index page
│       ├── week-1/
│       │   └── page.mdx
│       └── week-2/
│           └── page.mdx
├── public/                     # Static assets (images, files)
├── mdx-components.js           # Custom/overridden MDX components
├── next.config.mjs             # Next.js + Nextra configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm (bundled with Node.js)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

> **Note:** Development mode compiles each page on demand — it is slower than production. Use `npm run build` to test the final output.

### Build for Production

```bash
npm run build
```

This runs `next build` and then automatically runs `pagefind` to build the search index from the generated output. The static site is written to the `out/` directory.

---

## Adding Content

All content pages are `.mdx` files that support standard Markdown plus JSX components.

### Creating a New Page

1. Create a new folder inside `app/` for your route, e.g. `app/python/`.
2. Add a `page.mdx` file inside it:

```mdx
# Python

Introduction to Python programming...
```

3. Register the new page in `app/_meta.js` so it appears in the sidebar with a friendly title:

```js
// app/_meta.js
export default {
  index: "Welcome",
  git: "Git",
  python: "Python", // ← add this
  // ...
};
```

### Creating a New Section (Folder)

To group pages under a collapsible section:

1. Create a folder, e.g. `app/databases/`.
2. Add an index page `app/databases/page.mdx` with front matter:

```mdx
---
asIndexPage: true
---

# Databases

Overview of database topics...
```

3. Add sub-pages such as `app/databases/sql/page.mdx`.
4. Add a `_meta.js` file inside the folder to control sub-page order:

```js
// app/databases/_meta.js
export default {
  sql: "SQL Basics",
  nosql: "NoSQL",
};
```

5. Register the section in the top-level `app/_meta.js`:

```js
export default {
  // ...
  databases: "Databases",
};
```

### Content Writing Guidelines

When writing content for any topic page or sub-page, follow these rules:

#### Language
All content — headings, explanations, labels, and inline comments inside code blocks — **must be written in Thai**.

#### Sub-page Titles (No Numbering)
Sub-page titles and sidebar labels must **not** include a number prefix. Use descriptive Thai names only.

```js
// ✅ Correct — app/csharp/_meta.js
export default {
  index: "C#",
  array: "อาร์เรย์",
  "control-flow": "การควบคุมการทำงาน",
  methods: "เมธอด",
};

// ❌ Wrong — do not add numbers
export default {
  index: "C#",
  array: "1. อาร์เรย์",
  "control-flow": "2. การควบคุมการทำงาน",
};
```

#### Page Structure — Explanation Before Code
Every topic section must follow this order:

1. **Thai heading** (`##`) for the topic
2. **Explanation paragraph(s)** in Thai describing the concept
3. **Code example(s)** that illustrate the explanation

```mdx
## อาร์เรย์หนึ่งมิติ (One-Dimensional Array)

อาร์เรย์คือโครงสร้างข้อมูลที่ใช้เก็บข้อมูลชนิดเดียวกันหลายค่า
แต่ละสมาชิกสามารถเข้าถึงได้ผ่าน Index ซึ่งเริ่มนับจาก 0 เสมอ

​```csharp
int[] scores = { 85, 90, 78 };
Console.WriteLine(scores[0]); // แสดงผล: 85
​```
```

Do **not** place a code block before the explanation paragraph.

---

### Controlling Sidebar Order with `_meta.js`

Every folder can have a `_meta.js` file that controls:

- **Display title** of each item in the sidebar
- **Order** items appear (top to bottom)
- **Type** of items (page, separator, external link, menu)

```js
// Example _meta.js
export default {
  index: "Home", // simple string title
  "getting-started": "Getting Started",
  "###": { type: "separator" }, // visual divider
  reference: {
    title: "Reference",
    theme: { collapsed: true }, // collapsed by default
  },
  github: {
    title: "GitHub",
    href: "https://github.com", // external link
  },
};
```

> **Note:** Any pages not listed in `_meta.js` are appended at the end of the sidebar, sorted alphabetically.

---

## Key Files Explained

### `app/layout.jsx`

The root layout wraps every page. It configures the **Navbar**, **Footer**, and the **Nextra Docs Theme Layout**. Modify this file to:

- Change the site logo or title (`logo` prop on `<Navbar>`)
- Update the GitHub repository link (`projectLink` on `<Navbar>` and `docsRepositoryBase` on `<Layout>`)
- Add a site-wide banner (`<Banner>` component)
- Change the footer text

```jsx
// Key props in <Layout>:
<Layout
  navbar={navbar}
  pageMap={await getPageMap()}           // auto-generates navigation from file system
  docsRepositoryBase="https://github.com/tanapattara/tanapattara.github.io/tree/main"
  footer={footer}
>
```

### `app/_meta.js`

Top-level navigation config. Each key maps a folder/file name to its sidebar label. The order of keys determines the order in the sidebar.

### `next.config.mjs`

Wraps the Next.js config with Nextra, and sets:

- `output: "export"` — generates a fully static site (required for GitHub Pages)
- `images.unoptimized: true` — required when using static export with `<Image>`

### `mdx-components.js`

Registers custom or overridden MDX components globally. All MDX pages automatically receive these components without needing to import them. To add a custom component site-wide:

```js
// mdx-components.js
import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import MyCustomComponent from "./components/MyCustomComponent";

const themeComponents = getThemeComponents();

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    MyCustomComponent, // ← available in all .mdx files
    ...components,
  };
}
```

---

## Nextra Built-In Components

Import these in any `.mdx` file from `nextra/components`:

### `<Callout>`

```mdx
import { Callout } from "nextra/components";

<Callout type="info">This is an info callout.</Callout>
<Callout type="warning">This is a warning.</Callout>
<Callout type="error">This is an error.</Callout>
```

### `<Steps>`

```mdx
import { Steps } from "nextra/components";

<Steps>
### Step 1
Do the first thing.

### Step 2

Do the second thing.

</Steps>
```

### `<Tabs>`

```mdx
import { Tabs } from "nextra/components";

<Tabs items={["npm", "yarn", "pnpm"]}>
  <Tabs.Tab>**npm**: `npm install`</Tabs.Tab>
  <Tabs.Tab>**yarn**: `yarn add`</Tabs.Tab>
  <Tabs.Tab>**pnpm**: `pnpm add`</Tabs.Tab>
</Tabs>
```

### `<Cards>`

```mdx
import { Cards } from "nextra/components";

<Cards>
  <Cards.Card title="Week 1" href="/handouts/week-1" />
  <Cards.Card title="Week 2" href="/handouts/week-2" />
</Cards>
```

### `<FileTree>`

```mdx
import { FileTree } from "nextra/components";

<FileTree>
  <FileTree.Folder name="app" defaultOpen>
    <FileTree.File name="layout.jsx" />
    <FileTree.File name="page.mdx" />
  </FileTree.Folder>
</FileTree>
```

### Syntax Highlighting

Fenced code blocks with a language tag are automatically highlighted:

````mdx
```typescript
const greeting: string = "Hello, World!";
console.log(greeting);
```
````

---

## Search (Pagefind)

This project uses [Pagefind](https://pagefind.app) for client-side static search. The search index is built **automatically** after `npm run build` via the `postbuild` script in `package.json`:

```json
"postbuild": "pagefind --site .next/server/app --output-path out/_pagefind"
```

- The index is generated from the rendered HTML output.
- No additional configuration is required.
- Search is **not available** in `npm run dev` mode — build the project to test search.

---

## Build & Static Export

The site is configured for fully static export (no server required):

```bash
npm run build      # outputs static files to out/
npm run start      # serves the static export locally for preview
```

The `out/` directory contains the complete static site ready for deployment to GitHub Pages or any static host.

### GitHub Pages Deployment

The repository is named `tanapattara.github.io`, which means GitHub Pages serves the `main` branch root automatically. Push your changes to `main` and GitHub Pages will host the built output.

> If using GitHub Actions for automated builds, ensure the workflow runs `npm run build` and deploys the `out/` directory.

---

## Useful References

| Resource                           | URL                                                 |
| ---------------------------------- | --------------------------------------------------- |
| Nextra Documentation               | https://nextra.site/docs                            |
| Nextra Docs Theme API              | https://nextra.site/docs/docs-theme/api             |
| Nextra Built-In Components         | https://nextra.site/docs/built-ins                  |
| Nextra `_meta.js` file conventions | https://nextra.site/docs/file-conventions/meta-file |
| Next.js App Router docs            | https://nextjs.org/docs/app                         |
| Pagefind                           | https://pagefind.app                                |
| MDX                                | https://mdxjs.com                                   |

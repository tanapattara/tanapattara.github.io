# Copilot Instructions — tanapattara.github.io

This is a **Classroom Handouts** documentation site built with [Nextra 4](https://nextra.site) on top of Next.js. Content is written in MDX and exported as a fully static site for GitHub Pages.

---

## Tech Stack

- **Next.js** (App Router) — framework
- **Nextra 4 + nextra-theme-docs** — MDX content layer and docs UI
- **Pagefind** — static full-text search (built post `npm run build`)
- **React 19** — UI library

---

## Project Structure

```
app/
  _meta.js          ← Top-level sidebar/navbar ordering
  layout.jsx        ← Root layout (Navbar, Footer, theme)
  page.mdx          ← Homepage
  <topic>/
    page.mdx        ← Topic index page
    <subtopic>/
      page.mdx      ← Sub-page
    _meta.js        ← Sidebar order for this section (optional but recommended)
public/             ← Static assets
mdx-components.js   ← Global MDX component overrides
next.config.mjs     ← Next.js + Nextra config (static export)
```

Every route is a folder inside `app/` containing a `page.mdx` file. There are no `.tsx`/`.ts` route files — all content is MDX.

---

## Adding a New Top-Level Topic Page

1. Create `app/<topic>/page.mdx`:

```mdx
# ชื่อหัวข้อ

เนื้อหาเบื้องต้น...
```

2. Register it in `app/_meta.js`:

```js
export default {
  index: "Welcome",
  git: "Git",
  "<topic>": "ชื่อที่แสดงในแถบด้านข้าง", // ← add this
};
```

---

## Adding a New Section with Sub-pages

1. Create `app/<section>/page.mdx` with the `asIndexPage` front matter:

```mdx
---
asIndexPage: true
---

# ชื่อหมวดหมู่

ภาพรวมของหัวข้อนี้...
```

2. Create sub-pages: `app/<section>/<subtopic>/page.mdx`

3. Add `app/<section>/_meta.js` to control order and sidebar labels:

```js
export default {
  index: "ชื่อหมวดหมู่",
  "<subtopic>": "ชื่อหัวข้อย่อย",
};
```

4. Register the section in `app/_meta.js`:

```js
export default {
  // ...existing entries...
  "<section>": "ชื่อหมวดหมู่",
};
```

---

## Content Writing Rules (MUST FOLLOW)

### Language

All content — headings, explanation paragraphs, labels, and inline code comments — **must be written in Thai**.

### No Number Prefixes in Sidebar Labels

Sidebar labels in `_meta.js` must **not** include number prefixes.

```js
// ✅ Correct
export default {
  array: "อาร์เรย์",
  "control-flow": "การควบคุมการทำงาน",
};

// ❌ Wrong
export default {
  array: "1. อาร์เรย์",
  "control-flow": "2. การควบคุมการทำงาน",
};
```

### Page Structure — Explanation Before Code

Every topic section must follow this exact order:

1. Thai `##` heading
2. Thai explanation paragraph(s)
3. Code example(s)

````mdx
## อาร์เรย์หนึ่งมิติ (One-Dimensional Array)

อาร์เรย์คือโครงสร้างข้อมูลที่ใช้เก็บข้อมูลชนิดเดียวกันหลายค่า
แต่ละสมาชิกสามารถเข้าถึงได้ผ่าน Index ซึ่งเริ่มนับจาก 0 เสมอ

```csharp
int[] scores = { 85, 90, 78 };
Console.WriteLine(scores[0]); // แสดงผล: 85
```
````

````

**Never** place a code block before the explanation paragraph.

---

## `_meta.js` Sidebar Control

```js
export default {
  index: "หน้าหลัก",                         // simple string title
  "getting-started": "เริ่มต้นใช้งาน",
  "###": { type: "separator" },              // visual divider
  reference: {
    title: "อ้างอิง",
    theme: { collapsed: true },              // collapsed by default
  },
  github: {
    title: "GitHub",
    href: "https://github.com",              // external link
  },
};
````

Pages not listed in `_meta.js` are appended alphabetically at the bottom.

---

## Nextra Built-In Components

Import from `nextra/components` inside any `.mdx` file:

### Callout

```mdx
import { Callout } from "nextra/components";

<Callout type="info">ข้อความแจ้งเตือน</Callout>
<Callout type="warning">คำเตือน</Callout>
<Callout type="error">ข้อผิดพลาด</Callout>
```

### Steps

```mdx
import { Steps } from "nextra/components";

<Steps>
### ขั้นตอนที่ 1
รายละเอียด...

### ขั้นตอนที่ 2

รายละเอียด...

</Steps>
```

### Tabs

```mdx
import { Tabs } from "nextra/components";

<Tabs items={["ตัวอย่าง 1", "ตัวอย่าง 2"]}>
  <Tabs.Tab>เนื้อหาแท็บ 1</Tabs.Tab>
  <Tabs.Tab>เนื้อหาแท็บ 2</Tabs.Tab>
</Tabs>
```

### Cards

```mdx
import { Cards } from "nextra/components";

<Cards>
  <Cards.Card title="หัวข้อ" href="/path/to/page" />
</Cards>
```

### FileTree

```mdx
import { FileTree } from "nextra/components";

<FileTree>
  <FileTree.Folder name="app" defaultOpen>
    <FileTree.File name="page.mdx" />
  </FileTree.Folder>
</FileTree>
```

### Syntax Highlighting

Use fenced code blocks with a language tag — highlighting is automatic:

````mdx
```typescript
const greeting: string = "สวัสดี";
```
````

---

## Dev Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run build      # static export to out/ + pagefind index
npm run start      # preview the static export locally
```

---

## Key Conventions

- All routes are `app/<name>/page.mdx` — no `.tsx` route files.
- Index pages for sections need `asIndexPage: true` in front matter.
- Static export is configured (`output: "export"`) — no server-side features.
- Images must use `images.unoptimized: true` (already set in `next.config.mjs`).
- Search (Pagefind) only works after `npm run build`, not in dev mode.
- The site is deployed to GitHub Pages from the `main` branch via GitHub Actions (`.github/workflows/nextjs.yml`).

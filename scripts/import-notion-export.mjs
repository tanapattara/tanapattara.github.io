import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const sourceRoot = process.argv[2]
  ? path.resolve(process.argv[2])
  : undefined;
const repositoryRoot = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);

if (!sourceRoot || !fs.existsSync(sourceRoot)) {
  console.error(
    "Usage: node scripts/import-notion-export.mjs <notion-export-content-directory>",
  );
  process.exit(1);
}

const pages = [
  {
    source:
      "Classroom/Frontend Development e2afa7d261f94ca0ac52dd5c29906c88.md",
    route: "frontend",
    title: "Frontend Development",
    sidebarTitle: "Frontend Development",
    index: true,
  },
  {
    source:
      "Classroom/Frontend Development/Internet 85db8522a6e746ada96eab0e03f605c2.md",
    route: "frontend/internet",
    title: "Internet",
  },
  {
    source:
      "Classroom/Frontend Development/HTML 6f4ea6a18cc84f0ab8af99b7029eb85e.md",
    route: "frontend/html",
    title: "HTML",
  },
  {
    source:
      "Classroom/Frontend Development/CSS 5872b987cbe7480291f8c08bd7b8b7e5.md",
    route: "frontend/css",
    title: "CSS",
  },
  {
    source:
      "Classroom/Frontend Development/HTML with CSS 2127fabf7aee466cb0d3f52bc08f84d6.md",
    route: "frontend/html-with-css",
    title: "HTML with CSS",
  },
  {
    source:
      "Classroom/Frontend Development/CSS Responsive babc21bb63f040c1aa79c52e091f048b.md",
    route: "frontend/responsive-css",
    title: "CSS Responsive",
  },
  {
    source:
      "Classroom/Frontend Development/CSS Framework cc754109bea24dd988177a42c9669e80.md",
    route: "frontend/css-framework",
    title: "CSS Framework",
  },
  {
    source:
      "Classroom/Frontend Development/Bootstrap CSS d05a49e3caba4082ab8b8c0536c7603f.md",
    route: "frontend/bootstrap",
    title: "Bootstrap CSS",
  },
  {
    source:
      "Classroom/Frontend Development/JAVASCRIPT d1629652b65444bcadf26f3b046d3bf2.md",
    route: "frontend/javascript",
    title: "JavaScript",
  },
  {
    source:
      "Classroom/Frontend Development/DOM d081cc8679a940a5bb5ba0cb5f333136.md",
    route: "frontend/dom",
    title: "DOM",
  },
  {
    source:
      "Classroom/Frontend Development/JavaScript Event 682ea56783b94794937e08af4181c31f.md",
    route: "frontend/javascript-events",
    title: "JavaScript Event",
  },
  {
    source:
      "Classroom/Frontend Development/JavaScript Variable 54386b96405f4310beef9bece6dadf50.md",
    route: "frontend/javascript-variables",
    title: "JavaScript Variable",
  },
  {
    source:
      "Classroom/Frontend Development/JavaScript Function b0059870965d4a778497935ac4be6ed1.md",
    route: "frontend/javascript-functions",
    title: "JavaScript Function",
  },
  {
    source:
      "Classroom/Frontend Development/Javascript and DOM 8a798556cdd34004848554c5c8098dc0.md",
    route: "labs/frontend-javascript-dom",
    title: "Lab: JavaScript and DOM",
    sidebarTitle: "JavaScript and DOM",
    parentRoute: "/frontend",
    parentTitle: "Frontend Development",
  },
  {
    source:
      "Classroom/Frontend Development/API c7c5983dcdef486e8372cea0ee87d5ba.md",
    route: "frontend/api",
    title: "API",
  },
  {
    source:
      "Classroom/Frontend Development/React js 5121c7fa1ea6480491f92dc641199807.md",
    route: "frontend/react",
    title: "React.js",
  },
  {
    source:
      "Classroom/Frontend Development/Next JS 062ffae7c75f4a90ae6ba29ae5acde88.md",
    route: "frontend/nextjs",
    title: "Next.js",
  },
  {
    source:
      "Classroom/Frontend Development/Authentication 26f80a60924a80268b6df58eac3181f7.md",
    route: "frontend/authentication",
    title: "Authentication",
  },
  {
    source:
      "Classroom/Frontend Development/Register 26f80a60924a804fa123fab22f2bf179.md",
    route: "frontend/register",
    title: "Register",
  },
  {
    source:
      "Classroom/2D Game Development f0b41d7fa5a741d3a315887e70beae9d.md",
    route: "unity2d",
    title: "2D Game Development",
    sidebarTitle: "Unity 2D",
    index: true,
  },
  {
    source:
      "Classroom/2D Game Development/Introduction to 2D Game Development 167e1619538f431f941f5eacd03d1640.md",
    route: "unity2d/introduction",
    title: "Introduction to 2D Game Development",
  },
  {
    source:
      "Classroom/2D Game Development/Start 2D Game Development with Flappy Bird ccfd6c3cfde548c9aaeb1a20367107c7.md",
    route: "labs/unity2d-flappy-bird",
    title: "Lab: Start 2D Game Development with Flappy Bird",
    sidebarTitle: "Unity 2D: Flappy Bird",
    parentRoute: "/unity2d",
    parentTitle: "2D Game Development",
  },
  {
    source:
      "Classroom/2D Game Development/Player Animation and Controls 3442ba981714400a8da740befc1d913e.md",
    route: "unity2d/player-animation-controls",
    title: "Player Animation and Controls",
  },
  {
    source:
      "Classroom/2D Game Development/Camera 4613a3fe36df491eaed44943173d8962.md",
    route: "unity2d/camera",
    title: "Camera",
  },
  {
    source:
      "Classroom/2D Game Development/Collect Item 2cb309bb7a7449f9a4f638f32cd98042.md",
    route: "unity2d/collect-item",
    title: "Collect Item",
  },
  {
    source:
      "Classroom/2D Game Development/Display and update UI 3f1d5f40c425426eac65ee8dd9eba154.md",
    route: "unity2d/display-update-ui",
    title: "Display and Update UI",
  },
  {
    source:
      "Classroom/2D Game Development/Health and Damage System 5e26438527744358b90be16ec7d44716.md",
    route: "unity2d/health-damage-system",
    title: "Health and Damage System",
  },
  {
    source:
      "Classroom/2D Game Development/Animation d83a4ad982f44b4e86ffbefb4e222ee0.md",
    route: "unity2d/animation",
    title: "Animation",
  },
  {
    source:
      "Classroom/2D Game Development/Enemy 295b9db7de3549b699ba5ca4dabc5d44.md",
    route: "unity2d/enemy",
    title: "Enemy",
  },
  {
    source:
      "Classroom/2D Game Development/Enemy Movement 1c0277f1678c49c3b669e4b8938aae92.md",
    route: "unity2d/enemy-movement",
    title: "Enemy Movement",
  },
  {
    source:
      "Classroom/2D Game Development/Enemy Attack 44ff75ee5b5841d1a9b90586f0bddd2e.md",
    route: "unity2d/enemy-attack",
    title: "Enemy Attack",
  },
  {
    source:
      "Classroom/2D Game Development/Attack Animation 10680a60924a809aa5bfe419463e58c2.md",
    route: "unity2d/attack-animation",
    title: "Attack Animation",
  },
  {
    source:
      "Classroom/2D Game Development/Attack and Damage 10680a60924a8011ab1aed992cb716f5.md",
    route: "unity2d/attack-damage",
    title: "Attack and Damage",
  },
  {
    source:
      "Classroom/2D Game Development/Change Level 10d80a60924a80989af8c99753a146dd.md",
    route: "unity2d/change-level",
    title: "Change Level",
  },
  {
    source:
      "Classroom/2D Game Development/Main menu 10d80a60924a80eea04fd55a603dff2d.md",
    route: "unity2d/main-menu",
    title: "Main Menu",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming 22280a60924a807b9d23dfd6f22bddfa.md",
    route: "react_native/course-overview",
    title: "Hybrid Mobile Application Programming",
    sidebarTitle: "คำอธิบายรายวิชา",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Installation and setup 22280a60924a80729adbf391ee19efa9.md",
    route: "react_native/expo-installation",
    title: "Installation and Setup with Expo",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Expo-router 22280a60924a80f2a8e5cf9ed06721ce.md",
    route: "react_native/expo-router",
    title: "Expo Router",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Components and Style 22280a60924a80c0958bd514e6a74b81.md",
    route: "react_native/components-style",
    title: "Components and Style with Expo",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Building 22280a60924a800aa6dbe11d917ad897.md",
    route: "react_native/building",
    title: "Building with Expo EAS",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Page and Navigation 22980a60924a80728364ff0745cb612a.md",
    route: "react_native/page-navigation",
    title: "Page and Navigation with Expo Router",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Layouts and Stack 22980a60924a800697f9fdfab8ea0fa0.md",
    route: "react_native/layouts-stack",
    title: "Layouts and Stack",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Camera 26880a60924a80a28882fe3843d399d5.md",
    route: "react_native/camera",
    title: "Camera",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/location and map 27080a60924a803b9f49ee6a1628259b.md",
    route: "react_native/location-map",
    title: "Location and Map",
  },
  {
    source:
      "Classroom/Hybrid Mobile Application Programming/Local Authentication 27680a60924a80aaa3edf0b5452be45e.md",
    route: "react_native/local-authentication",
    title: "Local Authentication",
  },
  {
    source:
      "Classroom/Native Mobile Application Programming db7bd88665804bd7bf507d1f544a8e12.md",
    route: "native-mobile",
    title: "Native Mobile Application Programming",
    sidebarTitle: "Native Mobile",
    index: true,
  },
  {
    source:
      "Classroom/Native Mobile Application Programming/Dart bd7ae82351554536af6d8a18929241f4.md",
    route: "dart",
    title: "Dart",
  },
  {
    source:
      "Classroom/Native Mobile Application Programming/Flutter fde29941b2264d30a2340cb9adae945b.md",
    route: "flutter",
    title: "Flutter",
  },
  {
    source:
      "Classroom/Native Mobile Application Programming/Install and Setup 759d44e82359466b95f880c62e1a90ad.md",
    route: "native-mobile/install-setup",
    title: "Install and Setup",
  },
  {
    source:
      "Classroom/Object-oriented Programing eafb02c709ac4b57bea77a68680a1c9b.md",
    route: "oop",
    title: "Object-Oriented Programming",
    sidebarTitle: "OOP",
    index: true,
  },
  {
    source:
      "Classroom/Object-oriented Programing/Variable 15380a60924a807b9a67cf936b34319c.md",
    route: "oop/variables",
    title: "ตัวแปร (Variables)",
  },
  {
    source:
      "Classroom/Object-oriented Programing/ตัวคำนวน 15380a60924a807b8c05c676cfd78e92.md",
    route: "oop/operators",
    title: "ตัวดำเนินการ (Operators)",
  },
  {
    source:
      "Classroom/Object-oriented Programing/การแปลงชนิดข้อมูล 15380a60924a8064a3dee1e11755e9f7.md",
    route: "oop/type-conversion",
    title: "การแปลงชนิดข้อมูล",
  },
  {
    source:
      "Classroom/Object-oriented Programing/Array 15380a60924a8037a83cc6e33db22cb6.md",
    route: "oop/arrays",
    title: "Array",
  },
  {
    source:
      "Classroom/Object-oriented Programing/การทำซ้ำ 15380a60924a8002b140cdd4af76665e.md",
    route: "oop/loops",
    title: "การทำซ้ำ (Loops)",
  },
  {
    source:
      "Classroom/Information Technology Security and IT Laws 8ade9916f65a444b96a34e4eae250eef.md",
    route: "it-security",
    title: "Information Technology Security and IT Laws",
    sidebarTitle: "IT Security & Laws",
  },
  {
    source:
      "Classroom/Git and GitHub 8fd209feab1f44608bf5a01322333602.md",
    route: "git/github-overview",
    title: "Git and GitHub Overview",
    sidebarTitle: "GitHub Overview",
  },
];

const pageByAbsoluteSource = new Map(
  pages.map((page) => [
    path.normalize(path.join(sourceRoot, page.source)),
    page,
  ]),
);

function yamlString(value) {
  return JSON.stringify(value);
}

function slugifyFileName(fileName) {
  const extension = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, path.extname(fileName));
  const slug = baseName
    .normalize("NFKD")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return `${slug || "image"}${extension}`;
}

function convertAsideBlocks(markdown) {
  const output = [];
  let insideAside = false;

  for (const line of markdown.split("\n")) {
    if (line.trim() === "<aside>") {
      insideAside = true;
      output.push("> **หมายเหตุ**");
      continue;
    }

    if (line.trim() === "</aside>") {
      insideAside = false;
      output.push("");
      continue;
    }

    if (insideAside) {
      output.push(line.trim() ? `> ${line}` : ">");
      continue;
    }

    output.push(line);
  }

  return output.join("\n");
}

function rewriteInternalLinks(markdown, sourcePath) {
  return markdown.replace(
    /\[([^\]]+)\]\(([^)]+\.md(?:#[^)]+)?)\)/g,
    (match, label, rawHref) => {
      const [encodedPath, anchor] = rawHref.split("#", 2);
      let decodedPath;

      try {
        decodedPath = decodeURIComponent(encodedPath);
      } catch {
        return match;
      }

      const absoluteTarget = path.normalize(
        path.resolve(path.dirname(sourcePath), decodedPath),
      );
      const targetPage = pageByAbsoluteSource.get(absoluteTarget);

      if (!targetPage) {
        return match;
      }

      return `[${label}](/${targetPage.route}${anchor ? `#${anchor}` : ""})`;
    },
  );
}

function rewriteImages(markdown, sourcePath, page) {
  const copiedDestinations = new Map();
  const mediaDirectory = path.join(
    repositoryRoot,
    "public",
    "images",
    "classroom",
    ...page.route.split("/"),
  );
  fs.rmSync(mediaDirectory, { recursive: true, force: true });

  return markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (match, altText, rawHref) => {
      if (/^(?:https?:|data:|\/)/i.test(rawHref)) {
        return match;
      }

      let decodedPath;
      try {
        decodedPath = decodeURIComponent(rawHref);
      } catch {
        return match;
      }

      const absoluteSource = path.resolve(
        path.dirname(sourcePath),
        decodedPath,
      );
      if (!fs.existsSync(absoluteSource)) {
        throw new Error(
          `Missing media referenced by ${page.source}: ${decodedPath}`,
        );
      }

      if (!copiedDestinations.has(absoluteSource)) {
        fs.mkdirSync(mediaDirectory, { recursive: true });
        let destinationName = slugifyFileName(path.basename(absoluteSource));
        let destinationPath = path.join(mediaDirectory, destinationName);
        let duplicateIndex = 2;

        while (fs.existsSync(destinationPath)) {
          const extension = path.extname(destinationName);
          const baseName = path.basename(destinationName, extension);
          destinationName = `${baseName}-${duplicateIndex}${extension}`;
          destinationPath = path.join(mediaDirectory, destinationName);
          duplicateIndex += 1;
        }

        fs.copyFileSync(absoluteSource, destinationPath);
        copiedDestinations.set(absoluteSource, destinationName);
      }

      const publicPath = [
        "",
        "images",
        "classroom",
        ...page.route.split("/"),
        copiedDestinations.get(absoluteSource),
      ].join("/");

      return `![${altText}](${publicPath})`;
    },
  );
}

function convertPage(page) {
  const sourcePath = path.join(sourceRoot, page.source);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing source page: ${page.source}`);
  }

  let markdown = fs.readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");
  const firstHeading = markdown.match(/^#\s+(.+)$/m);
  if (!firstHeading) {
    throw new Error(`No H1 heading found in ${page.source}`);
  }

  markdown = markdown.replace(/^#\s+.+\n?/, "");
  markdown = markdown.replace(
    /^(?:Owner|Tags|chapter|Parent page|Sub-page):[^\n]*(?:\n|$)/gm,
    "",
  );
  markdown = convertAsideBlocks(markdown);
  markdown = markdown.replaceAll("D**evelopment**", "Development");
  markdown = markdown.replaceAll("{id}", "&#123;id&#125;");
  markdown = markdown.replace(
    'เครื่องหมาย "<" และ ">"',
    "เครื่องหมาย `&lt;` และ `&gt;`",
  );
  markdown = markdown.replace(/^#\s+/gm, "## ");
  markdown = rewriteInternalLinks(markdown, sourcePath);
  markdown = rewriteImages(markdown, sourcePath, page);
  markdown = markdown.replace(/\n{3,}/g, "\n\n").trim();

  if (!markdown) {
    markdown =
      "หน้านี้ถูกนำเข้าจากเอกสารต้นฉบับและยังไม่มีรายละเอียดเพิ่มเติม";
  }

  const frontMatter = [
    "---",
    `title: ${yamlString(page.title)}`,
    `sidebarTitle: ${yamlString(page.sidebarTitle || page.title)}`,
    ...(page.index ? ["asIndexPage: true"] : []),
    "---",
    "",
  ].join("\n");
  const parentLink = page.parentRoute
    ? `[← กลับไปยัง ${page.parentTitle}](${page.parentRoute})\n\n`
    : "";
  const result = `${frontMatter}\n# ${page.title}\n\n${parentLink}${markdown}\n`;
  const destination = path.join(
    repositoryRoot,
    "app",
    ...page.route.split("/"),
    "page.mdx",
  );

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, result);
}

for (const page of pages) {
  convertPage(page);
}

console.log(`Imported ${pages.length} Notion pages.`);

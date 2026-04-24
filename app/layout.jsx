import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Classroom Handouts",
  description: "Course materials and handouts for students",
};

const navbar = (
  <Navbar
    logo={<b>Classroom Handouts</b>}
    projectLink="https://github.com/tanapattara/tanapattara.github.io"
  />
);

const footer = (
  <Footer>
    © {new Date().getFullYear()} Classroom Handouts. All rights reserved.
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          docsRepositoryBase="https://github.com/tanapattara/tanapattara.github.io/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

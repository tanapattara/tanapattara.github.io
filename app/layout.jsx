import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Script from "next/script";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Classroom Handouts",
  description: "Course materials and handouts for students",
  other: {
    "google-adsense-account": "ca-pub-8546645383819348",
  },
};

const navbar = (
  <Navbar
    logo={<b>Tanapattara's Classroom</b>}
    projectLink="https://github.com/tanapattara/tanapattara.github.io"
  />
);

const footer = (
  <Footer>
    © {new Date().getFullYear()} Tanapattara's Classroom. All rights reserved.
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8546645383819348"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="tanapattara"
          data-color="#FFDD00"
          data-emoji=""
          data-font="Cookie"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#000000"
          data-coffee-color="#ffffff"
          strategy="lazyOnload"
        />
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

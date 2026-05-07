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
    <span>
      © {new Date().getFullYear()} Tanapattara's Classroom. All rights reserved.
    </span>
    <script
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="tanapattara"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#FF813F"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>
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

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Script from "next/script";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Classroom Handouts",
  description: "Course materials and handouts for students",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/site-icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/site-icon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/site-icon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/site-icon-master.png",
        sizes: "357x357",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
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

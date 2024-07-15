import GoogleAdsense from "./components/GoogleAdsense";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TANAPATTARA",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <div className="container">{children}</div>
      </body>
      <GoogleAdsense />
    </html>
  );
}

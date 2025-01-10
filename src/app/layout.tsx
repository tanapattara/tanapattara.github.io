import GoogleAdsense from "./components/GoogleAdsense";
import AdminLayout from "./components/AdminLayout";
import ThemeRegistry from "./components/ThemeRegistry";
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
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          <AdminLayout>{children}</AdminLayout>
        </ThemeRegistry>
        <GoogleAdsense />
      </body>
    </html>
  );
}

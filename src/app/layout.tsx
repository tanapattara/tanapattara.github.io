"use client";
import { createTheme, CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider } from "styled-components";
import GoogleAdsense from "./components/GoogleAdsense";
import "./globals.css";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <html lang="th">
      <body>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
      <GoogleAdsense />
    </html>
  );
}

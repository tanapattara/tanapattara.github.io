import { Box, createTheme, CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider } from "styled-components";
import AppAppBar from "../AppAppBar";
import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <section>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={() => {}} />
        <Box sx={{ bgcolor: "background.default" }}>{children}</Box>
      </ThemeProvider>
    </section>
  );
}

"use client";

import "./globals.scss";
import { lightTheme } from "./theme/lightTheme";
import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body className={inter.className}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

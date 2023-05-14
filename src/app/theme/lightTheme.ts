"use client";
import { createTheme } from "@mui/material/styles";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#fff",
      paper: "#F8F9FAFF",
    },
    text: {
      primary: "#333",
      secondary: "#777",
    },
  },
});

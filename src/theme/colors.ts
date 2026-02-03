import { Theme } from "@react-navigation/native";

export const colors = {
  background: "#0B0B0B",
  surface: "#151515",
  surfaceElevated: "#1D1D1D",
  textPrimary: "#FFFFFF",
  textSecondary: "#B3B3B3",
  accent: "#FF7A00",
  border: "#2A2A2A",
  success: "#36D399",
  warning: "#FBBF24"
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    background: colors.background,
    border: colors.border,
    card: colors.surface,
    notification: colors.accent,
    primary: colors.accent,
    text: colors.textPrimary
  }
};

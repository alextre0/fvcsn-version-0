import { Theme } from "@react-navigation/native";

export const colors = {
  background: "#0B0B0B",
  surface: "#151515",
  surfaceElevated: "#1D1D1D",
  surfaceHighlight: "#222222",
  textPrimary: "#FFFFFF",
  textSecondary: "#B3B3B3",
  textMuted: "#8A8A8A",
  accent: "#FF7A00",
  accentStrong: "#FF8A1D",
  accentSoft: "#2B1A0A",
  info: "#4DB3FF",
  infoSoft: "#0E1B2A",
  border: "#2A2A2A",
  success: "#36D399",
  successSoft: "#0F241B",
  warning: "#FBBF24",
  warningSoft: "#2A2108"
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

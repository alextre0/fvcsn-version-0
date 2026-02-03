import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

type StatusTone = "accent" | "success" | "warning" | "info" | "neutral";

type StatusPillProps = {
  label: string;
  tone?: StatusTone;
};

const toneStyles: Record<StatusTone, { backgroundColor: string; color: string }> = {
  accent: { backgroundColor: colors.accentSoft, color: colors.accentStrong },
  success: { backgroundColor: colors.successSoft, color: colors.success },
  warning: { backgroundColor: colors.warningSoft, color: colors.warning },
  info: { backgroundColor: colors.infoSoft, color: colors.info },
  neutral: { backgroundColor: colors.surfaceHighlight, color: colors.textSecondary }
};

export default function StatusPill({ label, tone = "neutral" }: StatusPillProps) {
  const toneStyle = toneStyles[tone];

  return (
    <View style={[styles.container, { backgroundColor: toneStyle.backgroundColor }]}>
      <Text style={[styles.text, { color: toneStyle.color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999
  },
  text: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5
  }
});

import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
};

export default function SectionHeader({ title, actionLabel }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? <Text style={styles.action}>{actionLabel}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "600"
  },
  action: {
    color: colors.accentStrong,
    fontSize: 14,
    fontWeight: "600"
  }
});

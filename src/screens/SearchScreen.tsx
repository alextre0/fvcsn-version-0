import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme/colors";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TextInput
        placeholder="Search schools, teams, or games"
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
      />

      <SectionHeader title="Trending" />
      <Card style={styles.card}>
        <Text style={styles.resultTitle}>Appleton North vs. Neenah</Text>
        <Text style={styles.resultMeta}>Football • Fri 7:00 PM</Text>
      </Card>

      <SectionHeader title="Recent Searches" />
      <View style={styles.stack}>
        {["Kimberly Volleyball", "FVC Standings", "Oshkosh West"].map((item) => (
          <Card key={item} style={styles.card}>
            <Text style={styles.resultTitle}>{item}</Text>
            <Text style={styles.resultMeta}>Tap to revisit</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 20,
    paddingBottom: 40,
    gap: 12
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.textPrimary,
    fontSize: 15
  },
  stack: {
    gap: 12
  },
  card: {
    gap: 6
  },
  resultTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  resultMeta: {
    color: colors.textSecondary,
    fontSize: 12
  }
});

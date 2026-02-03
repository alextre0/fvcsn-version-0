import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";

export default function AdminDashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <Text style={styles.subtitle}>
          Update scores, schedules, and news posts in real time.
        </Text>
      </Card>

      <SectionHeader title="Quick Actions" />
      <View style={styles.stack}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Post Score Update</Text>
          <Text style={styles.cardMeta}>Push live results to the game feed.</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Publish Article</Text>
          <Text style={styles.cardMeta}>Add headlines, recaps, and media.</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Edit Schedule</Text>
          <Text style={styles.cardMeta}>Maintain times, locations, and opponents.</Text>
        </Card>
      </View>

      <SectionHeader title="Backend" />
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Firebase / Supabase</Text>
        <Text style={styles.cardMeta}>
          Connect this dashboard to authenticated admin roles for score entry, news publishing,
          and media uploads.
        </Text>
      </Card>
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
    paddingBottom: 40
  },
  header: {
    gap: 8
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "700"
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13
  },
  stack: {
    gap: 12
  },
  card: {
    gap: 8
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  cardMeta: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 16
  }
});

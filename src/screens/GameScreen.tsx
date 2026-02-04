import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import Card from "../components/Card";
import StatusPill from "../components/StatusPill";

type ScreenRouteProp = RouteProp<RootStackParamList, "Game">;

export default function GameScreen() {
  const route = useRoute<ScreenRouteProp>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Game Center</Text>
          <StatusPill label="Final" tone="success" />
        </View>
        <Text style={styles.subtitle}>Game ID: {route.params.gameId}</Text>
        <View style={styles.scoreRow}>
          <Text style={styles.team}>Appleton North</Text>
          <Text style={styles.score}>24</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.team}>Neenah</Text>
          <Text style={styles.score}>28</Text>
        </View>
        <Text style={styles.meta}>Final • Rocket Stadium • 7:00 PM</Text>
      </Card>

      <Card style={styles.summaryCard}>
        <Text style={styles.sectionTitle}>Game Summary</Text>
        <Text style={styles.summaryText}>
          A late fourth-quarter drive sealed the victory as the defense held on for a final stop.
        </Text>
      </Card>

      <Card style={styles.summaryCard}>
        <View style={styles.summaryHeader}>
          <Text style={styles.sectionTitle}>Live Updates</Text>
          <StatusPill label="Play by play" tone="info" />
        </View>
        <View style={styles.updateRow}>
          <Text style={styles.updateTime}>Q4 2:11</Text>
          <Text style={styles.updateText}>Touchdown Neenah to take the lead.</Text>
        </View>
        <View style={styles.updateRow}>
          <Text style={styles.updateTime}>Q3 6:44</Text>
          <Text style={styles.updateText}>Appleton North converts on 4th down.</Text>
        </View>
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
    paddingBottom: 40,
    gap: 16
  },
  header: {
    gap: 8
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "700"
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12
  },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  team: {
    color: colors.textPrimary,
    fontSize: 16
  },
  score: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700"
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 12
  },
  summaryCard: {
    gap: 10
  },
  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600"
  },
  summaryText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18
  },
  updateRow: {
    flexDirection: "row",
    gap: 10
  },
  updateTime: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "600",
    width: 70
  },
  updateText: {
    color: colors.textSecondary,
    fontSize: 12,
    flex: 1
  }
});

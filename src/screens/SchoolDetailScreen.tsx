import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import { newsPosts, latestScores, sports, schools } from "../data/mock";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";

type ScreenRouteProp = RouteProp<RootStackParamList, "SchoolDetail">;

export default function SchoolDetailScreen() {
  const route = useRoute<ScreenRouteProp>();
  const school = schools.find((item) => item.id === route.params.schoolId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.logo}>{school?.logo ?? "🏫"}</Text>
        <View>
          <Text style={styles.title}>{school?.name ?? "School"}</Text>
          <Text style={styles.subtitle}>Teams • Schedule • Scores</Text>
        </View>
      </View>

      <SectionHeader title="Teams" actionLabel="All sports" />
      <View style={styles.wrap}>
        {sports.map((sport) => (
          <Card key={sport.id} style={styles.pill}>
            <Text style={styles.pillText}>{sport.name}</Text>
          </Card>
        ))}
      </View>

      <SectionHeader title="Recent Scores" actionLabel="Full schedule" />
      <View style={styles.stack}>
        {latestScores.map((score) => (
          <Card key={score.id} style={styles.scoreCard}>
            <Text style={styles.scoreLine}>
              {score.home} {score.homeScore} - {score.awayScore} {score.away}
            </Text>
            <Text style={styles.scoreStatus}>{score.status}</Text>
          </Card>
        ))}
      </View>

      <SectionHeader title="News" actionLabel="See all" />
      <View style={styles.stack}>
        {newsPosts.map((news) => (
          <Card key={news.id} style={styles.newsCard}>
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Text style={styles.newsSummary}>{news.summary}</Text>
            <Text style={styles.newsTime}>{news.time}</Text>
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
    paddingBottom: 40
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border
  },
  logo: {
    fontSize: 32
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  pillText: {
    color: colors.textPrimary,
    fontSize: 13
  },
  stack: {
    gap: 12
  },
  scoreCard: {
    gap: 6
  },
  scoreLine: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  scoreStatus: {
    color: colors.textSecondary,
    fontSize: 12
  },
  newsCard: {
    gap: 6
  },
  newsTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  newsSummary: {
    color: colors.textSecondary,
    fontSize: 13
  },
  newsTime: {
    color: colors.accent,
    fontSize: 12
  }
});

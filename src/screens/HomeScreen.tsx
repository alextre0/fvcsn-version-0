import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import { featuredGames, headlines, latestScores, sports } from "../data/mock";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <LinearGradient
        colors={[colors.surfaceElevated, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <Text style={styles.heroTitle}>FVCSN</Text>
        <Text style={styles.heroSubtitle}>Fox Valley Conference Sports Network</Text>
        <View style={styles.heroActions}>
          <Pressable style={styles.primaryButton} onPress={() => navigation.navigate("Search")}>
            <Text style={styles.primaryButtonText}>Search</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate("Admin")}>
            <Text style={styles.secondaryButtonText}>Admin</Text>
          </Pressable>
        </View>
      </LinearGradient>

      <SectionHeader title="Latest Scores" actionLabel="View all" />
      <View style={styles.cardStack}>
        {latestScores.map((score) => (
          <Card key={score.id} style={styles.scoreCard}>
            <View style={styles.scoreRow}>
              <Text style={styles.scoreTeam}>{score.home}</Text>
              <Text style={styles.scoreNumber}>{score.homeScore}</Text>
            </View>
            <View style={styles.scoreRow}>
              <Text style={styles.scoreTeam}>{score.away}</Text>
              <Text style={styles.scoreNumber}>{score.awayScore}</Text>
            </View>
            <Text style={styles.scoreStatus}>{score.status}</Text>
          </Card>
        ))}
      </View>

      <SectionHeader title="Featured Games" actionLabel="Schedule" />
      <View style={styles.cardStack}>
        {featuredGames.map((game) => (
          <Card key={game.id} style={styles.featureCard}>
            <Text style={styles.gameSport}>{game.sport}</Text>
            <Text style={styles.gameTitle}>{game.title}</Text>
            <Text style={styles.gameMeta}>{game.time}</Text>
            <Text style={styles.gameMeta}>{game.location}</Text>
            <Pressable
              style={styles.inlineButton}
              onPress={() => navigation.navigate("Game", { gameId: game.id })}
            >
              <Text style={styles.inlineButtonText}>Game Center</Text>
            </Pressable>
          </Card>
        ))}
      </View>

      <SectionHeader title="Headlines" actionLabel="Newsroom" />
      <View style={styles.cardStack}>
        {headlines.map((headline) => (
          <Card key={headline.id} style={styles.headlineCard}>
            <Text style={styles.headlineTag}>{headline.tag}</Text>
            <Text style={styles.headlineTitle}>{headline.title}</Text>
          </Card>
        ))}
      </View>

      <SectionHeader title="Quick Links" />
      <View style={styles.quickLinks}>
        {sports.map((sport) => (
          <Pressable
            key={sport.id}
            style={styles.quickLink}
            onPress={() => navigation.navigate("SportDetail", { sportId: sport.id })}
          >
            <Text style={styles.quickLinkText}>{sport.name}</Text>
          </Pressable>
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
  hero: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary
  },
  heroSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondary
  },
  heroActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20
  },
  primaryButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999
  },
  primaryButtonText: {
    fontWeight: "600",
    color: colors.background
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.accent,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999
  },
  secondaryButtonText: {
    fontWeight: "600",
    color: colors.accent
  },
  cardStack: {
    gap: 12
  },
  scoreCard: {
    gap: 6
  },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scoreTeam: {
    color: colors.textPrimary,
    fontSize: 16
  },
  scoreNumber: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700"
  },
  scoreStatus: {
    marginTop: 6,
    color: colors.textSecondary,
    fontSize: 12
  },
  featureCard: {
    gap: 6
  },
  gameSport: {
    color: colors.accent,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: 12
  },
  gameTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600"
  },
  gameMeta: {
    color: colors.textSecondary,
    fontSize: 13
  },
  inlineButton: {
    alignSelf: "flex-start",
    marginTop: 10,
    backgroundColor: colors.surfaceElevated,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999
  },
  inlineButtonText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "600"
  },
  headlineCard: {
    gap: 6
  },
  headlineTag: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "600"
  },
  headlineTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600"
  },
  quickLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  quickLink: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  quickLinkText: {
    color: colors.textPrimary,
    fontSize: 13
  }
});

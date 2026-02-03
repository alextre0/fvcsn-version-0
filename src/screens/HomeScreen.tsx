import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import {
  featuredGames,
  headlines,
  latestScores,
  liveNow,
  quickActions,
  sports
} from "../data/mock";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import StatusPill from "../components/StatusPill";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <LinearGradient
        colors={[colors.surfaceHighlight, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.heroRow}>
          <View>
            <Text style={styles.heroTitle}>FVCSN</Text>
            <Text style={styles.heroSubtitle}>Fox Valley Conference Sports Network</Text>
          </View>
          <StatusPill label="LIVE" tone="accent" />
        </View>
        <Text style={styles.heroHeadline}>{headlines[0].title}</Text>
        <Text style={styles.heroSummary}>{headlines[0].summary}</Text>
        <View style={styles.heroActions}>
          <Pressable style={styles.primaryButton} onPress={() => navigation.navigate("Search")}>
            <Text style={styles.primaryButtonText}>Search</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate("Admin")}>
            <Text style={styles.secondaryButtonText}>Admin</Text>
          </Pressable>
        </View>
      </LinearGradient>

      <SectionHeader title="Scoreboard" actionLabel="View all" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.ticker}>
        {latestScores.map((score) => (
          <Card key={score.id} style={styles.tickerCard}>
            <View style={styles.tickerHeader}>
              <Text style={styles.tickerLabel}>FVC</Text>
              <StatusPill label={score.status} tone="neutral" />
            </View>
            <View style={styles.scoreRow}>
              <Text style={styles.scoreTeam}>{score.home}</Text>
              <Text style={styles.scoreNumber}>{score.homeScore}</Text>
            </View>
            <View style={styles.scoreRow}>
              <Text style={styles.scoreTeam}>{score.away}</Text>
              <Text style={styles.scoreNumber}>{score.awayScore}</Text>
            </View>
          </Card>
        ))}
      </ScrollView>

      <SectionHeader title="Live Now" actionLabel="Streams" />
      <View style={styles.cardStack}>
        {liveNow.map((stream) => (
          <Card key={stream.id} style={styles.liveCard}>
            <View style={styles.liveHeader}>
              <StatusPill label={stream.sport} tone="info" />
              <StatusPill label={stream.status} tone="accent" />
            </View>
            <Text style={styles.liveTitle}>{stream.title}</Text>
            <Text style={styles.liveMeta}>{stream.location}</Text>
            <Pressable style={styles.inlineButton} onPress={() => navigation.navigate("Game", { gameId: stream.id })}>
              <Text style={styles.inlineButtonText}>{stream.streamLabel}</Text>
            </Pressable>
          </Card>
        ))}
      </View>

      <SectionHeader title="Featured Games" actionLabel="Schedule" />
      <View style={styles.cardStack}>
        {featuredGames.map((game) => (
          <Card key={game.id} style={styles.featureCard}>
            <View style={styles.featureHeader}>
              <Text style={styles.gameSport}>{game.sport}</Text>
              <StatusPill label={game.status} tone="warning" />
            </View>
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
            <Text style={styles.headlineSummary}>{headline.summary}</Text>
          </Card>
        ))}
      </View>

      <SectionHeader title="Quick Actions" />
      <View style={styles.quickGrid}>
        {quickActions.map((action) => (
          <Card key={action.id} style={styles.quickCard}>
            <Text style={styles.quickTitle}>{action.label}</Text>
            <Text style={styles.quickSubtitle}>{action.description}</Text>
          </Card>
        ))}
      </View>

      <SectionHeader title="Sports Hub" />
      <View style={styles.quickLinks}>
        {sports.map((sport) => (
          <Pressable
            key={sport.id}
            style={styles.quickLink}
            onPress={() => navigation.navigate("SportDetail", { sportId: sport.id })}
          >
            <Text style={styles.quickLinkText}>{sport.name}</Text>
            <Text style={styles.quickLinkMeta}>{sport.status}</Text>
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
    borderColor: colors.border,
    gap: 12
  },
  heroRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary
  },
  heroSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: colors.textSecondary
  },
  heroHeadline: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary
  },
  heroSummary: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18
  },
  heroActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8
  },
  primaryButton: {
    backgroundColor: colors.accentStrong,
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
    borderColor: colors.accentStrong,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999
  },
  secondaryButtonText: {
    fontWeight: "600",
    color: colors.accentStrong
  },
  ticker: {
    gap: 12,
    paddingRight: 20
  },
  tickerCard: {
    width: 220,
    gap: 8
  },
  tickerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tickerLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  cardStack: {
    gap: 12
  },
  liveCard: {
    gap: 8
  },
  liveHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  liveTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600"
  },
  liveMeta: {
    color: colors.textSecondary,
    fontSize: 12
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
  featureHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  gameSport: {
    color: colors.accentStrong,
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
    backgroundColor: colors.surfaceHighlight,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999
  },
  inlineButtonText: {
    color: colors.accentStrong,
    fontSize: 12,
    fontWeight: "600"
  },
  headlineCard: {
    gap: 6
  },
  headlineTag: {
    color: colors.accentStrong,
    fontSize: 12,
    fontWeight: "600"
  },
  headlineTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600"
  },
  headlineSummary: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 17
  },
  quickGrid: {
    gap: 12
  },
  quickCard: {
    gap: 4
  },
  quickTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  quickSubtitle: {
    color: colors.textSecondary,
    fontSize: 12
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
    paddingVertical: 8,
    gap: 2
  },
  quickLinkText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "600"
  },
  quickLinkMeta: {
    color: colors.textSecondary,
    fontSize: 10
  }
});

import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useState } from "react";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import {
  basketballTeams,
  featuredGames,
  headlines,
  latestScores,
  liveNow,
  quickActions,
  scheduleGames,
  standings
} from "../data/mock";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import StatusPill from "../components/StatusPill";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedDate, setSelectedDate] = useState("2/3");
  const formatDetails = (details: string[]) => details.filter((detail) => detail && detail !== "-").join(" • ");
  const scheduleDays = useMemo(() => {
    const dates = Array.from(new Set(scheduleGames.map((game) => game.date)));
    return dates.sort((a, b) => {
      const [aMonth, aDay] = a.split("/").map(Number);
      const [bMonth, bDay] = b.split("/").map(Number);
      return aMonth === bMonth ? aDay - bDay : aMonth - bMonth;
    });
  }, [scheduleGames]);
  const activeDate = scheduleDays.includes(selectedDate) ? selectedDate : scheduleDays[0];
  const dailyGames = scheduleGames.filter((game) => game.date === activeDate);

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

      <SectionHeader title="Today • Feb 3" actionLabel={`${dailyGames.length} games`} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.daySelector}>
        {scheduleDays.map((date) => (
          <Pressable
            key={date}
            style={[styles.dayChip, date === activeDate ? styles.dayChipActive : null]}
            onPress={() => setSelectedDate(date)}
          >
            <Text style={[styles.dayChipText, date === activeDate ? styles.dayChipTextActive : null]}>
              {date}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.cardStack}>
        {dailyGames.map((game) => (
          <Card key={game.id} style={styles.scheduleCard}>
            <View style={styles.scheduleHeader}>
              <Text style={styles.scheduleTime}>{game.time}</Text>
              <StatusPill label={game.conference ? "Conference" : "Non-conf"} tone="info" />
            </View>
            <Text style={styles.scheduleMatchup}>{game.away}</Text>
            <Text style={styles.scheduleMatchupSecondary}>at {game.home}</Text>
            <Pressable style={styles.inlineButton} onPress={() => navigation.navigate("Game", { gameId: game.id })}>
              <Text style={styles.inlineButtonText}>Preview Game</Text>
            </Pressable>
          </Card>
        ))}
      </View>

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

      <SectionHeader title="Standings Snapshot" actionLabel="Full table" />
      <View style={styles.cardStack}>
        {standings.slice(0, 5).map((team, index) => (
          <Card key={team.id} style={styles.standingsCard}>
            <Text style={styles.standingsRank}>#{index + 1}</Text>
            <View style={styles.standingsInfo}>
              <Text style={styles.standingsName}>{team.name}</Text>
              <Text style={styles.standingsRecord}>
                Conf {team.conference} • Overall {team.overall}
              </Text>
            </View>
            <StatusPill label={team.streak} tone="neutral" />
          </Card>
        ))}
      </View>

      <SectionHeader title="Team Rosters" actionLabel="All teams" />
      <View style={styles.cardStack}>
        {basketballTeams.map((team) => (
          <Card key={team.id} style={styles.rosterCard}>
            <View style={styles.rosterHeader}>
              <View>
                <Text style={styles.rosterTitle}>{team.name}</Text>
                <Text style={styles.rosterMeta}>{team.record} • Varsity</Text>
              </View>
              <StatusPill label={`${team.roster.length} players`} tone="neutral" />
            </View>
            <View style={styles.rosterGrid}>
              {team.roster.slice(0, 3).map((player) => (
                <View key={`${team.id}-${player.number}`} style={styles.rosterPlayer}>
                  <Text style={styles.rosterNumber}>#{player.number}</Text>
                  <Text style={styles.rosterName}>{player.name}</Text>
                  <Text style={styles.rosterDetails}>
                    {formatDetails([player.grade, player.position, player.height])}
                  </Text>
                </View>
              ))}
            </View>
            <Pressable
              style={styles.inlineButton}
              onPress={() => navigation.navigate("SchoolDetail", { schoolId: team.id })}
            >
              <Text style={styles.inlineButtonText}>View full roster</Text>
            </Pressable>
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
  daySelector: {
    gap: 10,
    paddingRight: 20,
    marginBottom: 12
  },
  dayChip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: colors.surface
  },
  dayChipActive: {
    borderColor: colors.accentStrong,
    backgroundColor: colors.accentSoft
  },
  dayChipText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "600"
  },
  dayChipTextActive: {
    color: colors.accentStrong
  },
  scheduleCard: {
    gap: 8
  },
  scheduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  scheduleTime: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "600"
  },
  scheduleMatchup: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700"
  },
  scheduleMatchupSecondary: {
    color: colors.textSecondary,
    fontSize: 13
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
  standingsCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  standingsRank: {
    color: colors.accentStrong,
    fontSize: 16,
    fontWeight: "700",
    width: 28
  },
  standingsInfo: {
    flex: 1
  },
  standingsName: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  standingsRecord: {
    color: colors.textSecondary,
    fontSize: 12
  },
  rosterCard: {
    gap: 12
  },
  rosterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12
  },
  rosterTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700"
  },
  rosterMeta: {
    color: colors.textSecondary,
    fontSize: 12
  },
  rosterGrid: {
    gap: 10
  },
  rosterPlayer: {
    backgroundColor: colors.surfaceHighlight,
    borderRadius: 12,
    padding: 10
  },
  rosterNumber: {
    color: colors.accentStrong,
    fontSize: 12,
    fontWeight: "700"
  },
  rosterName: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2
  },
  rosterDetails: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 2
  }
});

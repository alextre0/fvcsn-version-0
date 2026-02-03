import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import { featuredGames, latestScores } from "../data/mock";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";

type ScreenRouteProp = RouteProp<RootStackParamList, "SportDetail">;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SportDetailScreen() {
  const route = useRoute<ScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{route.params.sportId.replace("-", " ")}</Text>
        <Text style={styles.subtitle}>Schedule • Scores • Standings • Stats</Text>
      </View>

      <SectionHeader title="Upcoming Games" actionLabel="Full schedule" />
      <View style={styles.stack}>
        {featuredGames.map((game) => (
          <Card key={game.id} style={styles.card}>
            <Text style={styles.cardTitle}>{game.title}</Text>
            <Text style={styles.cardMeta}>{game.time}</Text>
            <Text style={styles.cardMeta}>{game.location}</Text>
            <Pressable
              style={styles.inlineButton}
              onPress={() => navigation.navigate("Game", { gameId: game.id })}
            >
              <Text style={styles.inlineButtonText}>Game Center</Text>
            </Pressable>
          </Card>
        ))}
      </View>

      <SectionHeader title="Recent Scores" actionLabel="View results" />
      <View style={styles.stack}>
        {latestScores.map((score) => (
          <Card key={score.id} style={styles.card}>
            <Text style={styles.cardTitle}>
              {score.home} {score.homeScore} - {score.awayScore} {score.away}
            </Text>
            <Text style={styles.cardMeta}>{score.status}</Text>
          </Card>
        ))}
      </View>

      <SectionHeader title="Standings" actionLabel="Conference" />
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>1. Kimberly • 4-0</Text>
        <Text style={styles.cardMeta}>2. Appleton North • 3-1</Text>
        <Text style={styles.cardMeta}>3. Neenah • 3-1</Text>
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
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize"
  },
  subtitle: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: 13
  },
  stack: {
    gap: 12
  },
  card: {
    gap: 6
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  cardMeta: {
    color: colors.textSecondary,
    fontSize: 12
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
  }
});

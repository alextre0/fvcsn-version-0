import { ScrollView, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import { basketballTeams, sports } from "../data/mock";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import StatusPill from "../components/StatusPill";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SportsScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Sports" />
      <View style={styles.grid}>
        {sports.map((sport) => (
          <Pressable
            key={sport.id}
            onPress={() => navigation.navigate("SportDetail", { sportId: sport.id })}
          >
            <Card style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.name}>{sport.name}</Text>
                <StatusPill label={sport.status} tone={sport.status === "Off-season" ? "neutral" : "success"} />
              </View>
              <Text style={styles.meta}>
                {sport.season} season • {basketballTeams.length} varsity rosters
              </Text>
            </Card>
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
  grid: {
    gap: 12
  },
  card: {
    gap: 6
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600"
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 12
  }
});

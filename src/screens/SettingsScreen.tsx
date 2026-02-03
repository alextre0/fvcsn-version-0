import { ScrollView, StyleSheet, Text, Switch, View } from "react-native";
import { colors } from "../theme/colors";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Favorites" />
      <Card style={styles.card}>
        <Text style={styles.title}>Favorite Schools</Text>
        <Text style={styles.meta}>Kimberly, Appleton North</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.title}>Favorite Sports</Text>
        <Text style={styles.meta}>Football, Volleyball</Text>
      </Card>

      <SectionHeader title="Notifications" />
      <Card style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>Score Updates</Text>
          <Switch value trackColor={{ true: colors.accent, false: colors.border }} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Game Start Alerts</Text>
          <Switch value={false} trackColor={{ true: colors.accent, false: colors.border }} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Breaking News</Text>
          <Switch value trackColor={{ true: colors.accent, false: colors.border }} />
        </View>
      </Card>

      <SectionHeader title="Appearance" />
      <Card style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>Dark Mode</Text>
          <Switch value trackColor={{ true: colors.accent, false: colors.border }} />
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
    gap: 12
  },
  card: {
    gap: 12
  },
  title: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600"
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 12
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

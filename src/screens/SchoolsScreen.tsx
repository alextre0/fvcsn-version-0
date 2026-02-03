import { ScrollView, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import { schools } from "../data/mock";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SchoolsScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="FVC Schools" />
      <View style={styles.grid}>
        {schools.map((school) => (
          <Pressable
            key={school.id}
            onPress={() => navigation.navigate("SchoolDetail", { schoolId: school.id })}
          >
            <Card style={styles.card}>
              <Text style={styles.logo}>{school.logo}</Text>
              <Text style={styles.name}>{school.name}</Text>
              <Text style={styles.meta}>View teams & schedules</Text>
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
    alignItems: "flex-start",
    gap: 8
  },
  logo: {
    fontSize: 28
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

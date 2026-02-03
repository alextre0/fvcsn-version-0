import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SchoolsScreen from "../screens/SchoolsScreen";
import SchoolDetailScreen from "../screens/SchoolDetailScreen";
import SportsScreen from "../screens/SportsScreen";
import SportDetailScreen from "../screens/SportDetailScreen";
import GameScreen from "../screens/GameScreen";
import NewsScreen from "../screens/NewsScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AdminDashboardScreen from "../screens/AdminDashboardScreen";
import { colors } from "../theme/colors";

export type RootStackParamList = {
  Tabs: undefined;
  SchoolDetail: { schoolId: string };
  SportDetail: { sportId: string };
  Game: { gameId: string };
  Admin: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "Schools") {
            iconName = focused ? "school" : "school-outline";
          }
          if (route.name === "Sports") {
            iconName = focused ? "basketball" : "basketball-outline";
          }
          if (route.name === "News") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          }
          if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schools" component={SchoolsScreen} />
      <Tab.Screen name="Sports" component={SportsScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.textPrimary,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background }
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="SchoolDetail" component={SchoolDetailScreen} options={{ title: "School" }} />
      <Stack.Screen name="SportDetail" component={SportDetailScreen} options={{ title: "Sport" }} />
      <Stack.Screen name="Game" component={GameScreen} options={{ title: "Game Center" }} />
      <Stack.Screen name="Admin" component={AdminDashboardScreen} options={{ title: "Admin Dashboard" }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Search" }} />
    </Stack.Navigator>
  );
}

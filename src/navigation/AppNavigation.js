import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabStack = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "Main") {
              iconName = "ios-albums";
            } else if (route.name === "Booked") {
              iconName = "ios-star";
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: THEME.MAIN_COLOR,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name='Main' component={MainScreen} />
        <Tab.Screen name='Booked' component={BookedScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator
      initialRouteName='App'
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name='Tab' component={TabStack} />
      <Stack.Screen name='Main' component={MainScreen} />
      <Stack.Screen name='About' component={AboutScreen} />
      <Stack.Screen name='Post' component={PostScreen} />
      <Stack.Screen name='Create' component={CreateScreen} />
    </Stack.Navigator>
  );
}

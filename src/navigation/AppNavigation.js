import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";

import { THEME } from "../theme";

export const navOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
  },
  headerTintColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerStack = () => {
    return (
      <Drawer.Navigator
        initialRouteName='Root'
        screenOptions={{
          drawerActiveTintColor: THEME.MAIN_COLOR,
        }}
      >
        <Drawer.Screen
          options={{ headerShown: false }}
          name='Blog page'
          component={TabStack}
        />
        <Drawer.Screen name='Create' component={CreateScreen} />
        <Drawer.Screen name='About' component={AboutScreen} />
      </Drawer.Navigator>
    );
  };

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
          tabBarActiveTintColor:
            Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
          tabBarInactiveTintColor:
            Platform.OS === "android" ? "lightgrey" : "grey",
          tabBarStyle: {
            backgroundColor: Platform.OS === "ios" ? "#fff" : THEME.MAIN_COLOR,
          },
        })}
      >
        <Tab.Screen
          options={{ tabBarLabel: "All" }}
          name='Main'
          component={MainScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Favorites" }}
          name='Booked'
          component={BookedScreen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator initialRouteName='App'>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Blog'
        component={DrawerStack}
      />
      <Stack.Screen name='Post' component={PostScreen} />
    </Stack.Navigator>
  );
}

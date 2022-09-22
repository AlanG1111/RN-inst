import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import AppNavigation from "./src/navigation/AppNavigation";
import "react-native-gesture-handler";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}

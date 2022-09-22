import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIcon from "../components/AppHeaderIcon";
import { navOptions } from "../navigation/AppNavigation";

export const AboutScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "About",
      ...navOptions,
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);
  return (
    <View style={styles.center}>
      <Text>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

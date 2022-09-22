import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIcon from "../components/AppHeaderIcon";
import { navOptions } from "../navigation/AppNavigation";

export const CreateScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Create",
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
      <Text>Create</Text>
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

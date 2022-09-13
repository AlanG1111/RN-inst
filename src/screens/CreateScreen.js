import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CreateScreen = () => {
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


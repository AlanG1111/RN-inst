import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIcon from "../components/AppHeaderIcon";
import Post from "../components/Post";
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };
  navigation.setOptions({
    title: "My blog",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Toggle Drawer'
          iconName='ios-menu'
          onPress={() => console.log("sdsd")}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo'
          iconName='ios-camera'
          onPress={() => console.log("sdsd")}
        />
      </HeaderButtons>
    ),
  });
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

// MainScreen.navigationOptions = {
//   headerTitle: "My blog",
// };

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

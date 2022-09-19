import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIcon from "../components/AppHeaderIcon";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ navigation, route }) => {
  const postId = route.params["postId"];
  const date = route.params["date"];
  const booked = route.params["booked"];
  const iconName = booked ? "ios-star" : "ios-star-outline";

  useEffect(() => {
    navigation.setOptions({
      title: "Post from " + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Take photo'
            iconName={iconName}
            onPress={() => console.log("aaaa")}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const removeHandler = () => {
    Alert.alert(
      "Deleting post",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          style: "destructive",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const post = DATA.find((p) => p.id === postId);
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrapp}>
        <Text>{post.text}</Text>
      </View>
      <Button
        title='Delete'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrapp: {
    padding: 10,
  },
});

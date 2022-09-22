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
import { useDispatch, useSelector } from "react-redux";
import AppHeaderIcon from "../components/AppHeaderIcon";
import { removePost, toggleBooked } from "../store/actions/post";
import { THEME } from "../theme";

export const PostScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const postId = route.params["postId"];
  const date = route.params["date"];
  const booked = useSelector((state) =>
    state.postReducer.bookedPosts.some((post) => post.id === postId)
  );
  const post = useSelector((state) =>
    state.postReducer.allPosts.find((p) => p.id === postId)
  );
  const iconName = post.booked ? "ios-star" : "ios-star-outline";

  const toggleHandler = () => {
    dispatch(toggleBooked(postId));
  };

  useEffect(() => {
    navigation.setOptions({
      title: "Post from " + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Take photo'
            iconName={iconName}
            onPress={toggleHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [iconName]);

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
          onPress: () => {
            navigation.navigate("Blog");
            dispatch(removePost(postId));
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

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

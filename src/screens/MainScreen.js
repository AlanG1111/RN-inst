import React, { useEffect } from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import AppHeaderIcon from "../components/AppHeaderIcon";
import PostList from "../components/PostList";
import { loadPosts } from "../store/actions/post";
import { THEME } from "../theme";

export const MainScreen = ({ navigation }) => {
  const allPosts = useSelector((state) => state.postReducer.allPosts);
  const dispatch = useDispatch();

  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  useEffect(() => {
    navigation.setOptions({
      title: "My blog",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Take photo'
            iconName='ios-camera'
            onPress={() => console.log("aaaa")}
          />
        </HeaderButtons>
      ),
    });
  }, []);
  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

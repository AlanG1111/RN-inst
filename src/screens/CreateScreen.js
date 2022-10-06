import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import AppHeaderIcon from "../components/AppHeaderIcon";
import PhotoPicker from "../components/PhotoPicker";
import { navOptions } from "../navigation/AppNavigation";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const imgRef = useRef();

  useEffect(() => {
    navigation.setOptions({
      title: "Create post page",
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

  const photoPickHandler = (uri) => {
    imgRef.current = uri;
  };

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgRef.current,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate("Blog page");
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create new post</Text>
          <TextInput
            style={styles.textArea}
            placeholder='Enter text'
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title='Create post'
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
});

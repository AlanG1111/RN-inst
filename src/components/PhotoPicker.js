import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet, Image, Button } from "react-native";

const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);
  const takePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      onPick(result.uri);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Button title='Add photo' onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});

export default PhotoPicker;

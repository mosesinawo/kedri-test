import {
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import React from "react";

interface ImageCompProps {
  image: ImageSourcePropType;
  size?: number;
  style?: any;
}

const ImageComp = ({ image, size = 15, style }: ImageCompProps) => {
  return (
    <Image
      source={image}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};

export default ImageComp;


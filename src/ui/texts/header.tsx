import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import React, { FC } from "react";
import tw from "../../lib/tailwind";


interface IHeader extends TextProps {
  children: React.ReactNode;
  size?: number;
  weight?: TextStyle["fontWeight"]; // Ensures valid fontWeight values
  color?: string;
  font?: string;
  props?: any;
  lineHeight?: number;
}

const Header: FC<IHeader> = ({
  children,
  style,
  size = 18,
  weight = "600",
  color = "#000",
  font = "semi_bold",
  lineHeight,
  ...props
}) => {

  return (
    <Text
      style={[
        { fontSize: size, fontWeight: weight, color :color, fontFamily: font, lineHeight:lineHeight },
        style,
        tw`dark:text-white`,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {},
});

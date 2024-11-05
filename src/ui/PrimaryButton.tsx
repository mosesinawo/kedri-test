import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import tw from "../lib/tailwind";
import TextPrimary from "./texts/text";

interface ButtonProps {
  size?: number;
  children: React.ReactNode;
  onPress?: () => void;
  style?: any;
  disabled?:boolean;
}

const PrimaryButton: FC<ButtonProps> = ({
  size = 16,
  children,
  style,
  onPress,
disabled
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        tw`h-[50px] w-full rounded-[8px] flex-row text-center items-center justify-center gap-2`,
        {
            backgroundColor: disabled ? "#CACACA" : "#F15C44"
        },
        style,
      ]}
    >
      <TextPrimary color="white" style={{ fontSize: size, lineHeight: 19.3, }} font="semi_bold">
        {children}
      </TextPrimary>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});

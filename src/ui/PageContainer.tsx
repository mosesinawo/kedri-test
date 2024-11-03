import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import tw from "../lib/tailwind";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

interface IPageContainer {
  children: React.ReactNode;
  padding?: string | number;
  style?:any
  paddingTop?: number; 
}

const PageContainer: FC<IPageContainer> = ({ children, padding = "5%", style, paddingTop = 0.5, ...props }) => {
  const insets = useSafeAreaInsets();
 
  return (
    <SafeAreaView
      style={[ tw`bg-[#fff] px-[5%]`,
        {
          flex: 1,
          paddingHorizontal: "5%",
          paddingTop: insets.top * paddingTop,
        },
        style,
      ]} 
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

export default PageContainer;


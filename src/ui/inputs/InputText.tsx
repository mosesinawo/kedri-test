import { Image, KeyboardTypeOptions, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { FC, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import TextPrimary from "../texts/text";
import { colors } from "../../utils/constants";
import tw from "../../lib/tailwind";

interface IInputText {
  placeholder: string;
  style?: any;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  returnKeyType?: "go" | "next" | "search" | "send" | "none";
  onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void;
  icon?: any;
  type?: string;
  errorMessage?:any;
  onPress?:() => void;
  editable?: boolean;
  keyboardType?:KeyboardTypeOptions
}

const InputText: FC<IInputText> = (props) => {
  const {
    placeholder,
    icon,
    style,
    secureTextEntry,
    onChangeText,
    value,
    autoCapitalize,
    autoCorrect,
    returnKeyType,
    onSubmitEditing,
    keyboardType,
    type,
    errorMessage,
    onPress,
    editable,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
   
  return (
    <View style={tw``} >
    <Pressable onPress={onPress} style={[styles.inputContainer, style, tw`bg-[#f4f4f4]`]}>
      {icon && (
        <Image
          source={typeof icon === "string" ? { uri: icon } : icon}
          resizeMode="contain"
          style={styles.icon}
        />
      )}

      <TextInput
        placeholder={placeholder ? placeholder : "Enter text"}
        style={[styles.inputText]}
        placeholderTextColor={colors.gray}
        secureTextEntry={type === "password" && !isPasswordVisible} // Toggle visibility based on state
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
      />

      {type === "password" && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <AntDesign
            name={isPasswordVisible ? "eye" : "eyeo"}
            size={20}
            color={colors.gray_light}
          />
        </TouchableOpacity>
      )}
    </Pressable>
    </View>
  ); 
};
const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 10,
    color: colors.gray_light,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    
  },
  inputText: {
    fontSize: 13,
    color: colors.gray_light,
    paddingHorizontal: 10,
    height: 50,
    flex: 1, // Allow TextInput to take up available space
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: colors.gray_light,
    objectFit: "contain",
  },
});

export default InputText;


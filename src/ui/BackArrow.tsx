import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import tw from '../lib/tailwind'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


interface BackArrowProp{
    onPress?: () => void;
}

const BackArrow:FC<BackArrowProp> = ({onPress}) => {
  return (
    <Pressable style={tw`border border-[#E8E8E8] h-10 w-10 rounded-full justify-center items-center`} onPress={onPress}>
      <SimpleLineIcons name="arrow-left" size={18} color="black" />
    </Pressable>
  )
}

export default BackArrow

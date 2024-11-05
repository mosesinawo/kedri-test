import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TextPrimary from './texts/text';

const AccountBrief = () => {
  return (
    <View style={tw`flex-row items-center gap-3 rounded-md border border-[#E8E8E8] p-3 mt-4`}>
      <View style={tw`bg-primary w-8 h-8 items-center justify-center rounded-full`}>
      <MaterialCommunityIcons name="bank-outline" size={24} color="white" />
      </View>
      <View style={tw`gap-1`}>
        <TextPrimary font='semi_bold' size={16}>
        0023456789
        </TextPrimary>
        <TextPrimary>
        Kredi Money Microfinance Bank LTD
        </TextPrimary>
      </View>
    </View>
  )
}

export default AccountBrief

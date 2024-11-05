import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import PageContainer from '../ui/PageContainer'
import TextPrimary from '../ui/texts/text'
import tw from '../lib/tailwind'
import ImageComp from '../ui/ImageComp'
import icons from '../utils/constants/icons'
import images from '../utils/constants/images'
import Header from '../ui/texts/header'
import AntDesign from "@expo/vector-icons/AntDesign";
import PrimaryButton from '../ui/PrimaryButton'
import AccountBrief from '../ui/AccountBrief'
import RecentTransaction from '../features/Transactions/RecentTransaction'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation.types';

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen:FC<Props> = ({navigation}) => {
  const [showBalance, setShowBalance] = useState<boolean>(true);

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <PageContainer>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw``}>
          <TextPrimary style={tw`text-gray`}>
            Welcome back
          </TextPrimary>
          <TextPrimary lineHeight={24} size={20} font='semi_bold'>
            Merilek Ventures 👋
          </TextPrimary>
        </View>
        <View style={tw` border border-[#E8E8E8] h-[40px] w-[40px] rounded-full items-center justify-center`}>
          <ImageComp size={20} image={icons.bell} />
        </View>
      </View>

      <ImageBackground resizeMode='cover' source={images.home_pattern} style={tw`h-[168px] w-full rounded-lg overflow-hidden mt-7 `}>
        <View style={tw`px-4 py-5 h-full justify-between`}>
          <View style={tw`gap-2`}>
            <TextPrimary style={tw`text-white `}>
              Account Balance
            </TextPrimary>
            <View style={tw`flex-row items-center gap-3`}>
              {showBalance ? <Header lineHeight={33} size={28} color='white' font='bold'>
                ₦120,000.00
              </Header> : <Header lineHeight={33} size={28} color='white' font='bold' style={tw`mt-2`}>****</Header>}
              <TouchableOpacity onPress={toggleShowBalance}>
                <AntDesign
                  name={showBalance ? "eye" : "eyeo"}
                  size={22}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>

          <PrimaryButton onPress={() => navigation.navigate("SelectBankScreen")} size={14} style={tw`h-[40px] mt-auto`}>Send money</PrimaryButton>
        </View>
      </ImageBackground>
      <AccountBrief/>
      <RecentTransaction/>

    </PageContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
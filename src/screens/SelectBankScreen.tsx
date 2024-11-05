import React, { FC } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PageContainer from '../ui/PageContainer';
import BackArrow from '../ui/BackArrow';
import tw from '../lib/tailwind';
import Header from '../ui/texts/header';
import TextPrimary from '../ui/texts/text';
import PrimaryButton from '../ui/PrimaryButton';
import InputText from '../ui/inputs/InputText';
import images from '../utils/constants/images';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation.types';

type Props = StackScreenProps<RootStackParamList, 'SelectBankScreen'>;

const SelectBankScreen:FC<Props> = ({navigation}) => {


  return (
    <PageContainer >
      <View style={tw`flex-row items-center justify-between`}>
        <BackArrow onPress={() => navigation.goBack()}/>
        <Header font='semi_bold'>Send Money</Header>
        <View />
      </View>

      <View style={tw` mt-8 gap-4`}>
        <View style={tw`flex-row items-center bg-[#F4F4F4] rounded-lg h-[54px] px-3 gap-3`}>
            <Image source={images.bank} resizeMode='cover' style={tw`h-6 w-6 rounded-full`} />
            <TextPrimary size={14}>Guaranty Trust Bank</TextPrimary>
            <SimpleLineIcons name="arrow-down" size={18} color="black" style={tw`ml-auto`}/>
        </View>
        <InputText placeholder='Account No' keyboardType='numeric'/>
        <InputText placeholder='Narration'/>
      </View>

      <PrimaryButton style={tw`mt-auto mb-10`} size={16} onPress={() => navigation.navigate("SendMoneyScreen")}>
      Continue
      </PrimaryButton>
    </PageContainer>
  );
};


export default SelectBankScreen;

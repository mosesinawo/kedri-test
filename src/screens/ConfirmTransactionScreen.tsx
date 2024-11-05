import React, { FC } from 'react';
import { View} from 'react-native';
import PinInput from '../ui/PinInput';
import PageContainer from '../ui/PageContainer';
import BackArrow from '../ui/BackArrow';
import tw from '../lib/tailwind';
import Header from '../ui/texts/header';
import TextPrimary from '../ui/texts/text';
import PrimaryButton from '../ui/PrimaryButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation.types';

type Props = StackScreenProps<RootStackParamList, 'ConfirmTransactionScreen'>;


const ConfirmTransactionScreen:FC<Props> = ({navigation}) => {


  return (
    <PageContainer >
      <View style={tw`flex-row items-center justify-between`}>
      <BackArrow onPress={() => navigation.goBack()}/>
        <Header font='semi_bold'>Confirm Transaction</Header>
        <View />
      </View>

      <TextPrimary lineHeight={22} style={tw`mt-8`} color='#6B6B6B' size={16}>
        To confirm your transfer of <TextPrimary lineHeight={22} size={16}>₦20,000</TextPrimary> to
        <TextPrimary lineHeight={22} size={16}> Olalekan Daramola (GTbank - 8078268937)</TextPrimary>, please enter your 4-digit PIN.
      </TextPrimary>
      <View style={tw`items-center mt-8`}>
        <PinInput />
      </View>

      <PrimaryButton style={tw`mt-auto mb-10`} onPress={()=> navigation.navigate("SuccessScreen")} size={16} >
        Confirm Transaction
      </PrimaryButton>
    </PageContainer>
  );
};


export default ConfirmTransactionScreen;

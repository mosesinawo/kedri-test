import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import PinInput from '../ui/PinInput';
import PageContainer from '../ui/PageContainer';
import BackArrow from '../ui/BackArrow';
import tw from '../lib/tailwind';
import Header from '../ui/texts/header';
import TextPrimary from '../ui/texts/text';
import PrimaryButton from '../ui/PrimaryButton';
import images from '../utils/constants/images';
import { height } from '../utils/constants';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation.types';

type Props = StackScreenProps<RootStackParamList, 'SendMoneyScreen'>;


const ConfirmTransactionScreen = () => {


    return (
        <PageContainer >

            <View style={tw`items-center px-5 gap-5 mt-${height * 0.04}`}>
                <Image source={images.checkbox} style={tw`w-[124.5px] h-[124.5px]`} />
                <Header font='semi_bold'>Transaction Completed</Header>

                <TextPrimary lineHeight={16} style={tw` text-center`} color='#6B6B6B' >
                    You have successfully processed a transfer of <TextPrimary lineHeight={16} font='bold' >₦10,00</TextPrimary> to {" "}
                     <TextPrimary lineHeight={16} >Olalekan Daramola (GTbank - 8078268937)</TextPrimary>
                </TextPrimary>

            </View>


            <PrimaryButton style={tw`mt-auto mb-10`} size={16} >
                Complete
            </PrimaryButton>
        </PageContainer>
    );
};

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   padding: 20,
    //   backgroundColor: '#fff',
    // },

});

export default ConfirmTransactionScreen;

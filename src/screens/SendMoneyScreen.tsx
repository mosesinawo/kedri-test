import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PrimaryButton from '../ui/PrimaryButton';
import TextPrimary from '../ui/texts/text';
import tw from '../lib/tailwind';
import Header from '../ui/texts/header';
import PageContainer from '../ui/PageContainer';
import BackArrow from '../ui/BackArrow';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation.types';

type Props = StackScreenProps<RootStackParamList, 'SendMoneyScreen'>;

const SendMoneyScreen:FC<Props> = ({navigation}) => {
  const [amount, setAmount] = useState('');


  const formatAmount = (value: string) => {
    if (!value) return '0';
    return new Intl.NumberFormat('en-NG', { style: 'decimal' }).format(parseFloat(value));
  };

  const handlePress = (value: string) => {
    if (value === '.' && amount.includes('.')) return;
    if (value === '0' && amount === '') return;

    setAmount((prev) => prev + value);
  };

  const handleBackspace = () => {
    setAmount((prev) => prev.slice(0, -1));
  };

  const handleSendMoney = () => {
    console.log("Sending Money:", amount);
  };


  return (
    <PageContainer >
      <View style={tw`flex-row items-center justify-between`}>
        <BackArrow onPress={() => navigation.goBack()}/>
        <Header font='semi_bold'>Send Money</Header>
        <View />
      </View>

      <View style={[styles.amountContainer, tw`mt-10`]}>
        <TextPrimary size={16} color='#333333' style={tw``} >Enter Amount</TextPrimary>
        <TextPrimary lineHeight={48} font='semi_bold' style={tw`mt-2`} size={40} >₦{formatAmount(amount)}</TextPrimary>
        <TextPrimary style={tw`text-gray mt-2`}>Your total balance: ₦100,000</TextPrimary>
      </View>


      <View style={[styles.keypad, tw`mt-10`]}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'].map((num) => (
          <TouchableOpacity key={num} style={styles.key} onPress={() => handlePress(num)}>
            <TextPrimary font='semi_bold' size={19}>{num}</TextPrimary>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.key} onPress={handleBackspace}>
          <Text style={styles.keyText}>⌫</Text>
        </TouchableOpacity>
      </View>

      <PrimaryButton onPress={() => navigation.navigate("ConfirmTransactionScreen")} style={tw``} >
        Send Money
      </PrimaryButton>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  enterText: {
    fontSize: 16,
    color: '#1a73e8',
    marginBottom: 10,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  balanceText: {
    fontSize: 14,
    color: '#888888',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 20,
  },
  key: {
    width: '30%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // backgroundColor: '#F0F0F0',
    marginVertical: 10,
  },
  keyText: {
    fontSize: 24,
    color: '#000000',
  },
  sendButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4583E',
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SendMoneyScreen;

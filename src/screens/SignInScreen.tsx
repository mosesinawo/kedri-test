import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import tw from '../lib/tailwind'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../utils/constants/images'
import Header from '../ui/texts/header'
import InputText from '../ui/inputs/InputText'
import PageContainer from '../ui/PageContainer'
import TextPrimary from '../ui/texts/text'
import PrimaryButton from '../ui/PrimaryButton'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation.types';

type Props = StackScreenProps<RootStackParamList, 'SignInScreen'>;

const SignIn:FC<Props> = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [disable, setDisable] = useState(true)

  useEffect(() => {
    setDisable(email === '' || password === '')
  }, [email, password])

  return (
    <PageContainer style={tw`flex-1 `}>
      <View style={tw`flex-1 pb-8`}>
        <View style={tw`items-center mt-6`}>
          <Image source={images.logo} resizeMode='contain' style={tw`w-[141px]`} />
          <Header font='bold'>
            Welcome back!👋
          </Header>
        </View>
        <View style={tw`mt-5 gap-5`}>
          <InputText value={email} onChangeText={(text) => setEmail(text)} placeholder="Email address" />
          <InputText value={password} onChangeText={(text) => setPassword(text)} placeholder="Password" type='password' />
          <TextPrimary style={tw`text-primary ml-auto`} font='medium'>Forgot Password</TextPrimary>
          <PrimaryButton onPress={() => navigation.navigate("HomeScreen")} disabled={disable}>Login</PrimaryButton>
        </View>
      <TextPrimary  style={tw`mt-auto text-center`}>Don't have an account ? <TextPrimary font='semi_bold' style={tw`text-primary`}>Register</TextPrimary></TextPrimary>

      </View>
    </PageContainer>
  )
}

export default SignIn


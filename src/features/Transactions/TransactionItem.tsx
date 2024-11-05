import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import ImageComp from '../../ui/ImageComp'
import icons from '../../utils/constants/icons'
import tw from '../../lib/tailwind'
import TextPrimary from '../../ui/texts/text'
import { TransactionItemProps } from './transaction.type'

interface TransactionItemType{
    item:TransactionItemProps
}

const TransactionItem:FC<TransactionItemType> = ({item}) => {
    const {type, amount} = item
    return (
        <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center gap-4`}>
                <View style={tw`bg-light_blue w-12 h-12 rounded-full justify-center items-center `}>
                    <ImageComp image={type === "withdrawal" ? icons.arrow_up : icons.arrow_down} size={24} />
                </View>
                <View>
                    <TextPrimary font='medium'>Olalekan Daramola</TextPrimary>
                    <TextPrimary style={tw`text-gray`}>Success</TextPrimary>
                </View>
            </View>

            <View style={tw`items-end`}>
                <TextPrimary font='medium' style={tw`${type === "withdrawal" ? "text-red" : "text-green"}`}>
                    {type === "withdrawal" ? "-" : "+"}₦{amount}</TextPrimary>
                <TextPrimary style={tw`text-gray`}>12.30pm</TextPrimary>
            </View>
        </View>
    )
}

export default TransactionItem

const styles = StyleSheet.create({})
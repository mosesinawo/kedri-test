import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextPrimary from '../../ui/texts/text'
import Header from '../../ui/texts/header'
import TransactionItem from './TransactionItem'
import tw from '../../lib/tailwind'
import { TransactionItemProps } from './transaction.type'

const RecentTransaction = () => {
    const dummyTransaction: TransactionItemProps[] = [
        {
            type: 'deposit',
            amount: '10,000.00',
            recipient: 'John Doe'
        },
        {
            type: 'withdrawal',
            amount: '5,000.00',
            recipient: 'Jane Doe'
        },
        {
            type: 'transfer',
            amount: '3,000.00',
            recipient: 'Emma Johnson'
        }
    ]
    return (
        <View style={tw`mt-5 flex-1`}>
            <Header size={16}>Recent Transactions</Header>
            <View style={tw`mt-2`}>

                <FlatList
                    data={[...dummyTransaction, ...dummyTransaction, ...dummyTransaction]}
                    renderItem={({ item }) => (
                        <View style={tw`my-3`}>
                            <TransactionItem item={item} />
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}
                />
            </View>
        </View>
    )
}

export default RecentTransaction

const styles = StyleSheet.create({})
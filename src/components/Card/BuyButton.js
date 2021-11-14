import React from 'react'
import { View, Text } from 'react-native'

const BuyButton = ({modelo}) => {
    return (
        <View style={{backgroundColor: 'red', padding: 10, borderRadius:5, width: '40%', marginVertical:15}}>
            <Text style={{color: 'white', fontSize:18, fontWeight: '700'}}>{modelo}</Text>
        </View>
    )
}

export default BuyButton

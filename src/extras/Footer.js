import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SIZES, COLORS } from '../constants';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Badge, } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { footerScreens } from '../data/data';




const Footer = () => {


console.log(footerScreens);
    return (
        <View style={{
            //top: '147%', //SIZES.height - 3 * (0.09 * SIZES.height), //607.8171444920132,
            height: 0.08 * SIZES.height,
            width: SIZES.width,
            backgroundColor: COLORS.secondary,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        }} >
     

            <FlatList
                horizontal
                // contentContainerStyle={{ justifyContent: 'space-between', paddingVertical: 20, }}
                data={footerScreens}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id} renderItem={({ item }) => {
                    return (
                        <View style={{
                            height: 0.07 * SIZES.height, width: 80,
                            backgroundColor: COLORS.white,
                            marginHorizontal: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,

                        }}>
                            < MaterialCommunityIcons name={item.name} size={40} />
                            <Text style={{ top: -10, fontSize: 20, fontWeight: 'bold' }} >{item.name}-{item.id}</Text>
                        </View>
                    )
                }} />


        </View >
    )
}

export default Footer;
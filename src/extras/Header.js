import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { SIZES, COLORS } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Badge, } from 'react-native-elements'
import { useRoute } from '@react-navigation/native';




const Header = ({ navigation }) => {




    const route = useRoute();
    console.log(SIZES.width);
    return (
        <View style={{
            height: 0.08 * SIZES.height,
            width: SIZES.width,
            backgroundColor: route.name == 'Home' ? COLORS.primary : COLORS.secondary,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        }} >
            <View style={{ left: 15 }} >
                <MaterialCommunityIcons name="menu"
                    size={0.05 * SIZES.height}
                    color={route.name == 'Home' ? COLORS.black : COLORS.white}
                />
            </View>

            <View style={{
                height: 0.07 * SIZES.height,
                width: 0.07 * SIZES.height,
                backgroundColor: 'white',
                borderRadius: 0.07 * SIZES.height / 2,
                left: -10


            }} >
                <Image
                    style={{ flex: 1, height: '100%', width: '100%' }}
                    source={require('../assests/ala-logo.png')}
                />
            </View>
            <View style={{ left: -30 }} >
                <Text style={{ fontSize: 14, color: route.name == 'Home' ? COLORS.black : COLORS.white }} >Welcome</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: route.name == 'Home' ? COLORS.black : COLORS.white }} >Thimma!</Text>
            </View>
            <View style={{ alignItems: 'center', paddingVertical: 18, left: 10 }} >
                <MaterialIcons
                    name="groups"
                    color={route.name == 'Home' ? COLORS.black : COLORS.white}
                    size={0.1 * SIZES.height / 2}
                />
                <Text style={{ fontWeight: 'bold', color: route.name == 'Home' ? COLORS.black : COLORS.white }} >My Group</Text>
            </View>
            <View style={{ right: 15 }} >
                <Badge status="success"
                    size="large" containerStyle={{ position: 'absolute', top: -6, right: -8 }}
                    value={10}
                />
                <EvilIcons
                    name="bell"
                    color={route.name == 'Home' ? COLORS.black : COLORS.white}
                    size={0.1 * SIZES.height / 2}
                />




            </View>




        </View >
    )
}

export default Header;
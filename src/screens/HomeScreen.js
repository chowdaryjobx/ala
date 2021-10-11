import React from 'react';
import { View, Text, Button, ScrollView, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../extras/Header';
import Footer from '../extras/Footer';
import { COLORS, SIZES } from '../constants/index';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { footerScreens } from '../data/data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Badge, } from 'react-native-elements'
import DataContext from '../context/DataContext';

import { data } from '../data/data';


const HomeScreen = ({ navigation, route }) => {

    const { cartItems } = React.useContext(DataContext)
    let items = data;


    return (
        <View style={{ flex: 1 }} >
            <View style={{
                height: 0.08 * SIZES.height,
                width: SIZES.width,
                backgroundColor: 'green',
            }} >
                {/* Header */}
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
                            value={cartItems.length}
                        />
                        <EvilIcons
                            name="cart"
                            color={route.name == 'Home' ? COLORS.black : COLORS.white}
                            size={0.1 * SIZES.height / 2}
                            onPress={() => { navigation.navigate('Cart') }}
                        />




                    </View>




                </View >

                {/* End of Header */}
            </View>
            <View style={{

                height: 0.07 * SIZES.height,
                width: SIZES.width,
                elevation: 5,
                shadowColor: '#9e9898',
                justifyContent: 'center',
                alignItems: 'center',

            }} >
                <View style={{
                    height: 0.05 * SIZES.height,
                    width: 0.8 * SIZES.width,
                    backgroundColor: '#E5E5E5',
                    borderRadius: 50,
                    borderWidth: 1, borderColor: COLORS.black,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }} >
                    <EvilIcons name="search" size={40} />
                    <TextInput placeholder="Search" style={{ flex: 1, }} />
                </View>
            </View>
            <ScrollView style={{ flex: 7.5, }} nestedScrollEnabled >
                <View style={{ flex: 1, padding: 0 }}>
                    <View style={{ height: 0.4 * SIZES.height, backgroundColor: '#ffff', paddingHorizontal: 10 }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.black }} >New Arrivals</Text>
                        <View style={{ height: 0.35 * SIZES.height, width: '100%', backgroundColor: 'gray' }} >
                            <FlatList
                                data={items}
                                keyExtractor={item => item.id}
                                numColumns={2}
                                maxToRenderPerBatch={4}
                                nestedScrollEnabled
                                renderItem={({ item }) => {
                                    return (

                                        <View style={{
                                            height: 0.35 * SIZES.height / 2,
                                            width: '48%',
                                            margin: 3,

                                        }} >
                                            <TouchableOpacity onPress={() => { navigation.navigate('Detail', { item }) }} >
                                                <Image
                                                    style={{
                                                        height: '100%',
                                                        width: '100%',
                                                        borderRadius: 5, resizeMode: 'stretch',
                                                    }}
                                                    source={{
                                                        uri: item.image,
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>


                                    )
                                }}
                            />
                        </View>

                    </View>
                    <View style={{ padding: 5 }} >
                        <View style={{
                            height: 0.2 * SIZES.height,
                            width: '100%',
                            backgroundColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center', borderRadius: 10
                        }} >
                            <Text style={{
                                fontSize: 60,
                                color: COLORS.black,
                                fontWeight: 'bold'
                            }} >ALA</Text>
                            <Text style={{ fontSize: 20, color: COLORS.black }} >Make shopping easy at ala</Text>
                        </View>
                    </View>
                    <View style={{ height: 0.3 * SIZES.height, backgroundColor: '#ffff', paddingHorizontal: 10 }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.black }} >Trending</Text>
                        <View style={{

                            height: 0.2 * SIZES.height,
                            width: '100%',
                            backgroundColor: '#EEEEEE',
                            justifyContent: 'center',
                            // alignItems: 'center',
                        }} >
                            <FlatList
                                data={items}
                                keyExtractor={item => item.id}
                                horizontal

                                renderItem={({ item }) => {
                                    return (
                                        <View style={{
                                            height: 0.15 * SIZES.height,
                                            width: 200,
                                            margin: 3,
                                            top: 15,
                                            padding: 10
                                        }} >
                                            <Image
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    borderRadius: 5, resizeMode: 'stretch'
                                                }}
                                                source={{
                                                    uri: item.image,
                                                }}
                                            />
                                        </View>
                                    )
                                }}
                            />
                        </View>

                    </View>


                </View>
            </ScrollView>
            <View >
                {/* Footer */}

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
                                <TouchableOpacity onPress={() => navigation.navigate('Cart')} >
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
                                </TouchableOpacity>

                            )
                        }} />


                </View >

                {/* end of footer */}
            </View>



        </View>
    )
}


export default HomeScreen
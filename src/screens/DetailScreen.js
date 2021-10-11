import React from 'react';
import { View, Text, Button, ScrollView, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../extras/Header';
import Footer from '../extras/Footer';
import { COLORS, SIZES } from '../constants/index';
import { footerScreens } from '../data/data';

import { Rating, AirbnbRating } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Badge, } from 'react-native-elements'
import DataContext from '../context/DataContext';




const DetailScreen = ({ navigation, route }) => {

    const { cartItems,addToCart } = React.useContext(DataContext)
    const { item } = route.params;



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

            <ScrollView style={{ flex: 7.5, backgroundColor: '#eeee' }} >
                <View style={{ height: 0.6 * SIZES.height, backgroundColor: COLORS.white, padding: 10 }} >
                    <View style={{ height: 0.6 * SIZES.height, width: '100%', }} >
                        <View style={{ height: 0.05 * SIZES.height, justifyContent: 'space-between', flexDirection: 'row' }} >
                            <Text style={{ fontSize: 20, color: COLORS.black, fontWeight: 'bold' }} >Cook Once Dinner Fix </Text>

                        </View>
                        <View style={{
                            height: 0.25 * SIZES.height,
                            width: '100%',
                            borderWidth: 1,
                            borderRadius: 15,
                            elevation: 10,
                            shadowOffset: '#9e9898'
                        }} >
                            <Image
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    resizeMode: 'stretch',
                                    borderRadius: 3
                                }}
                                source={{
                                    uri: item.image,
                                }}
                            />
                        </View>
                        <View style={{ height: 0.3 * SIZES.height, flexDirection: 'row', justifyContent: 'space-between', }} >
                            <View>
                                <Text style={{ fontSize: 14, color: COLORS.black, fontWeight: 'bold' }} >Cook Once Dinner Fix: Quick and Exciting Ways to Transform Tonight's Dinner into Tomorrow's Feast</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                    <Text style={{ fontSize: 25, color: COLORS.black, fontWeight: 'bold' }} >M.R.P : RS 250</Text>
                                    <TouchableOpacity onPress={() => { alert("getting link") }}>
                                        <EvilIcons name="share-google" size={50} color="#16ABB1" />
                                    </TouchableOpacity>

                                </View>

                                <Text style={{ fontSize: 15, color: 'red', }} > * Shipping Charges apply</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                    <Text style={{ fontSize: 20, color: COLORS.black, fontWeight: 'bold' }} >Rating : </Text>
                                    <TouchableOpacity onPress={() => { addToCart(item) }} >
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            backgroundColor: COLORS.primary,
                                            height: 50,
                                            borderRadius: 10
                                        }} >
                                            <View>
                                                <Text style={{ fontSize: 20 }} >Add to cart</Text>
                                            </View>

                                            <EvilIcons name="cart" size={30} />

                                        </View>
                                    </TouchableOpacity>

                                </View>

                                <Rating
                                    number={5}
                                    type='star'
                                    ratingCount={5}
                                    imageSize={40}
                                // showRating
                                //   onFinishRating={this.ratingCompleted}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{ height: 0.2 * SIZES.height, backgroundColor: COLORS.white, padding: 10, marginTop: 20 }} >
                    <View style={{ height: 0.4 * SIZES.height, width: '100%', }} >
                        <View style={{ height: 0.05 * SIZES.height, justifyContent: 'space-between', flexDirection: 'row' }} >
                            <Text style={{ fontSize: 25, color: COLORS.black, fontWeight: 'bold' }} >Colour Name : yellow </Text>
                        </View>


                    </View>
                </View>
                <View style={{ height: 0.3 * SIZES.height, backgroundColor: COLORS.white, padding: 10, marginTop: 20 }} >
                    <View style={{ height: 0.4 * SIZES.height, width: '100%', }} >
                        <View style={{ height: 0.05 * SIZES.height, justifyContent: 'space-between', flexDirection: 'row' }} >
                            <Text style={{ fontSize: 25, color: COLORS.black, fontWeight: 'bold' }} >Product Description</Text>
                        </View>


                    </View>
                </View>
                <View style={{ height: 0.6 * SIZES.height, backgroundColor: COLORS.white, padding: 10, marginTop: 20 }} >
                    <View style={{ height: 0.4 * SIZES.height, width: '100%', }} >
                        <View style={{ height: 0.05 * SIZES.height, justifyContent: 'space-between', flexDirection: 'row' }} >
                            <Text style={{ fontSize: 25, color: COLORS.black, fontWeight: 'bold' }} >Rating Reviews</Text>
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


export default DetailScreen
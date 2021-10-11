import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { COLORS, SIZES } from '../constants';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SignUpScreen = ({ navigation }) => {


    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    return (
        <View style={{
            flex: 1, backgroundColor: COLORS.primary,
            alignItems: 'center'
        }}>


            <View style={{ top: 0.1 * SIZES.height }} >
                <Text style={{ alignSelf: 'center', fontSize: 0.04 * SIZES.height, color: COLORS.white }} >Lets get Started</Text>
                <Text style={{ alignSelf: 'center', fontSize: 0.025 * SIZES.height }} >Create an Account to get all features</Text>
            </View>
            <View style={{ top: 0.15 * SIZES.height }} >
                <View style={{
                    height: 0.06 * SIZES.height,
                    width: 0.8 * SIZES.width,
                    borderRadius: 0.06 * SIZES.height / 2,
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingHorizontal: 20,
                    marginTop: 10
                }} >

                    <MaterialCommunityIcons
                        name="account"
                        color='black'
                        size={0.07 * SIZES.height / 2}
                    />
                    <TextInput placeholder="Email / Mobile No." style={{ paddingHorizontal: 20,flex:1 }} />
                </View>
                <View style={{
                    height: 0.06 * SIZES.height,
                    width: 0.8 * SIZES.width,
                    borderRadius: 0.06 * SIZES.height / 2,
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingHorizontal: 20,
                    marginTop: 0.07 * SIZES.height / 2
                }} >

                    <AntDesign
                        name="mail"
                        color='black'
                        size={0.07 * SIZES.height / 2}
                    />
                    <TextInput placeholder="Email." style={{ paddingHorizontal: 20,flex:1 }} />
                </View>
                <View style={{
                    height: 0.06 * SIZES.height,
                    width: 0.8 * SIZES.width,
                    borderRadius: 0.06 * SIZES.height / 2,
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingHorizontal: 20,
                    marginTop: 0.07 * SIZES.height / 2
                }} >

                    <AntDesign
                        name="phone"
                        color='black'
                        size={0.07 * SIZES.height / 2}
                    />
                    <TextInput placeholder=" Mobile No." style={{ paddingHorizontal: 20,flex:1 }} />
                </View>
                <View style={{
                    height: 0.06 * SIZES.height,
                    width: 0.8 * SIZES.width,
                    borderRadius: 0.06 * SIZES.height / 2,
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingHorizontal: 20,
                    marginTop: 0.07 * SIZES.height / 2
                }} >

                    <MaterialCommunityIcons
                        name="account-arrow-right"
                        color='black'
                        size={0.07 * SIZES.height / 2}
                    />
                    <TextInput placeholder="Have a referal code ?(optional)" style={{ paddingHorizontal: 20,flex:1 }} />
                </View>
            </View>
            <View style={{
                top: 0.18 * SIZES.height,
                width: 0.9 * SIZES.width,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingHorizontal: 20,

            }} >
                <View>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                </View>
                <View style={{ marginLeft: 10 }} >

                    <Text>I Aggree to the ALA terms of Services and Privacy  Policy</Text>

                </View>



            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Header') }} >
                <View style={{
                    top: 0.22 * SIZES.height,
                    width: 0.7 * SIZES.width,
                    height: 0.06 * SIZES.height,
                    backgroundColor: COLORS.black,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 20,
                    borderRadius: 0.01 * SIZES.height

                }} >

                    <Text style={{ color: COLORS.white, fontSize: 0.03 * SIZES.height }} >Sign Up</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={{ top: 0.25 * SIZES.height, }} >
                <Text style={{ fontSize: 0.023 * SIZES.height, color: COLORS.black }} > Already User ?</Text>
            </TouchableOpacity>




            {/* absolute position */}
            <View style={{
                flex: 1,
                // backgroundColor: 'transparent',
                position: 'absolute',
                height: SIZES.height,
                width: SIZES.width
            }} >
                <View style={{
                    left: '10%',
                    top: '-2%',
                    height: 47,
                    width: 47,
                    borderRadius: 47 / 2,
                    backgroundColor: '#FB6C2F'
                }} >

                </View>
                <View style={{
                    left: '75%',
                    top: -140,
                    height: 214,
                    width: 214,
                    borderRadius: 214 / 2,
                    backgroundColor: '#009CF3'
                }} >

                </View>
                <View style={{
                    left: '85%',
                    top: '45%',
                    height: 47,
                    width: 47,
                    borderRadius: 47 / 2,
                    backgroundColor: '#C8FCFF'
                }} >

                </View>
                <View style={{
                    left: '-15%',
                    top: '45%',
                    height: 156,
                    width: 156,
                    borderRadius: 156 / 2,
                    backgroundColor: '#005B5F'
                }} >

                </View>
            </View>

            {/* End of absolute position */}


        </View>
    )
}


export default SignUpScreen
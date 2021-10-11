import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from '../constants';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const LoginScreen = ({ navigation }) => {

    return (
        <View style={{
            flex: 1, backgroundColor: COLORS.primary,
            alignItems: 'center'
        }}>


            <View style={{ top: 0.2 * SIZES.height }} >
                <View style={{
                    height: 150,
                    width: 150,
                    backgroundColor: 'white',
                    borderRadius: 150 / 2,
                    elevation: 10,
                    shadowColor: '#9e9898'

                }} >
                    <Image
                       style={{flex:1,height:'100%',width:'100%'}}
                        source={require('../assests/ala-logo.png')}
                    />
                </View>
            </View>
            <View style={{ top: 0.25 * SIZES.height }} >
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

            </View>

            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} >
                <View style={{
                    top: 0.3 * SIZES.height,
                    width: 0.7 * SIZES.width,
                    height: 0.06 * SIZES.height,
                    backgroundColor: COLORS.black,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 20,
                    borderRadius: 0.01 * SIZES.height

                }} >

                    <Text style={{ color: COLORS.white, fontSize: 0.03 * SIZES.height }} >Login</Text>
                </View>
            </TouchableOpacity>

            <View style={{
                top: 0.33 * SIZES.height,
                width: 0.7 * SIZES.width,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }} >
                <Text style={{ fontSize: 0.023 * SIZES.height, color: COLORS.black }} >Don't have account ? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} >
                    <Text style={{ fontSize: 0.023 * SIZES.height, color: COLORS.white }} > Sign Up</Text>

                </TouchableOpacity>
            </View>


            {/* absolute position */}
            <View style={{
                flex: 1,
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


export default LoginScreen
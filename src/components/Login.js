/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, Image } from 'react-native';
export default class Login extends React.Component {

  loginEvent() {
    console.warn('You are clicked login !!!');
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
          <View style={styles.form_container}>
            {/* Logo section */}
            {/* <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/KYD-light.png')}
                style={{ width: 50, height: 50, }} />
            </View> */}
            {/* Form section */}
            <Text style={styles.labelStyle}>Username</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={{ flex: 1 }}
                onChangeText={(text) => console.log('text --> ', text)}
                underlineColorAndroid="transparent"
              />
              <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/ic_person.png' }} style={styles.ImageStyle} />
            </View>
            <Text style={styles.labelStyle}>Password</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={{ flex: 1 }}
                onChangeText={(text) => console.log('text --> ', text)}
                underlineColorAndroid="transparent"
              />
              <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/ic_person.png' }} style={styles.ImageStyle} />
            </View>
            <Text style={styles.forgetPsw}>Forget Password</Text>
            {/* Login Button section */}
            <View style={{alignItems: 'center'}}>
            <View style={styles.btnContainer}>
              <Text style={styles.loginStyle} onPress={this.loginEvent}>Log In</Text>
            </View>  
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form_container: {
    flex: 1,
    justifyContent: 'center',
  },
  labelStyle: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10
  },
  forgetPsw: {
    color: '#FFF',
    fontSize: 13,
    alignSelf: 'flex-end',
    marginRight: 15,
    paddingBottom: 10
  },
  inputStyle: {
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10
  },
  btnLogin: {
    marginTop: 10,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 15,
    marginRight:15
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 10,
    margin: 10
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btnContainer:{
   // width: 70,
    padding: 10, 
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  loginStyle: { 
    color: '#00bbff', 
    fontWeight: 'bold', 
    fontSize: 18 
  }
});

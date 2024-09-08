import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/UniversalStyles';
import { text } from '../Theme/Text';

const Splash = ({navigation}:any) => {
    const [show,setShow] = useState(false);

    useEffect(()=>{
      setTimeout(() => {
        setShow(true)
      }, 2000);
    },[]);

  return (
    <View style={[styles.container,{justifyContent:"center"}]}>
      <ImageBackground 
        source={require("../Assests/topleft.png")} 
        style={styles.topLeftImage}
      />
      <ImageBackground 
        source={require("../Assests/backgroundtop.png")} 
        style={styles.topBackgroundImage}
      />
      
      <Image 
        source={require('../Assests/logo.png')} 
        style={styles.splashLogo} 
      />
      {show ? (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.greyBold}>{text.splashText}</Text>
          </View>
          <TouchableOpacity style={styles.startButton} 
          onPress={()=>{navigation.navigate("SignUp")}}>
            <Text style={styles.signText}>{text.letstart}</Text>
          </TouchableOpacity>
          <Text style={[styles.greyText,{alignSelf:"center",}]}>{text.haveanAcc} 
            <Text style={[styles.blackText,{textDecorationLine:"underline"}]} 
          onPress={()=>{navigation.navigate("Signin")}}>{text.signIn}</Text></Text>
        </>
      ) : null}
      {show ? null : (
        <ImageBackground 
          source={require("../Assests/bottom.png")} 
          style={styles.bottomImage}
        />
      )}
    </View>
  );
};


export default Splash;

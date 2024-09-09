import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import api from '../ApiService';
import Phone from 'react-native-vector-icons/Feather';
import Password from 'react-native-vector-icons/Feather';
import Eye from 'react-native-vector-icons/Ionicons';
import Google from 'react-native-vector-icons/AntDesign';
import Apple from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { styles } from '../Theme/UniversalStyles';
import { text } from '../Theme/Text';
import { Alert } from 'react-native';

const Signin = ({navigation}:any) => {
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [showtext,setShowText] = useState(false);
  const [phoneErr,setPhoneErr] = useState('');
  const [passErr,setPassErr] = useState('');

  useEffect(()=>{
     setPhone('');
     setPassword('');
  },[]);

  const postData = async () => {
    try {
      const response = await api.post('/login', {
        phone: phone,
        password: password,
      });
      console.log('Response:', response.data);
      if (response.data.status === true) {
        const getdata = response.data;
        console.log('name........:',getdata.data?.name);
        navigation.navigate('HomeScreen',{name:getdata?.data?.name});
      }    
    } catch (error) {
        console.error('Unexpected Error:', error);
        Alert.alert("Invalid Phone or Password ");
      }
    }

    const Validate = () =>{
      if(!phone){
        setPhoneErr("Please Enter Phone");
      }
      else{
        setPhoneErr("");
      }
      if(!password){
        setPassErr("Please Enter Password")
      }
      else{
        setPassErr("");
      }
      if(!phone || !password){
         return false
      }
      else{
         postData();
      }
    }
  

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled" automaticallyAdjustContentInsets={true} 
    contentContainerStyle={{flexGrow:1}}>
    <View style={{paddingHorizontal:15}}>
      <Image source={require('../Assests/logo.png')} style={styles.logo} />  
      <Text style={styles.signText}>{text.signIn}</Text>
      <Text style={[styles.greyText,{width:'60%'}]}>{text.welcomeBack}</Text>
      <Text style={styles.blackText}>{text.phone}</Text>
      <View style={styles.textInput}>
      <Phone name='phone' color={'#808080'} size={20} style={{width:"10%"}}></Phone>
        <TextInput
        placeholder='0000000000'
        placeholderTextColor={"#808080"}
         style={styles.input}
          keyboardType='number-pad'
          maxLength={10}
          autoCapitalize="none"
          autoCorrect={false}
        value={phone}
        onChangeText={(text)=>{
          setPhone(text)
        }}
        ></TextInput>
      </View>

      {phoneErr && <Text style={styles.errorText}>{phoneErr}</Text>}

      <Text style={styles.blackText}>{text.password}</Text>
      <View style={styles.textInput}>
        <Password name='lock' size={20} color={"#808080"} style={{width:"10%"}}/>
        <TextInput
        placeholder='password'
        placeholderTextColor={"#808080"}
        style={styles.input}
        secureTextEntry={showtext?false:true}
        value={password}
        onChangeText={(text)=>{
          setPassword(text)
        }}
        ></TextInput>
       <Eye name='eye-outline' color={"#808080"} size={20} onPress={()=>setShowText(!showtext)}/>  
      </View>

      {passErr && <Text style={styles.errorText}>{passErr}</Text>}

      <Text style={[styles.blackText,{textDecorationLine:"underline",alignSelf:"flex-end"}]}>{text.forgetPassword}</Text>


      <TouchableOpacity style={styles.blueContainer} 
      onPress={Validate}>
        <Text style={styles.signText}>{text.signIn}</Text>
     </TouchableOpacity>

     <View style={styles.lineContainer}>
      <View style={styles.line}></View>
      <Text style={styles.greyText}>or</Text>
      <View style={styles.line}></View>
     </View>

    <View style={styles.iconContainer}>
     <View style={styles.circle}>
      <Google name='google' color={"black"} size={17}/>  
     </View>
     <View style={styles.circle}>
      <Apple name='apple1' color={"black"} size={17}/>  
     </View>
     </View>

     <Text style={{color:"black",alignSelf:"center"}}>{text.dontHaveAcc}{''}
      <Text style={[styles.blackText,{textDecorationLine:"underline"}]} onPress={()=>{
      navigation.push("SignUp")
     }}>{text.signUp}</Text></Text>

     <Text style={[styles.greyText,{marginVertical:20,width:"80%",alignSelf:"center"}]}>{text.terms}</Text>

    </View>
    <View style={{justifyContent:"flex-end"}}>
     <ImageBackground  source={require("../Assests/bottomleft.png")} 
     style={styles.signImg}></ImageBackground> 
    </View> 
    </ScrollView>
  );
};

export default Signin;

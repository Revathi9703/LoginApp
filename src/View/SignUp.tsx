import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import api from '../ApiService';
import { styles } from '../Theme/UniversalStyles';
import Phone from 'react-native-vector-icons/Feather';
import Password from 'react-native-vector-icons/Feather';
import Eye from 'react-native-vector-icons/Ionicons';
import Profile from 'react-native-vector-icons/Ionicons';
import Square from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { text } from '../Theme/Text';

const SignUp = ({navigation}:any) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [check,setCheck] = useState(false);
  const [showtext,setShowText] = useState(false);
  const [phoneErr,setPhoneErr] = useState('');
  const [nameErr,setNameErr] = useState("");
  const [passErr,setPassErr] = useState('');

  useEffect(()=>{
   setUsername('');
   setPhone('');
   setPassword('');
  },[]);


  const Validate = () =>{
    if(!username){
    setNameErr("Please Enter Name")
    }
    else{
      setNameErr('');
    }
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
    if(check == false){
      Alert.alert("Please Agree the Terms & Conditions")
    }
    else{

    }
    if(!phone || !password ||!username||check == false){
       return false
    }
    else{
       postData();
    }
  }

  const postData = async () => {
    try {
        const response = await api.post('/register', {
            phone: phone,
            password: password,
            name: username               
        });
        console.log('Response:', response.data);
        if (response.data.status === true) {
            navigation.navigate('HomeScreen', { name: username });
        } else {
            console.error('Registration failed:', response.data.message || 'No message provided');
        }
    } catch (error:any) {
        if (error.response) {
            console.error('Unexpected Error:',error.response.data );
            Alert.alert("Invalid data or Data Already Exists");
        }
    }
}


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled" automaticallyAdjustContentInsets={true} 
    contentContainerStyle={{flexGrow:1}}>
    <View style={{paddingHorizontal:15}}>
       <Image source={require('../Assests/logo.png')} style={styles.logo} />   
       <Text style={styles.signText}>{text.signUp}</Text>
      <Text style={[styles.greyText,{width:'70%'}]}>{text.fillin}</Text>

      <Text  style={styles.blackText}>{text.name}</Text>
      <View style={styles.textInput}>
       <Profile name='person-outline' color={'#808080'} size={20} style={{width:"10%"}}></Profile>
        <TextInput
        placeholder='Enter your name'
        placeholderTextColor={"#808080"}
         style={styles.input}
        value={username}
        onChangeText={(text)=>{
          setUsername(text)
        }}
        ></TextInput>
      </View>
      {nameErr && <Text style={styles.errorText}>{nameErr}</Text>}
       
      <Text  style={styles.blackText}>{text.phone}</Text>
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


      <Text  style={styles.blackText}>{text.password}</Text>
      <View style={styles.textInput}>
        <Password name='lock' size={20} color={"#808080"} style={{width:"10%"}}/>
        <TextInput
        placeholder='password'
        placeholderTextColor={"#808080"}
        style={styles.input }
        value={password}
        secureTextEntry={showtext?false:true}
        onChangeText={(text)=>{
          setPassword(text)
        }}
        ></TextInput>
       <Eye name='eye-outline' color={"#808080"} size={20} onPress={()=>setShowText(!showtext)} />  
      </View>
      {passErr && <Text style={styles.errorText}>{passErr}</Text>}

     <TouchableOpacity style={styles.agreeContainer}
      onPress={()=>{
        setCheck(!check)}}>
     
   {check ?
   <CheckBox name='checkbox' color={"#808080"} size={20}/> :
   <Square name='square-o' color={"#808080"} size={20}/> 
   }
      <Text style={styles.blackText}>{text.agree}<Text style={[styles.greyText,{textDecorationLine:"underline"}]}>{text.conditionText}</Text></Text>
      </TouchableOpacity>  


      <TouchableOpacity style={styles.blueContainer} 
      onPress={Validate}>
        <Text style={styles.signText}>{text.signUp}</Text>
     </TouchableOpacity>

     <Text style={{color:"black",alignSelf:"center",marginVertical:20,}}>{text.haveanAcc}<Text style={[styles.blackText,{textDecorationLine:"underline", zIndex: 1, }]} 
     onPress={()=>navigation.push("Signin")}>{text.signIn}</Text></Text>
     
     <Text style={[styles.greyText,{marginVertical:43,width:"80%",alignSelf:"center",textAlign:"center"}]}>
      {text.terms}</Text>

    </View>
    <View style={{justifyContent:"flex-end"}}>
     <ImageBackground  source={require("../Assests/bottomleft.png")} 
     style={{height:150,width:150,alignSelf:'flex-end',
      position:"absolute", transform: [{ rotate: '270deg' }] }}></ImageBackground> 







    </View>
    </ScrollView>
  );
};


export default SignUp;

import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
    },
    logo: {
     height: 200,
      width: '60%',
      resizeMode:"contain",
      alignSelf:'center',
    },
    signText:{
      color:"black", 
      fontSize:20,
      fontWeight:"bold",
      marginVertical:10
    },
    greyText:{
      color:"#808080", 
      fontSize:15,
      fontWeight:"500",
      marginVertical:10
    },
    blackText:{
      color:"black", 
      fontSize:15,
      fontWeight:"500",
      marginVertical:10
    },
    line:{
      borderColor:"#A3CFFF", 
      borderWidth:0.5,
      height:1,
      width:"30%"
    },
    greyBold:{
      color:"#808080", 
      fontSize:18,
      fontWeight:"600",
      marginVertical:50
    },
    topLeftImage: {
      height:180,
      width: 160,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    topBackgroundImage: {
      height: 140,
      width: 140,
      alignSelf: 'flex-end',
      position:"absolute",
      top: 0,
      right: 0,
        },
    textContainer: {
      paddingHorizontal: 60,
    },
    startButton: {
      height: 50,
      borderRadius: 30,
      backgroundColor: '#A3CFFF',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    splashLogo:{
      height: 200,
      width: '80%',
      resizeMode:"contain",
      alignSelf:'center',
    },
    bottomImage: {
      height: 200,
      width: 200,
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: [{ rotate: '360deg' }], 
    },
    errorText:{
      color: 'red',
      textAlign: 'left',
      marginVertical: 5,
      fontSize:12,
      fontWeight:"500"
    },
    textInput:{
      height:50,
      borderColor:'#808080',
      borderRadius:8,
      borderWidth:1,
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal:6
    },
    input:{
      width:"80%",
      color:"#808080",
      fontSize:13, 
      fontWeight:"600"
    },
    blueContainer:{
      height:50,
      borderRadius:30,
      backgroundColor:"#A3CFFF",
      alignItems:"center"
    },
    lineContainer:{
      flexDirection:"row",
      alignItems:"center",
      columnGap:6,
      justifyContent:"center"
    },
    iconContainer:{
      flexDirection:"row",
      alignItems:"center",
      columnGap:15,
      justifyContent:"center",
      marginVertical:15
    },
    circle:{
      height:35,
      width:35,
      borderRadius:25,
      borderWidth:1,
      borderColor:"black",
      justifyContent:"center",
      alignItems:"center"
    },
    signImg:{
      height:150,
      width:150,
      alignSelf:'flex-start',
      position:"absolute"
    },
    agreeContainer:{
      flexDirection:'row',
      alignItems:"center",
      columnGap:6,
      marginVertical:15
    }
  });
  
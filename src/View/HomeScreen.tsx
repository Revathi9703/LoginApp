import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../Theme/UniversalStyles"
import { text } from "../Theme/Text"

const HomeScreen = ({navigation,route}:any) =>{
    return(
        <View style={{justifyContent:"space-around",height:'80%',marginHorizontal:20}}>
        <Image source={require('../Assests/logo.png')} style={styles.logo} />   
         <Text style={[styles.signText,{alignSelf:"center"}]}>{text.welcome} {route?.params?.name}</Text>

         <TouchableOpacity style={styles.blueContainer} 
      onPress={()=>{navigation.push("Signin")}}>
        <Text style={styles.signText}>{text.logout}</Text>
     </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
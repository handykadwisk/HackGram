import { View, Text, Button, TouchableOpacity,Image } from 'react-native'
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import images from '../res/images';
// import Registration from './LoginScreen1'

export default function Registration({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image
          source={images.logoBlack}
          style={{height: 70, resizeMode: 'contain'}}
        />
      </View>
      <View style={Styles.userNameContainer}>
        <TextInput
          style={Styles.userNameInput}
          placeholder="Email"
        />
      </View>
      <View style={Styles.passwordContainer}>
        <TextInput style={Styles.passwordInput} placeholder="Password" />
      </View>
      <View style={Styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={Styles.forgotPasswordText}>forgotPassword</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={Styles.loginContainer}
        onPress={() => _signInAsync}>
        <Text style={Styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{color: 'gray', fontSize: 12}}>Don't have account</Text>
        <TouchableOpacity>
          <Text style={Styles.forgotPasswordText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },



  inputGroup: {
    gap: 5,
  },
});

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
  },
  userNameContainer: {
    borderColor: '#ececec',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  userNameInput: {
    marginStart: 10,
  },
  passwordContainer: {
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: '#fafafa',
    marginBottom: 20,
  },
  passwordInput: {marginStart: 10},
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,
  },
  forgotPasswordText: {
    color: '#0088f8',
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
  },
});
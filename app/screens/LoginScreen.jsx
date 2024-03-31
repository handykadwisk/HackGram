import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import images from '../res/images';
import { gql,useMutation, useQuery } from '@apollo/client';
import { useContext, useState } from 'react';
import * as SecureStore from 'expo-secure-store'
import AuthContext from '../context/AuthContext';
// import LoginScreen from './LoginScreen1'
const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            accessToken
        }
    }
`

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsSignedIn } = useContext(AuthContext);
  const [login, { error, loading, data }] = useMutation(LOGIN, {
    onCompleted: async (data) => {
      await SecureStore.setItemAsync('accessToken', data?.login.accessToken);
      setIsSignedIn(true);
    },
  });

  async function handleSubmit() {
    try {
      await login({ variables: { username, password } });
    } catch (err) {
      console.log(err.message, "<<<<<< ini login");
      alert(err.message);
    }
  }
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image
          source={images.logoBlack}
          style={{ height: 70, resizeMode: 'contain' }}
        />
      </View>
      <View style={Styles.userNameContainer}>
        <TextInput
          onChangeText={setUsername}
          value={username}
          style={Styles.userNameInput}
          placeholder="Username"
        />
      </View>
      <View style={Styles.passwordContainer}>
        <TextInput style={Styles.passwordInput} placeholder="Password" secureTextEntry={true} onChangeText={setPassword}
          value={password} />
      </View>
      <View style={Styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={Styles.forgotPasswordText}>forgotPassword</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={Styles.loginContainer}
        onPress={handleSubmit}
        // onPress={() => setIsSignedIn(true)}
        >
        <Text style={Styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'gray', fontSize: 12 }}>Don't have account</Text>
        <TouchableOpacity>
          <Text style={Styles.forgotPasswordText} onPress={() => navigation.navigate("Regis")}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}


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
  passwordInput: { marginStart: 10 },
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
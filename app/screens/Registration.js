import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import images from '../res/images';
import { ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
  mutation Register($name: String!, $username: String!, $email: String!, $password: String!) {
  register(name: $name, username: $username, email: $email, password: $password) {
    _id
    name
    username
    email
    password
  }
}
`;

export default function Registration({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [register, { data, loading, error }] = useMutation(REGISTER);

  async function handleSubmit() {
    try {
      await register({ variables: { username, password, email, name } });
      navigation.navigate("Login");
    } catch (err) {
      console.log(err.message, "<<<<<< ini Regis");
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
          style={Styles.userNameInput}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={Styles.passwordContainer}>
        <TextInput style={Styles.passwordInput}
          placeholder="Full Name"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={Styles.passwordContainer}>
        <TextInput
          style={Styles.userNameInput}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={Styles.passwordContainer}>
        <TextInput style={Styles.passwordInput}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={Styles.loginContainer}
        onPress={handleSubmit}
        >
        <Text style={Styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'gray', fontSize: 14 }}>By signing your agree to our team, Data Policy and Cookies</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'black', fontSize: 12 }}>Have an account</Text>
        <TouchableOpacity>
          <Text style={Styles.forgotPasswordText} onPress={() => navigation.navigate("Login")}>Log in</Text>
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
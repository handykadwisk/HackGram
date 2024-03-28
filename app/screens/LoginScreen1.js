// import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { ActivityIndicator } from "react-native";
import { Button, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

// const LOGIN_MUTATION = gql`
//   mutation Mutation($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       accessToken
//     }
//   }
// `;

function LoginScreen({ navigation }) {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

//   async function handleSubmit() {
//     try {
//       await login({ variables: { email, password } });
//       navigation.navigate("Home");
//     } catch (err) {
//       alert("Invalid Credentials");
//     }
//   }

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color={Colors.primary} />
//       </View>
//     );
//   }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <View style={{ padding: 10, gap: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Welcome</Text>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} onChange={setEmail} value={email} />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              onChange={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <Text>Forgotten Password?</Text>
          <View>
            {/* <Button title="Log In" onPress={handleSubmit} /> */}
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: "#000" }}>
            <Text>
              OR
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
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
export default LoginScreen;
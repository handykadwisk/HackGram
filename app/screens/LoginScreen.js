import { View, Text, Button, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
// import LoginScreen from './LoginScreen1'

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <View style={{ padding: 10, gap: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, textAlign:"center", color:"#405DE6"}}>Instagram</Text>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input}
            //  onChange={setEmail} 
            //  value={email}
              />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              // onChange={setPassword}
              // value={password}
              secureTextEntry={true}
            />
          </View>
          <Text>Forgotten Password?</Text>
          <View>
            <TouchableOpacity
              title="Log In"
              // onPress={handleSubmit}
              style={{
                backgroundColor: "#0339F9",
                padding: 10,
                borderRadius: 5,
                marginEnd: 20,
                marginStart: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#FFF",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: "#000" }}>
            <Text>
              OR
            </Text>
          </View>
        </View>
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

const colors = {
  primary: '#405DE6', // Biru
  secondary: '#FD1D1D', // Merah
  background: '#FAFAFA', // Putih
  text: '#262626', // Hitam
  placeholder: '#A8A8A8', // Abu-abu
  button: '#0095F6', // Biru muda
  border: '#DBDBDB', // Abumuda
};
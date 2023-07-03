import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { auth, db } from "../../constants/firebase";
import { doc, setDoc } from "firebase/firestore";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

// import AsyncStorage from "@react-native-async-storage/async-storage";
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        "Detalles invalidos",
        "Por favor ingresa todas las credenciales",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials._tokenResponse.email;
        const uid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${uid}`), {
          email: user,
          phone: phone,
        });
      }
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaViewRegister}>
      <KeyboardAvoidingView>
        <View style={styles.keyboardAvoidingViewRegister}>
          <Text style={styles.textRegister}>Registrar</Text>
          <Text style={styles.textRegisterAccount}>Crear una cuenta</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={styles.textfieldsRegister}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Ingresa un correo"
              placeholderTextColor={"black"}
              style={styles.textInputRegister}/>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.textfieldsRegister}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"black"}
              style={styles.textInputRegister}/>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.textfieldsRegister}>Telefono</Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Ingresa un telefono"
              placeholderTextColor={"black"}
              style={styles.textInputRegister}/>
          </View>
        </View>

        <Pressable onPress={register} style={styles.pressableRegister}>
          <Text style={styles.textRegisterButton}>Registrar</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={styles.textAllReadyAccount}>Ya tienes una cuenta? Sign-In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

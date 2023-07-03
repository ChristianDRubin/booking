import {
    KeyboardAvoidingView,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { auth } from "../../constants/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {styles} from './styles';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
    // console.log(userCredentials.user.stsTokenManager.accessToken);
    // AsyncStorage.setItem(
    //   "tokenUser",
    //   userCredentials.user.stsTokenManager.accessToken
    // );
  
    // useEffect(() => {
    //   const getData = async () => {
    //     try {
    //       const jsonValue = await AsyncStorage.getItem("tokenUser");
    //       console.log("jsonValue");
    //       if (jsonValue) {
    //         navigation.replace("Main");
    //       }
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };
    //   getData();
    // }, [token]);
  
   const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      // ...
    })
    .catch((err) => {
      if (
      err.code === AuthErrorCodes.INVALID_PASSWORD ||
      err.code === AuthErrorCodes.USER_DELETED
    ) {
      setError("The email address or password is incorrect");
    } else {
      console.log(err.code);
      alert(err.code);
    }
    });
   }
  
    useEffect(() => {
      try {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            navigation.replace("Main");
          }
        });
        return unsubscribe;
      } catch (e) {
        console.log(e);
      }
    }, []);
  
    return (
      <SafeAreaView style={styles.safeAreaViewLogin}>
        <KeyboardAvoidingView>
          <View style={styles.keyboardAvoidingViewLogin}>
            <Text style={styles.textSignIn}>Sign-In</Text>
            <Text style={styles.textSignInAccount}>Sign-In a tu cuenta</Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <View>
              <Text style={styles.textfieldsLogin}>Email</Text>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="enter your email id"
                placeholderTextColor={"black"}
                style={styles.textInputLogin}/>
            </View>

            <View style={{ marginTop: 15 }}>
              <Text style={styles.textfieldsLogin}>Password</Text>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"black"}
                style={styles.textInputLogin}/>
            </View>
          </View>
{/* console.log("LOGIN") */}
          <Pressable onPress={login} style={styles.pressableLogin}>
            <Text style={styles.textLoginButton}>Login</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 20 }}>
            <Text style={styles.textLoginButton}>No tienes cuenta? Sign-up</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  export default LoginScreen;
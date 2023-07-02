import {
    Alert,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {styles} from './styles';

const UserScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "User Details",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#003580",
          height: 110,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
      });
    }, []);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
  
    const finalStep = () => {
      if (!firstName || !lastName || !email || !phoneNo) {
        Alert.alert(
          "Invalide Details",
          "Please ente all the fields",
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
      if (firstName && lastName && email && phoneNo) {
        navigation.navigate("Confirmation", {
          oldPrice: route.params.oldPrice,
          newPrice: route.params.newPrice,
          name: route.params.name,
          children: route.params.children,
          adults: route.params.adults,
          rating: route.params.rating,
          startDate: route.params.startDate,
          endDate: route.params.endDate,
        });
      }
    };
    return (
      <>
        <View style={{ padding: 20 }}>
          <View style={styles.viewInput}>
            <Text>First Name</Text>
            <TextInput
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={styles.textInput}
            />
          </View>

          <View style={styles.viewInput}>
            <Text>Last Name</Text>
            <TextInput
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              style={styles.textInput}
            />
          </View>

          <View style={styles.viewInput}>
            <Text>Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
          </View>

          <View style={styles.viewInput}>
            <Text>Phone no</Text>
            <TextInput
              value={phoneNo}
              onChangeText={(text) => setPhoneNo(text)}
              style={styles.textInput}
            />
          </View>
        </View>

        <Pressable style={styles.pressableText}>
          <View>
            <View style={styles.pressableView}>
              <Text style={styles.textOldPricePressable}>
                {route.params.oldPrice * route.params.adults}
              </Text>
              <Text style={{ fontSize: 20 }}>
                Rs {route.params.newPrice * route.params.adults}
              </Text>
            </View>
            <Text>
              You Saved {route.params.oldPrice - route.params.newPrice} rupees
            </Text>
          </View>
          <Pressable onPress={finalStep} style={styles.textFinalSteps}>
            <Text style={styles.textFinalStep}>Final Step</Text>
          </Pressable>
        </Pressable>
      </>
    );
  };
  export default UserScreen;
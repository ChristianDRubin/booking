import { Pressable, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { auth, db } from "../../constants/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";
import { addPlace } from "../../store/SavedReducer";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
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
  const dispatch = useDispatch();
  const uid = auth.currentUser.uid;
  const confirmBooking = async () => {
    dispatch(addPlace(route.params));

    await setDoc(
      doc(db, "users", `${uid}`),
      {
        bookingDetails: { ...route.params },
      },
      {
        merge: true,
      }
    );

    navigation.navigate("Main");
  };
  return (
    <View>
      <Pressable style={styles.pressableHeaderConfirmation}>
        <View style={styles.pressableViewConfirmation}>
          <View>
            <Text style={styles.pressableViewTextConfirmation}>
              {route.params.name}
            </Text>
            <View style={style.pressableViewTextConfirmation2}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View style={styles.pressableView2}>
                <Text style={styles.geniusText}>Genius Level</Text>
              </View>
            </View>
          </View>

          <View style={pressableViewTextTravelSustentable}>
            <Text style={styles.pressableTextTravelSustentable}>
              Travel sustainable
            </Text>
          </View>
        </View>

        <View style={styles.viewStats}>
          <View>
            <Text style={styles.pressableTextCheckInOut}>Check-In</Text>
            <Text style={styles.pressableTextDates}>
              {route.params.startDate}
            </Text>
          </View>

          <View>
            <Text style={styles.pressableTextCheckInOut}>Check-Out</Text>
            <Text style={styles.pressableTextDates}>
              {route.params.endDate}
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={styles.pressableTextCheckInOut}>Rooms and Guests</Text>
          <Text style={styles.pressableTextDates}>
            {" "}{route.params.rooms} rooms {route.params.adults} adults{" "} {route.params.children} children
          </Text>
        </View>

        <Pressable onPress={confirmBooking} style={styles.ButtonConfirmation}>
          <Text style={styles.ButtonTextConfirmation}>Book Now</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

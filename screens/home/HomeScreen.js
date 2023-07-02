import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import DatePicker from "react-native-date-ranges";
import { Header } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedDates, setSelectedDates] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
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
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  console.log(route.params);

  const searchPlaces = (place) => {
    if(!route.params || !selectedDates){
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }

    if(route.params && selectedDates){
      navigation.navigate("Places",{
        rooms:rooms,
        adults:adults,
        children:children,
        selectedDates:selectedDates,
        place:place
      })
    }
  };

  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View style={styles.scrollViewView}>
            {/* Destination */}
            <Pressable
              onPress={() => navigation.navigate("Search")}
              style={styles.destination}
            >
              <Ionicons name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={
                  route?.params ? route.params.input : "Buscar tu destino"
                }
              />
            </Pressable>

            {/* Selected Dates */}
            <Pressable style={styles.selectedDates}>
              <Ionicons name="calendar-sharp" size={24} color="black" />
              <DatePicker
                style={styles.datepicker}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Seleccionar fechas"}
                mode={"range"}
              />
            </Pressable>

            {/* Rooms and Guests */}
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
              style={styles.roomsAndGuests}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder={` ${rooms} Habitación • ${adults} adultos • ${children} niños`}
              />
            </Pressable>

            {/* Search Button */}
            <Pressable
              onPress={() => searchPlaces(route?.params.input)}
              style={styles.searchButton}
            >
              <Text style={styles.textButton}>Buscar</Text>
            </Pressable>
          </View>
          <Text style={styles.bannerText}>Viajá más y gastá menos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.bannerPressable}>
              <Text style={styles.bannerTextPressables}>Genius</Text>
              <Text style={styles.bannerTextPressables}>
                Your are ate genius level one in our loyalty program
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bannerPressable3er}>
              <Text style={styles.bannerTextPressables3er}>Genius</Text>
              <Text style={styles.bannerTextPressables3er}>
                Estas en el nivel 1 de Genius, nuestro programa de fidelización
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bannerPressable3er}>
              <Text style={styles.bannerTextPressables3er}>
                Descuentos del 10%
              </Text>
              <Text style={styles.bannerTextPressables3er}>
                Disfruta de descuentos en hospedajes de todo el mundo
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={styles.modalButton}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Seleccionar habitación y huespedes" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={styles.modalContentHeader}>
          <View style={styles.modalContentView}>
            <Text style={styles.modalContentTextHeader}>Habitaciones</Text>
            <Pressable style={styles.modalContentPresableMinusHeader}>
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={styles.modalContentPresableMinus}
              >
                <Text style={styles.modalContentPresableTextMinus}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.modalContentPresableTextMinus}>
                  {rooms}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={styles.modalContentPresableMinus}
              >
                <Text style={styles.modalContentPresableTextMinus}>+</Text>
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.modalContentView}>
            <Text style={styles.modalContentTextHeader}>Adultos</Text>
            <Pressable style={styles.modalContentPresableMinusHeader}>
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={styles.modalContentPresableMinus}
              >
                <Text style={styles.modalContentPresableTextMinus}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.modalContentPresableTextMinus}>
                  {adults}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={styles.modalContentPresableMinus}
              >
                <Text style={styles.modalContentPresableTextMinus}>+</Text>
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.modalContentView}>
            <Text style={styles.modalContentTextHeader}>Niños</Text>
            <Pressable style={styles.modalContentPresableMinusHeader}>
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={styles.modalContentPresableMinus}
              >
                <Text style={styles.modalContentPresableTextMinus}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.modalContentPresableTextMinus}>
                  {children}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={styles.modalContentPresableMinus}
              >
                <Text style={styles.modalContentPresableTextMinus}>+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Amenities } from "../../components";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from './styles';

const PropertyInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
    
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: `${route.params.name}`,
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
    
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <Pressable style={styles.pressableProperty}>{route.params.photos.slice(0, 5).map((photo, index) => (
                <View key={index} style={{ margin: 6 }}>
                  <Image style={styles.imageStyles} source={{ uri: photo.image }}/>
                </View>
              ))}
              <Pressable style={styles.pressableMostrarMas}>
                <Text style={styles.textMostrarMas}>Mostrar mas</Text>
              </Pressable>
            </Pressable>

            <View style={styles.viewBottom}>
              <View>
                <Text style={styles.pressableViewTextConfirmation}>
                  {route.params.name}
                </Text>
                <View style={styles.pressableViewTextConfirmation2}>
                  <MaterialIcons name="stars" size={24} color="green" />
                  <Text>{route.params.rating}</Text>
                  <View style={styles.pressableView2}>
                    <Text style={styles.geniusText}>Genius Level</Text>
                  </View>
                </View>
              </View>

              <View style={styles.pressableViewTextPropertyInfo}>
                <Text style={styles.pressableTextTravelSustentable}>Viaje sustentable</Text>
              </View>
            </View>

            <Text style={styles.textComodidades}/>
            <Text style={styles.textPrecioPorNoche}>
              Precio por una noche y {route.params.adults} adultos
            </Text>
            <View style={styles.pressableViewTextConfirmation2}>
              <Text style={styles.textOldPrices}>
                {route.params.oldPrice * route.params.adults}
              </Text>
              <Text style={{ fontSize: 20 }}>
                $ {route.params.newPrice * route.params.adults}
              </Text>
            </View>
            <View style={styles.textComodidades2}>
              <Text style={styles.discountText}>{offerPrice.toFixed(0)} % OFF</Text>
            </View>

            <Text style={styles.textComodidades}/>
            <View style={styles.viewComodidades}>
              <View>
                <Text style={styles.pressableTextCheckInOut}>Check-In</Text>
                <Text style={styles.pressableTextDates}>
                  {route.params.selectedDates.startDate}
                </Text>
              </View>

              <View>
                <Text style={styles.pressableTextCheckInOut}>Check-Out</Text>
                <Text style={styles.pressableTextDates}>
                  {route.params.selectedDates.endDate}
                </Text>
              </View>
            </View>
            <View style={{ margin: 12 }}>
              <Text style={styles.pressableTextCheckInOut}>Cuartos y huespedes</Text>
              <Text style={styles.pressableTextDates}>
                {route.params.rooms} Cuartos {route.params.adults} adultos {" "}
                {route.params.children} Niños
              </Text>
            </View>
            <Text style={styles.textComodidades}/>
            <Amenities />
            <Text style={styles.textComodidades}/>
          </ScrollView>
        </SafeAreaView>

        <Pressable onPress={() => navigation.navigate("Rooms",{
          rooms:route.params.availableRooms,
          oldPrice:route.params.oldPrice,
          newPrice:route.params.newPrice,
          name:route.params.name,
          children:route.params.children,
          adults:route.params.adults,
          rating:route.params.rating,
          startDate:route.params.selectedDates.startDate,
          endDate:route.params.selectedDates.endDate
        })}
          style={styles.ButtonConfirmation}>
          <Text style={styles.textSeleccionarDisponibilidad}>Seleccionar disponibilidad</Text>
        </Pressable>
      </>
    );
  };

  export default PropertyInfoScreen;
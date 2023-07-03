import { AntDesign, Entypo } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Amenities } from "../../components";
import { styles } from "./styles";

const RoomsScreen = () => {
  const route = useRoute();

  console.log(route.params);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Cuartos disponibles",
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

  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable style={styles.textPressableHeaderRoom} key={index}>
            <View style={styles.textViewHeaderRoom}>
              <Text style={styles.textItemName}>{item.name}</Text>
              <AntDesign name="infocirlceo" size={24} color="#007FFF" />
            </View>
            <Text style={styles.textPayProperty}>Pagar en el hospedaje</Text>
            <Text style={styles.textFreeCancellation}>
              Cancelacion disponible
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "red",
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice}
              </Text>
              <Text style={{ fontSize: 18 }}>${route.params.newPrice}</Text>
            </View>
            <Amenities />

            {selected.includes(item.name) ? (
              <Pressable style={styles.textPressableSelected}>
                <Text style={styles.textTextSelected}>SELECTED</Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={styles.textPressableSelect}
              >
                <Text style={styles.textTextSelect}>SELECT</Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          style={styles.textPressableReserve}
        >
          <Text style={styles.textTextPressableReserve}>Reserve</Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomsScreen;

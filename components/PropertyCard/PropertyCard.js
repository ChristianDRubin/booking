import { Image, Pressable, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            availableRooms: property.rooms,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
          })
        }
        style={styles.pressableNav}>
        <View>
          <Image style={styles.image} source={{ uri: property.image }} />
        </View>

        <View style={{ padding: 10 }}>
          <View style={styles.viewFavorites}>
            <Text style={styles.favoritesText}>{property.name}</Text>
            <Ionicons name="heart-outline" size={24} color="red" />
          </View>
          <View style={styles.viewStars}>
            <Ionicons name="star-outline" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View style={styles.viewGeniusLevel}>
              <Text style={styles.viewTextGeniusLevel}>Genius Level</Text>
            </View>
          </View>

          <Text style={styles.viewPrices}>{property.address.length > 50 ? property.address.substr(0, 50) : property.address}</Text>
          <Text style={styles.viewPricesNight}>Precio por una noche y {adults} adultos</Text>
          <View style={styles.viewText2}>
            <Text style={styles.viewText3}>{property.oldPrice * adults}</Text>
            <Text style={{ fontSize: 18 }}>Rs {property.newPrice * adults}</Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Cuarto de lujo</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel Cuarto : 1 cama
            </Text>
          </View>

          <View style={styles.viewText4}>
            <Text style={styles.viewText5}>Limited Time deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

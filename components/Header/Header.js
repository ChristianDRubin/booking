import { Text, TouchableOpacity, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity style={styles.headerPressable}>
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={styles.headerPressableText}>Estadias</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.headerPressable2}>
        <Ionicons name="car-outline" size={24} color="white" />
        <Text style={styles.headerPressableText}>Alquiler de autos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.headerPressable2}>
        <FontAwesome5 name="taxi" size={24} color="white" />
        <Text style={styles.headerPressableText}>Taxi</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.headerPressable2}>
        <Ionicons name="ios-airplane-outline" size={24} color="white" />
        <Text style={styles.headerPressableText}>Atracciones</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

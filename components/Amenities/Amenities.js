import { Text, View } from "react-native";

import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "Servicio al cuarto",
    },
    {
      id: "2",
      name: "Wifi",
    },
    {
      id: "3",
      name: "Cuartos familiares",
    },
    {
      id: "4",
      name: "Estacionamiento gratuito",
    },
    {
      id: "5",
      name: "Pileta",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    {
      id: "7",
      name: "Gimnasio",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "600" }}>
        Hospedajes mas populares
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {services.map((item, index) => (
          <View
            style={{
              margin: 10,
              backgroundColor: "#007FFF",
              paddingHorizontal: 11,
              paddingVertical: 5,
              borderRadius: 25,
            }}
            key={index}
          >
            <Text style={{textAlign:"center",color:"white"}}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

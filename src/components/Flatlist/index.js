import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Coordenadas({ data }) {
  return (
    <TouchableOpacity
      style={{ padding: 10, borderBottomWidth: 1, borderColor: "grey" }}
    >
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Text
          style={{
            color: "grey",
            fontSize: 17,
            width: "25%",
          }}
          adjustsFontSizeToFit
        >
          Pacote ID:
        </Text>
        <Text style={{ flexDirection: "row", width: "65%" }}>{data.id}</Text>
        <Text>12:56</Text>
      </View>
      <Text>Pendente sincronizar</Text>
    </TouchableOpacity>
  );
}

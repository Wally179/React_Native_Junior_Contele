import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
export default function ButtonRight() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Status")}
      title="Status"
    >
      <Text style={{ color: "#F2F2F2", fontSize: 16, marginRight: 10 }}>
        Status
      </Text>
    </TouchableOpacity>
  );
}

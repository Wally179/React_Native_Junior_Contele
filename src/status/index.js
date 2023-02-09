import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Coordenadas from "../components/Flatlist";
import axios from "axios";

export default function Status() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState([]);
  useEffect(() => {
    axios.get("http://192.168.15.90:8081/points/").then((response) => {
      setNumber(response.data.keys);
      for (let i = 0; i < number.length; i++) {
        valores(number[i]);
      }
    });
  }, []);

  async function valores(number) {
    await axios
      .get("http://192.168.15.90:8081/points/" + number)
      .then((response) => {
        data.push(response.data.points);
      });
  }

  return (
    <View>
      <FlatList
        style={{ marginTop: 10 }}
        contentContainerStyle={{ marginHorizontal: 10 }}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Coordenadas data={item} />}
      />
    </View>
  );
}

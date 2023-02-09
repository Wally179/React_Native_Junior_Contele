import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./style";
import * as Location from "expo-location";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import Queue from "../utils/queue/queue";

const queue = new Queue();
export default function Home() {
  //Conexão
  const [isConnected, setIsConnected] = useState(true);
  function conexão(coordenadas) {
    if (!isConnected) {
      queue.enqueue(coordenadas);
      console.log("Adicionado a fila offline");
      setCoordenadas({});
      return;
    }
    Post(coordenadas);
    console.log(coordenadas);
  }
  useEffect(() => {
    if (!queue.isEmpty() && isConnected) {
      const offflineData = queue.getQueue();
      if (Array.isArray(offflineData)) {
        offflineData.forEach((data) => {
          Post(data);
        });
      }
    }
  }, [isConnected]);

  //Localização
  const [Local, setLocaliza] = useState([{}]);
  const [coordenadas, setCoordenadas] = useState([{}]);

  async function Localizar10S() {
    setLocaliza(await Location.getCurrentPositionAsync({}));
    setCoordenadas({
      id: Math.floor(Date.now() * Math.random()).toString(36),
      latitude: Local.coords.latitude || 0,
      longitude: Local.coords.longitude || 0,
      speed: Local.coords.speed || 0,
      time: new Date().toLocaleString(),
    });

    conexão(coordenadas);
  }
  async function Localizar5S() {
    setLocaliza(await Location.getCurrentPositionAsync({}));
    setCoordenadas({
      id: Math.floor(Date.now() * Math.random()).toString(36),
      latitude: Local.coords.latitude || 0,
      longitude: Local.coords.longitude || 0,
      speed: Local.coords.speed || 0,
      time: new Date().toLocaleString(),
    });
    conexão(coordenadas);
  }
  async function Localizar3S() {
    setLocaliza(await Location.getCurrentPositionAsync({}));
    setCoordenadas({
      id: Math.floor(Date.now() * Math.random()).toString(36),
      latitude: Local.coords.latitude | 0,
      longitude: Local.coords.longitude | 0,
      speed: Local.coords.speed | 0,
      time: new Date().toLocaleString(),
    });
    conexão(coordenadas);
  }
  async function Localizar1S() {
    setLocaliza(await Location.getCurrentPositionAsync({}));
    setCoordenadas({
      id: Math.floor(Date.now() * Math.random()).toString(36),
      latitude: Local.coords.latitude || 0,
      longitude: Local.coords.longitude || 0,
      speed: Local.coords.speed || 0,
      time: new Date().toLocaleString(),
    });
    conexão(coordenadas);
  }
  //Switch
  const [isEnabled, setEnabled] = useState(false);
  const alternarSwitch = () => {
    setEnabled((previousState) => !previousState);
  };

  //Post
  async function Post(coordenadas) {
    await axios
      .post("http://192.168.15.90:8081/points/" + coordenadas.id, coordenadas)
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const removeNetInfo = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    //Permissão
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permita o acesso a localização para funcionamento");
        return;
      }
    };
    getPermissions();
    return () => removeNetInfo();
  }, []);
  return (
    <View>
      <View style={styles.top}>
        <Feather name="compass" size={60} color="#1F248C" />
        <View style={styles.TextoTop}>
          <Text style={styles.Titulo}>My GPS - Tracking</Text>
          <Text style={{ color: !isConnected ? "#E0370B" : "green" }}>
            {!isConnected ? "Offline" : "Online"}
          </Text>
        </View>
      </View>
      <View style={styles.conteudo}>
        <View style={styles.c1}>
          <Text style={{ fontSize: 18, paddingBottom: 3 }}>
            Status do serviço
          </Text>
          <Text style={{ fontSize: 15 }}>
            {!isEnabled ? "Serviço Inativo" : "Serviço Ativo"}
          </Text>
        </View>
        <Switch
          trackColor={"#CCCCCC"}
          thumbColor={!isEnabled ? "#E0370B" : "#0CF76A"}
          onValueChange={alternarSwitch}
          value={isEnabled}
          size={300}
        />
      </View>
      <Text style={{ padding: 10, fontSize: 18 }}>
        Intervalo de comunicação
      </Text>
      <View style={{ flexDirection: "row", padding: 0 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            !isEnabled ? console.log("Desativado") : Localizar10S();
          }}
        >
          <Text>10s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            !isEnabled ? console.log("Desativado") : Localizar5S();
          }}
        >
          <Text>5s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            {
              !isEnabled ? console.log("Desativado") : Localizar3S();
            }
          }}
        >
          <Text>3s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            {
              !isEnabled ? console.log("Desativado") : Localizar1S();
            }
          }}
        >
          <Text>1s</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

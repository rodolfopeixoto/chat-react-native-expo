import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import Icon from "@expo/vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";

import Messages from "../components/Messages";
import Profile from "./Profile";

const Home = (props) => {


  return (
    <LinearGradient
      colors={["#f26a50", "#f20042", "#f20045"]}
      style={styles.gradient}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Home</Text>
        <Icon name="add" color="#fff" size={30} />
      </View>
    </LinearGradient>
  );
};
export default Home;

const styles = StyleSheet.create({
  list: {
    marginTop: 300,
  },
  card: {
    marginLeft: 400,
    width: 400,
    flexDirection: "row",
  },
  gradient: {
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#FFF",
    flex: 1,
    fontSize: 24,
  },
  proContainer: {
    marginRight: -20,
    alignSelf: "center",
  },
  ops: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 500,
    backgroundColor: "#FFF",
    marginHorizontal: -20,
  },
  col: {
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 20,
    alignItems: "center",
  },
  day: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#000119",
    flex: 1,
    fontSize: 20,
  },
});

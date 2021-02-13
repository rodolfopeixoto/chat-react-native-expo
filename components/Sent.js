import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const Sent = ({ message }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#f26a50', '#F20045']}
        style={styles.gradient}
      >

      <Text style={styles.text}>{message}</Text>
      </LinearGradient>
      <Text style={styles.duration}>12:34 AM</Text>
    </View>
  );
};

export default Sent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    alignSelf: 'flex-end',
  },
  duration: {
    color: "#b6b6b6",
    fontSize: 11,
    marginTop: 5,
    fontFamily: "Montserrat_600SemiBold",
    alignSelf: 'flex-end'
  },
  gradient: {
    maxWidth: 220,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  text: {
    color: '#FFF',
    fontFamily: "Montserrat_700Bold",
  },
});

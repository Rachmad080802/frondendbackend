import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screen/index"; // Impor HomeScreen dari folder screens

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <HomeScreen /> {/* Menampilkan HomeScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F0F0",
  },
});

export default IndexScreen;

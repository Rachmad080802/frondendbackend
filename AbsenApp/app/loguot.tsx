import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const LogoutScreen = () => {
  // Proses logout (misalnya hapus session atau token)
  const handleLogout = () => {
    console.log("User logged out");
    // Setelah logout, arahkan pengguna ke halaman login
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Anda telah logout</Text>
      {/* Tombol untuk melakukan logout */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.buttonText}>Login Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

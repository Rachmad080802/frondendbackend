import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { router } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logika untuk login (misalnya validasi email dan password)
    console.log("Email:", email);
    console.log("Password:", password);
    router.push("/(tabs)"); // Arahkan ke halaman tab utama setelah login
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/oke.jpg")}
      />
      <Text style={styles.headerText}>Silahkan Login</Text>

      {/* Input Email */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#333" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Input Password */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#333" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      {/* Tombol Login */}
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Navigasi ke halaman lain */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.linkText}>Daftar Akun Baru</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text style={styles.linkText}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E3F2FD", // Warna latar belakang biru muda
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 30, // Memperbesar jarak bawah logo
  },
  headerText: {
    fontSize: 28, // Ukuran font lebih besar
    fontWeight: "600", // Font lebih tebal
    marginBottom: 30,
    color: "#1E88E5", // Warna biru cerah
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#B3E5FC", // Warna biru muda untuk border
    borderRadius: 10, // Menambahkan border-radius lebih besar
    paddingHorizontal: 15,
    marginBottom: 20,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12, // Memperbesar padding untuk kenyamanan mengetik
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#1E88E5", // Warna biru lebih cerah
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10, // Tombol dengan sudut lebih bulat
    marginTop: 20, // Memberikan jarak antar tombol
    shadowColor: "#000", // Menambahkan bayangan pada tombol
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Memberikan efek elevasi pada tombol
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18, // Ukuran font lebih besar
    fontWeight: "600", // Font lebih tebal
    textAlign: "center",
  },
  linkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#1E88E5", // Warna biru pada link
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: "underline", // Menambahkan garis bawah pada link
  },
});

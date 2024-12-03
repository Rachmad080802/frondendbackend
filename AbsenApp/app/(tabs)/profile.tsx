import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  userData: any; // Menyimpan data yang dikirim dari AbsenPerpusScreen
};

const ProfileScreen = ({ userData }: Props) => {
  return (
    <View style={styles.container}>
      {/* Foto Profil */}
      <Image
        source={require("../../assets/images/oke.jpg")}
        style={styles.profileImage}
      />
      
      {/* Nama Pengguna */}
      <Text style={styles.userName}>{userData?.idPengguna || "Nama Pengguna"}</Text>
      
      {/* Data Absensi */}
      <Text style={styles.infoText}>Tanggal Absen: {userData?.tanggalAbsen || "Belum Absen"}</Text>
      <Text style={styles.infoText}>Waktu Masuk: {userData?.waktuMasuk || "Belum Absen"}</Text>
      <Text style={styles.infoText}>Waktu Keluar: {userData?.waktuKeluar || "Belum Absen"}</Text>
      <Text style={styles.infoText}>Catatan: {userData?.catatan || "Tidak Ada"}</Text>
      <Text style={styles.infoText}>Judul Buku: {userData?.judulBuku || "Tidak Ada"}</Text>
      <Text style={styles.infoText}>Tanggal Pinjam: {userData?.tanggalPinjam || "Tidak Ada"}</Text>
      <Text style={styles.infoText}>Tanggal Kembali: {userData?.tanggalKembali || "Tidak Ada"}</Text>
      
      {/* Tombol Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: "#FF4C4C",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";

type Props = {
  onSubmit: (data: any) => void; // Callback untuk mengirim data ke ProfileScreen
};

const AbsenPerpusScreen = (props: Props) => {
  const [idPengguna, setIdPengguna] = useState("");
  const [tanggalAbsen, setTanggalAbsen] = useState("");
  const [waktuMasuk, setWaktuMasuk] = useState("");
  const [waktuKeluar, setWaktuKeluar] = useState("");
  const [catatan, setCatatan] = useState("");
  const [judulBuku, setJudulBuku] = useState("");
  const [tanggalPinjam, setTanggalPinjam] = useState("");
  const [tanggalKembali, setTanggalKembali] = useState("");

  const handleAbsenMasuk = () => {
    const currentTime = new Date().toLocaleString();
    setWaktuMasuk(currentTime);
    
    // Menyusun data untuk diserahkan ke ProfileScreen
    const absensiData = {
      idPengguna,
      tanggalAbsen: currentTime.split(',')[0], // Tanggal absen
      waktuMasuk: currentTime,
      waktuKeluar,
      catatan,
      judulBuku,
      tanggalPinjam,
      tanggalKembali
    };
    
    if (props.onSubmit) {
      props.onSubmit(absensiData); // Mengirim data ke ProfileScreen
    } else {
      console.warn("onSubmit function is not defined!");
    }

    // Menampilkan pesan konfirmasi
    Alert.alert("Absen Perpustakaan", `Anda telah absen masuk pada ${currentTime}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi Perpustakaan</Text>
      
      <TextInput
        style={styles.input}
        placeholder="ID Pengguna"
        value={idPengguna}
        onChangeText={setIdPengguna}
      />
      <TextInput
        style={styles.input}
        placeholder="Tanggal Absen"
        value={tanggalAbsen}
        onChangeText={setTanggalAbsen}
      />
      <TextInput
        style={styles.input}
        placeholder="Waktu Masuk"
        value={waktuMasuk}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Waktu Keluar"
        value={waktuKeluar}
        onChangeText={setWaktuKeluar}
      />
      <TextInput
        style={styles.input}
        placeholder="Catatan"
        value={catatan}
        onChangeText={setCatatan}
      />
      <TextInput
        style={styles.input}
        placeholder="Judul Buku"
        value={judulBuku}
        onChangeText={setJudulBuku}
      />
      <TextInput
        style={styles.input}
        placeholder="Tanggal Pinjam"
        value={tanggalPinjam}
        onChangeText={setTanggalPinjam}
      />
      <TextInput
        style={styles.input}
        placeholder="Tanggal Kembali"
        value={tanggalKembali}
        onChangeText={setTanggalKembali}
      />

      <TouchableOpacity style={styles.absenButton} onPress={handleAbsenMasuk}>
        <Text style={styles.buttonText}>Absen Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 30,
    color: "#388E3C",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  absenButton: {
    backgroundColor: "#388E3C",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default AbsenPerpusScreen;

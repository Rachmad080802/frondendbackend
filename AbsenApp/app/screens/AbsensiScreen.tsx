import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AbsensiScreen = () => {
  const [id, setId] = useState('');
  const [tanggalAbsen, setTanggalAbsen] = useState('');
  const [waktuMasuk, setWaktuMasuk] = useState('');
  const [waktuKeluar, setWaktuKeluar] = useState('');
  const [catatan, setCatatan] = useState('');
  const [judulBuku, setJudulBuku] = useState('');
  const [tanggalPinjam, setTanggalPinjam] = useState('');
  const [tanggalKembali, setTanggalKembali] = useState('');

  const handleSubmit = () => {
    // Simpan absensi
    console.log({
      id,
      tanggalAbsen,
      waktuMasuk,
      waktuKeluar,
      catatan,
      judulBuku,
      tanggalPinjam,
      tanggalKembali
    });
  };

  return (
    <View>
      <Text>Absensi Pengguna</Text>
      <TextInput
        placeholder="ID Pengguna"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        placeholder="Tanggal Absen"
        value={tanggalAbsen}
        onChangeText={setTanggalAbsen}
      />
      <TextInput
        placeholder="Waktu Masuk"
        value={waktuMasuk}
        onChangeText={setWaktuMasuk}
      />
      <TextInput
        placeholder="Waktu Keluar"
        value={waktuKeluar}
        onChangeText={setWaktuKeluar}
      />
      <TextInput
        placeholder="Catatan"
        value={catatan}
        onChangeText={setCatatan}
      />
      <TextInput
        placeholder="Judul Buku"
        value={judulBuku}
        onChangeText={setJudulBuku}
      />
      <TextInput
        placeholder="Tanggal Pinjam"
        value={tanggalPinjam}
        onChangeText={setTanggalPinjam}
      />
      <TextInput
        placeholder="Tanggal Kembali"
        value={tanggalKembali}
        onChangeText={setTanggalKembali}
      />
      <Button title="Submit Absensi" onPress={handleSubmit} />
    </View>
  );
};

export default AbsensiScreen;

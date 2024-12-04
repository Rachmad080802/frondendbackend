import React from 'react';
import { View, TextInput, Button } from 'react-native';

const AbsensiForm = ({ onSubmit }: any) => {
  return (
    <View>
      <TextInput placeholder="ID Pengguna" />
      <TextInput placeholder="Tanggal Absen" />
      <TextInput placeholder="Waktu Masuk" />
      <TextInput placeholder="Waktu Keluar" />
      <TextInput placeholder="Catatan" />
      <TextInput placeholder="Judul Buku" />
      <TextInput placeholder="Tanggal Pinjam" />
      <TextInput placeholder="Tanggal Kembali" />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

export default AbsensiForm;

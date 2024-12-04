import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Profil Pengguna</Text>
      <Button
        title="Absen"
        onPress={() => navigation.navigate('Absensi')}
      />
      <Button
        title="Riwayat Absensi"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  );
};

export default ProfileScreen;

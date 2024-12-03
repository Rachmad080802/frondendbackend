// app/tabs/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Dashboard = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Perpus</Text>
      <Button title="Check Absensi" onPress={() => navigation.navigate('Absensi')} />
      <Button title="Lihat Riwayat Absensi" onPress={() => navigation.navigate('History')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Dashboard;

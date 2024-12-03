import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Tab untuk halaman Absen */}
      <Tabs.Screen
        name="absen"
        options={{
          title: "Absen",
        }}
      />
      
      {/* Tab untuk halaman History */}
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
        }}
      />
    </Tabs>
  );
}

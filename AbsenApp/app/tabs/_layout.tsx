// app/tabs/_layout.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './index';
import Absensi from './absensi';
import History from './history';
import About from './about';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Absensi') {
            iconName = 'checkmark';
          } else if (route.name === 'History') {
            iconName = 'time';
          } else if (route.name === 'About') {
            iconName = 'information-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Absensi" component={Absensi} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default TabLayout;

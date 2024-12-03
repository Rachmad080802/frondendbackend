// app/_layout.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabLayout from './tabs/_layout';
import NotFound from './+not-found';

const Tab = createBottomTabNavigator();

const RootLayout = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TabLayout} />
        <Tab.Screen name="Not Found" component={NotFound} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchBar from './components/SearchBar';
import HomeScreen from './navigation/HomeScreen';
import MyScreen from './navigation/MyScreen';
import SettingsScreen from './navigation/SettingsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarShowLabel: true,
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgb(28, 28, 30)',
        borderRadius: 1000,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 6,
        borderBlockColor: 'rgb(28, 28, 30)',
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: '#456789' }}>
              <Text>TEST</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SearchBar />
      <MyTabs />
    </NavigationContainer>
  );
}

const cards = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

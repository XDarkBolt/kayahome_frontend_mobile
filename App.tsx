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
        backgroundColor: 'rgb(58, 58, 60)',
        borderRadius: 1000,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 6,
        borderBlockColor: 'rgb(58, 58, 60)',
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
    <NavigationContainer theme={MyTheme}>
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

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(58, 58, 60)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { GestureResponderEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

function HomeScreen() {
  const [title, setTitle] = useState("Initial text");
  function onPress(event: GestureResponderEvent): void {
    try {
      setTitle('DD');
      return;
    } catch (error) {
      throw new Error('Function not implemented.');
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

function SettingsScreen() {
  var CompArray = new Array();
  CompArray[0] = 'LIST1';
  CompArray[1] = 'LIST2';
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{CompArray}</Text>
    </View>
  );
}

function MyScreen() {
  const [title, setTitle] = useState("Initial text");
  function onPress(event: GestureResponderEvent): void {
    try {
      setTitle('DD');
      return;
    } catch (error) {
      throw new Error('Function not implemented.');
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
}

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
      <Tab.Screen name="My" component={MyScreen} options={{ tabBarIcon: ({ focused }) => { return (<View style={{ backgroundColor: '#456789' }}><Text>TEST</Text></View>) } }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(28, 28, 30)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

const cards = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import PlaidLink from "./PlaidLink"

const Stack = createStackNavigator();

function Hi() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

function Other() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hi" component={Hi} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Plaid" component={PlaidLink} />
        <Tab.Screen name="Other" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

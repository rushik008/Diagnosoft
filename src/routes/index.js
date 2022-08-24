import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigation from './bottomTabNavigation';
import CovidTestScreen from '../screens/CovidTestScreen';
import styles from './style';

const RootStackScreen = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Root Stack"
          component={BottomTabNavigation}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTextStyle}>DiagnoSoft</Text>
                </View>
              );
            },
          }}
        />

        <RootStack.Screen
          name="Covid-19 Detection"
          component={CovidTestScreen}
          options={{
            headerShown: true,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;

import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigation from './bottomTabNavigation';

import CovidTestScreen from '../screens/CovidTestScreen';
import BrainTumorTestScreen from '../screens/BrainTumorTestScreen';
import BreastCancerTestScreen from '../screens/BreastCancerTestScreen';

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
                // Displaying DiagnoSoft title on each screen via Bottom Tab Navigation Bar
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

        <RootStack.Screen
          name="Brain Tumor Detection"
          component={BrainTumorTestScreen}
          options={{
            headerShown: true,
          }}
        />

        <RootStack.Screen
          name="Breast Cancer Detection"
          component={BreastCancerTestScreen}
          options={{
            headerShown: true,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;

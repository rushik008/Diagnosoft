import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './bottomTabNavigation';

import CovidTestScreen from '../screens/CovidTestScreen';
import CovidResultScreen from '../screens/CovidResultScreen';
import BrainTumorTestScreen from '../screens/BrainTumorTestScreen';
import BrainTumorResultScreen from '../screens/BrainTumorResultScreen';
import BreastCancerTestScreen from '../screens/BreastCancerTestScreen';
import BreastCancerResultScreen from '../screens/BreastCancerResultScreen';
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
          name="Covid-19"
          component={CovidTestScreen}
          options={{
            headerShown: true,
            // headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTextStyle}>Covid-19 Detection</Text>
                </View>
              );
            },
          }}
        />

        <RootStack.Screen
          name="Covid-19 Result"
          component={CovidResultScreen}
          options={{
            headerShown: true,
            // headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTextStyle}>Covid-19 Result</Text>
                </View>
              );
            },
          }}
        />

        <RootStack.Screen
          name="Brain Tumor"
          component={BrainTumorTestScreen}
          options={{
            headerShown: true,
            // headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTextStyle}>
                    Brain Tumor Detection
                  </Text>
                </View>
              );
            },
          }}
        />

        <RootStack.Screen
          name="Brain Tumor Result"
          component={BrainTumorResultScreen}
          options={{
            headerShown: true,
            // headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTextStyle}>Brain Tumor Result</Text>
                </View>
              );
            },
          }}
        />

        <RootStack.Screen
          name="Breast Cancer"
          component={BreastCancerTestScreen}
          options={{
            headerShown: true,
            // headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTextStyle}>Breast Cancer</Text>
                </View>
              );
            },
          }}
        />
        <RootStack.Screen
          name="Breast Cancer Result"
          component={BreastCancerResultScreen}
          options={{
            headerShown: true,
            // headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTextStyle}>
                    Breast Cancer Result
                  </Text>
                </View>
              );
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;

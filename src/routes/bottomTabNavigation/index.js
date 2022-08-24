import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

// importing screens
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';

// importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({route}) => ({
        tabBarShowLabel: true,

        tabBarIcon: ({focused}) => {
          // HOME ICON
          if (route.name === 'Home') {
            return focused ? (
              <Ionicons name="home-sharp" size={25} color="black" />
            ) : (
              <Ionicons name="home-outline" size={25} color="gray" />
            );
          }

          // SETTINGS ICON
          else if (route.name === 'Settings') {
            return focused ? (
              <Ionicons name="settings-sharp" size={25} color="black" />
            ) : (
              <Ionicons name="settings-outline" size={25} color="gray" />
            );
          }
        },

        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
        // Home tab screen is responsible for displaying the title of Dianosoft in center if below code is used
        // if we want to display title only on home screen tab, then it is used

        // options={{
        //   headerTitleAlign: 'center',
        //   headerTitle: () => {
        //     return (
        //       <View style={styles.headerContainer}>
        //         <Text style={styles.headerTextStyle}>DiagnoSoft</Text>
        //       </View>
        //     );
        //   },
        // }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

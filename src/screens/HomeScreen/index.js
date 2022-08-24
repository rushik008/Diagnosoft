import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './style';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Covid-19 Detection')}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'white' : 'aliceblue',
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.textStyle}>Covid-19 Detection</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

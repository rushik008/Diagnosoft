import React from 'react';
import {View, Text, Pressable} from 'react-native';
// import DiseaseButton from '../../components/diseaseButton';

import styles from './style';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* COVID-19 DETECTION */}
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

      {/* BRAIN TUMOR DETECTION */}
      <Pressable
        onPress={() => navigation.navigate('Brain Tumor Detection')}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'white' : 'aliceblue',
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.textStyle}>Brain Tumor Detection</Text>
      </Pressable>

      {/* BREAST CANCER DETECTION */}
      <Pressable
        onPress={() => navigation.navigate('Breast Cancer Detection')}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'white' : 'aliceblue',
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.textStyle}>Breast Cancer Detection</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

{
  /* <DiseaseButton
        diseaseTitle="Covid-19 Detection"
        diseaseScreenName="Covid-19TestScreen"
      />
      <DiseaseButton
        diseaseTitle="Brain Tumor Detection"
        diseaseScreenName="Brain Tumor Detection"
      /> */
}

import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

const BreastCancerResultScreen = ({navigation}) => {
  const route = useRoute();

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.textStyle}>Name: </Text>
            <Text style={styles.textStyle}>Age: </Text>
            <Text style={styles.textStyle}>Gender: </Text>
            <Text style={styles.textStyle}>Concave Point Mean: </Text>
            <Text style={styles.textStyle}>Area Mean: </Text>
            <Text style={styles.textStyle}>Radius Mean: </Text>
            <Text style={styles.textStyle}>Perimeter Mean: </Text>
            <Text style={styles.textStyle}>Concavity Mean: </Text>
            <Text style={styles.textStyle}>Result: </Text>
          </View>

          <View>
            <Text style={styles.textStyle}>
              {route.params.firstName} {route.params.lastName}
            </Text>
            <Text style={styles.textStyle}>{route.params.age}</Text>
            <Text style={styles.textStyle}>{route.params.gender}</Text>
            <Text style={styles.textStyle}>
              {route.params.concavePointMean}
            </Text>
            <Text style={styles.textStyle}>{route.params.areaMean}</Text>
            <Text style={styles.textStyle}>{route.params.radiusMean}</Text>
            <Text style={styles.textStyle}>{route.params.perimeterMean}</Text>
            <Text style={styles.textStyle}>{route.params.concavityMean}</Text>
            <Text style={styles.textStyle}>{route.params.modelResult}</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          {/* HOME BUTTON */}
          <Pressable
            onPress={() => navigation.navigate('Root Stack')} // go back to home page AFTER CLEARING ALL THE DATA
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'white' : '#EDEBEB',
              },
              styles.buttonStyle,
            ]}>
            <Text style={styles.textStyle}>Home</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default BreastCancerResultScreen;

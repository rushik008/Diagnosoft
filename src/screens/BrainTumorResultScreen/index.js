import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';

const BrainTumorResultScreen = ({navigation}) => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.textStyle}>Name: </Text>
          <Text style={styles.textStyle}>Age: </Text>
          <Text style={styles.textStyle}>Gender: </Text>
          <Text style={styles.textStyle}>Email: </Text>
          <Text style={styles.textStyle}>Result: </Text>
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.textStyle}>
            {route.params.firstName} {route.params.lastName}
          </Text>
          <Text style={styles.textStyle}>{route.params.age}</Text>
          <Text style={styles.textStyle}>{route.params.gender}</Text>
          <Text style={styles.textStyle}>{route.params.email}</Text>
          {/* RESULT SHOULD BE CHANGED AFTER PROCESSING THE ML MODEL */}
          <Text style={styles.textStyle}>{route.params.modelResult}</Text>
        </View>
      </View>

      <View style={styles.imageAndButtonContainer}>
        <Text style={styles.textStyle}>X-ray</Text>
        <Image
          style={styles.imageStyle}
          source={{uri: route.params.imagePath}}
        />

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
  );
};

export default BrainTumorResultScreen;

import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './style';

const DiseaseButton = ({diseaseScreenName, diseaseTitle}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate({diseaseScreenName})}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'white' : 'aliceblue',
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.textStyle}>{diseaseTitle}</Text>
      </Pressable>
    </View>
  );
};

export default DiseaseButton;

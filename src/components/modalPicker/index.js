import React from 'react';
import {Text, View, Pressable, ScrollView} from 'react-native';

import styles from './style';

const OPTIONS = ['Male', 'Female', 'Other'];

const ModalPicker = props => {
  const onPressItem = option => {
    props.modalVisibilityHandler(false);
    props.setData(option);
  };

  const option = OPTIONS.map((option, index) => {
    return (
      <Pressable
        style={styles.option}
        key={index}
        onPress={onPressItem(option)}>
        <Text style={styles.textStyle}> {option}</Text>
      </Pressable>
    );
  });

  return (
    <Pressable
      style={styles.container}
      onPress={props.modalVisibilityHandler(false)}>
      <View style={styles.modal}>
        <ScrollView>{option}</ScrollView>
      </View>
    </Pressable>
  );
};

export default ModalPicker;

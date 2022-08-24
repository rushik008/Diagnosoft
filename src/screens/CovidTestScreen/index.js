import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {useState} from 'react';
import {Menu, MenuItem} from 'react-native-material-menu';
import ImagePicker from 'react-native-image-crop-picker';

import styles from './style';

const CovidTestScreen = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState(null);

  // Menu for Gender options
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <View style={styles.container}>
      {/* Getting First Name as an Input */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="grey"
        onChangeText={onChangeText}
        value={text}
        keyboardType="name-phone-pad"
      />

      {/* Getting Last Name as an Input */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="grey"
        onChangeText={onChangeText}
        value={text}
        keyboardType="name-phone-pad"
      />

      {/* Getting Phone Number as an Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="grey"
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />

      {/* Getting Email as an Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="grey"
        onChangeText={onChangeNumber}
        value={text}
        keyboardType="email-address"
      />

      {/* Getting Gender as an Input */}
      <Menu
        visible={visible}
        anchor={
          <Text style={styles.input} onPress={showMenu}>
            Gender
          </Text>
        }
        onRequestClose={hideMenu}>
        <MenuItem
          style={styles.menuItemStyle}
          pressColor="#EDEBEB"
          onPress={hideMenu}>
          Male
        </MenuItem>

        <MenuItem
          style={styles.menuItemStyle}
          pressColor="#EDEBEB"
          onPress={hideMenu}>
          Female
        </MenuItem>

        <MenuItem
          style={styles.menuItemStyle}
          pressColor="#EDEBEB"
          onPress={hideMenu}>
          Other
        </MenuItem>
      </Menu>

      {/* Getting Age as an Input */}
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="grey"
        onChangeText={onChangeNumber}
        value={text}
        keyboardType="numeric"
      />

      {/* <View style={styles.uploadImageButtonContainer}> */}
      <View>
        {/* Button to Choose Image from Gallery */}
        <Pressable
          onPress={choosePhotoFromLibrary}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'white' : '#EDEBEB',
            },
            styles.wrapperCustom,
          ]}>
          <Text style={styles.textStyle}>Upload Image</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        {/* Button to Cancel */}
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'white' : 'lightsalmon',
            },
            styles.wrapperCustom,
          ]}>
          <Text style={styles.textStyle}>Cancel</Text>
        </Pressable>

        {/* Button to Detect */}
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'white' : 'lightgreen',
            },
            styles.wrapperCustom,
          ]}>
          <Text style={styles.textStyle}>Detect</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CovidTestScreen;

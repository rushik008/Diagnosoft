import React from 'react';
import {View, Text, TextInput, Pressable, Modal} from 'react-native';
import {useState} from 'react';
import {Menu, MenuItem} from 'react-native-material-menu';
import ImagePicker from 'react-native-image-crop-picker';
import {Picker} from '@react-native-picker/picker';
import ModalPicker from '../../components/modalPicker';

import styles from './style';

const CovidTestScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Select Gender');

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
        onChangeText={setFirstName}
        value={firstName}
        keyboardType="name-phone-pad"
      />

      {/* Getting Last Name as an Input */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="grey"
        onChangeText={setLastName}
        value={lastName}
        keyboardType="name-phone-pad"
      />

      {/* Getting Email as an Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="grey"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      {/* Getting Gender as an Input */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          // picker must have width
          style={styles.picker}
          onValueChange={itemGender => setGender(itemGender)}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      {/* Getting Age as an Input */}
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="grey"
        onChangeText={setAge}
        value={age}
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
          <Text style={styles.textStyle}>Upload X-ray</Text>
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

//  // Menu for Gender options
//  const [visible, setVisible] = useState(false);
//  const hideMenu = () => setVisible(false);
//  const showMenu = () => setVisible(true);
{
  /* Getting Gender as an Input
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
      </Menu> */
}

// const [gender, setGender] = useState('Select Gender');
// const [isModalVisible, setModalVisible] = useState(false);

// const modalVisibilityHandler = bool => {
//   setModalVisible(bool);
// };
// const setData = option => {
//   setGender(option);
// };

// {/* Creating Modal for Gender Options */}
// <Pressable onPress={() => modalVisibilityHandler(true)}>
// <Text style={styles.textStyle}>{gender}</Text>
// </Pressable>

// <Modal
// transparent={true}
// visible={isModalVisible}
// onRequestClose={() => modalVisibilityHandler(false)}>
// <ModalPicker
//   modalVisibilityHandler={modalVisibilityHandler}
//   setData={setData}
// />
// </Modal>

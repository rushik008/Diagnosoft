import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Picker} from '@react-native-picker/picker';

import styles from './style';
import {useNavigation} from '@react-navigation/native';

const CovidTestScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [image, setImage] = useState('../../../assets/images/avatarJPEG.jpeg');

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const navigation = useNavigation();

  const submit = () => {
    navigation.navigate('Covid-19 Result', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      gender: gender,
      imageSrc: image,
    });
  };

  return (
    <View style={styles.container}>
      {/* FIRST NAME INPUT */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="grey"
        onChangeText={setFirstName}
        value={firstName}
        keyboardType="name-phone-pad"
      />

      {/* LAST NAME INPUT */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="grey"
        onChangeText={setLastName}
        value={lastName}
        keyboardType="name-phone-pad"
      />

      {/* AGE INPUT */}
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="grey"
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
      />

      {/* GENDER INPUT */}
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

      {/* EMAIL INPUT */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="grey"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      {/* This line of code will put the upload button in the starting of the screen width */}
      {/* <View style={styles.uploadImageButtonContainer}> */}
      <View>
        {/* Button to Select Image from Gallery */}
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
        {/* CANCEL BUTTON */}
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'white' : 'lightsalmon',
            },
            styles.wrapperCustom,
          ]}>
          <Text style={styles.textStyle}>Cancel</Text>
        </Pressable>

        {/* DETECT BUTTON */}
        <Pressable
          onPress={submit}
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

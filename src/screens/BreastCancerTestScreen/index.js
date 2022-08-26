import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

const BreastCancerTestScreen = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState('Female');
  const [age, setAge] = useState(null);
  const [concavePointMean, setConcavePointMean] = useState(null);
  const [areaMean, setAreaMean] = useState(null);
  const [radiusMean, setRadiusMean] = useState(null);
  const [perimeterMean, setPerimeterMean] = useState(null);
  const [concavityMean, setConcavityMean] = useState(null);

  const [modelResult, setModelResult] = useState('Default');

  const navigation = useNavigation();

  const submit = () => {
    if (
      firstName == null ||
      lastName == null ||
      age == null ||
      gender == null ||
      concavePointMean == null ||
      areaMean == null ||
      radiusMean == null ||
      perimeterMean == null ||
      concavityMean == null ||
      modelResult == null
    ) {
      Alert.alert('Invalid!', 'Enter require data.', [{text: 'OK'}]);
    } else {
      navigation.navigate('Breast Cancer Result', {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        concavePointMean: concavePointMean,
        areaMean: areaMean,
        radiusMean: radiusMean,
        perimeterMean: perimeterMean,
        concavityMean: concavityMean,
        modelResult: modelResult,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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

        {/* AGE INPUT */}
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="grey"
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"
        />
        {/* CONCAVE POINT MEAN */}
        <TextInput
          style={styles.input}
          placeholder="Concave Point Mean"
          placeholderTextColor="grey"
          onChangeText={setConcavePointMean}
          value={concavePointMean}
          keyboardType="numeric"
        />
        {/* AREA MEAN */}
        <TextInput
          style={styles.input}
          placeholder="Area Mean"
          placeholderTextColor="grey"
          onChangeText={setAreaMean}
          value={areaMean}
          keyboardType="numeric"
        />
        {/* RADIUS MEAN */}
        <TextInput
          style={styles.input}
          placeholder="Radius Mean"
          placeholderTextColor="grey"
          onChangeText={setRadiusMean}
          value={radiusMean}
          keyboardType="numeric"
        />
        {/* PERIMETER MEAN */}
        <TextInput
          style={styles.input}
          placeholder="Perimeter Mean"
          placeholderTextColor="grey"
          onChangeText={setPerimeterMean}
          value={perimeterMean}
          keyboardType="numeric"
        />
        {/* CONCAVITY MEAN */}
        <TextInput
          style={styles.input}
          placeholder="Concave Point Mean"
          placeholderTextColor="grey"
          onChangeText={setConcavityMean}
          value={concavityMean}
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          {/* CANCEL BUTTON */}
          <Pressable
            onPress={() => navigation.navigate('Root Stack')}
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
      </ScrollView>
    </View>
  );
};

export default BreastCancerTestScreen;

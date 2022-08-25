import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';

const CovidResultScreen = () => {
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
          {/* <Text style={styles.textStyle}>Negative</Text> */}
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
          // onPress={}  // go back to home page AFTER CLEARING ALL THE DATA
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

export default CovidResultScreen;
// This code is used to develop front end

// <View style={styles.container}>
//   <View style={styles.dataContainer}>
//     <View style={styles.leftContainer}>
//       <Text style={styles.textStyle}>Name: </Text>
//       <Text style={styles.textStyle}>Age: </Text>
//       <Text style={styles.textStyle}>Gender: </Text>
//       <Text style={styles.textStyle}>Email: </Text>
//       <Text style={styles.textStyle}>Result: </Text>
//     </View>

//     <View style={styles.rightContainer}>
//       <Text style={styles.textStyle}>Rushik Rathod</Text>
//       <Text style={styles.textStyle}>20</Text>
//       <Text style={styles.textStyle}>Male</Text>
//       <Text style={styles.textStyle}>rathodrushikr@gmail.com</Text>
//       <Text style={styles.textStyle}>Negative</Text>
//     </View>
//   </View>

//   <View style={styles.imageAndButtonContainer}>
//     <Text style={styles.textStyle}>X-ray</Text>
//     <Image
//       style={styles.imageStyle}
//       source={require('../../../assets/images/temp.jpg')}
//     />

//     {/* Home BUTTON */}
//     <Pressable
//       // onPress={}  // go back to home page after clearing all the data
//       style={({pressed}) => [
//         {
//           backgroundColor: pressed ? 'white' : '#EDEBEB',
//         },
//         styles.buttonStyle,
//       ]}>
//       <Text style={styles.textStyle}>Home</Text>
//     </Pressable>
//   </View>
// </View>

// BASIC CODE TO LEARN HOW ROUTES WORK

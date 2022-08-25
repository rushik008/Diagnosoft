import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    // width: Dimensions.get('window').width - 20,
    backgroundColor: 'white',
    // borderWidth: 1,
  },

  // data container containes two views :
  dataContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  rightContainer: {
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'green',
  },
  textStyle: {
    margin: 6,
    fontSize: 18,
    color: 'black',
    fontFamily: 'AveriaSerifLibre-Regular',
  },

  imageAndButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },

  imageStyle: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default styles;

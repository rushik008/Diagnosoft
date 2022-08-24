import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  input: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: 'grey',
    fontFamily: 'AveriaSerifLibre-Regular',
  },

  menuItemStyle: {
    width: 100,
    alignItems: 'center',
    color: 'black',
  },

  uploadImageButtonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },

  wrapperCustom: {
    margin: 12,
    justifyContent: 'center',
    width: 160,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
  },

  textStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'AveriaSerifLibre-Regular',
  },
  buttonContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;

import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: 'white',
  },
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
    color: 'black',
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
    width: 165,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
  },

  picker: {
    width: Dimensions.get('window').width - 20,
    height: 40,
  },
  pickerContainer: {
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 20,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
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

import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
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

  wrapperCustom: {
    margin: 12,
    justifyContent: 'center',
    width: 160,
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

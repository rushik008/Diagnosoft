import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height - 20,
    backgroundColor: 'white',
  },

  option: {
    alignItems: 'flex-start',
    color: 'black',
  },

  textStyle: {
    margin: 20,
    fontSize: 18,
    color: 'black',
    fontFamily: 'AveriaSerifLibre-Regular',
  },
});

export default styles;

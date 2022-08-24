import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    fontFamily: 'AveriaSerifLibre-Regular',
  },

  wrapperCustom: {
    marginVertical: 8,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 30,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    padding: 6,
  },
});

export default styles;

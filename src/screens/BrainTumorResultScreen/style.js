import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
  },

  // data container containes two views having column flex direction
  dataContainer: {
    flexDirection: 'row',
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
  },

  imageStyle: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },

  buttonStyle: {
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default styles;

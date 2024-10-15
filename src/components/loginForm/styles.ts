import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  image: {
    height: height * 0.2,
    width: width * 0.85,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 4,
  },
  text: {
    fontSize: 32,
    marginHorizontal: 10,
    textAlign: 'center',
    color: '#4169E1',
    marginBottom: 32,
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#4169E1',
    display: 'flex',
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  flat: {
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  flatText: {
    color: 'blue',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: 'green',
    borderRadius: 4,
  },
});

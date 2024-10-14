import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 32,
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#D9D9D9',
    color: 'black',
    padding: 6,
    borderRadius: 8,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    fontSize: 12,
    color: 'red',
  },
  invalidInput: {
    backgroundColor: 'red',
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: 'black',
    marginBottom: 4,
  },
  input: {
    backgroundColor: 'gray',
    color: 'black',
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: 'red',
  },
  invalidInput: {
    backgroundColor: 'red',
  },
});

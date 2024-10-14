import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: 'gray',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  inputContainer: {
    marginHorizontal: 32,
    marginVertical: 8,
  },
});

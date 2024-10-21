import {StyleSheet} from 'react-native';

import {colors} from '@src/theme/ColorStyles';

export const styles = StyleSheet.create({

  container: {
    marginHorizontal: 32,
    marginVertical: 10,
  },

  label: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 4,
  },

  invalidLabel: {
    fontSize: 12,
    color: colors.error,
  },

  inputContainer: {
    flexDirection: 'row',
    gap: 2,
  },

  picker: {
    backgroundColor: colors.searchBackground,
    flex: 1,
    color: colors.textPrimary,
    padding: 6,
    borderRadius: 8,
    fontSize: 18,
  },

  inputText: {
    fontSize: 18,
    color:'black'
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  
  closeButton: {
    marginTop: 20,
    color: 'blue',
  },
});

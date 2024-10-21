import {StyleSheet} from 'react-native';

import {colors} from '@src/theme/ColorStyles';

export const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 32,
    marginVertical: 10,
    position:'relative'
  },

  label: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 4,
  },

  input: {
    backgroundColor: colors.searchBackground,
    color: colors.textPrimary,
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
    color: colors.error,
  },

  invalidInput: {
    backgroundColor: colors.error,
  },
  icon: {
    position:'absolute',
    bottom:8,
    right:10,
  },
});

import {colors} from '@theme/GlobalStyles';
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
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: colors.textSecondary,
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
    color: colors.textPrimary,
    marginBottom: 4,
  },
  inputContainer: {
    marginHorizontal: 32,
    marginVertical: 8,
  },
});

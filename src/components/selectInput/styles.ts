import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  inputContainer: {
    marginHorizontal: 32,
    marginVertical: 10,
    position: 'relative',
    zIndex: 1000,
  },
  input: {
    // backgroundColor: colors.secondary,
    color: colors.textPrimary,
    // padding: 6,
    borderRadius: 8,
  },
  flatlist: {
    backgroundColor: colors.secondary,
    color: colors.textPrimary,
    borderRadius: 8,
    marginTop: 2,
    position: 'absolute',
    top: '100%',
    width: '100%',
  },
  text: {
    fontSize: 18,
  },
});

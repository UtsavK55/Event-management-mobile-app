import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.primary,
    display: 'flex',
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingVertical: 10,
    zIndex: 1,
  },

  flat: {
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  buttonText: {
    color: colors.background,
    textAlign: 'center',
    fontSize: 14,
  },

  flatText: {
    color: colors.textFlat,
  },
  
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});

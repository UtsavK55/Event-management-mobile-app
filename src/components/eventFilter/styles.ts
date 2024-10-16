import {StyleSheet} from 'react-native';
import {colors} from '@src/theme/ColorStyles';

export const styles = StyleSheet.create({

  pickerContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 14,
  },
  
  content: {
    flex: 1,
    padding: 16,
  },
});

import {StyleSheet} from 'react-native';

import {height, width} from '@src/constants/dimensions';
import {colors} from '@src/theme/ColorStyles';

export const styles = StyleSheet.create({

  image: {
    height: height * 0.2,
    width: width * 0.85,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 20,
  },

  buttonContainer: {
    marginTop: 4,
  },

  text: {
    fontSize: 32,
    marginHorizontal: 10,
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 32,
  },
});

import {StyleSheet} from 'react-native';

import {height, width} from '@src/constants/dimensions';

export const styles = StyleSheet.create({

  image: {
    height: height * 0.15,
    width: width * 0.85,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  
  buttonContainer: {
    marginTop: 4,
  },
});

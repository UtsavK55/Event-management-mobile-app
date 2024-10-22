import {StyleSheet} from 'react-native';

import {colors} from '@src/theme/ColorStyles';

export const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    height: 60,
    // position: 'absolute',
    // top: 60,
    left: 0,
    right: 0,
    zIndex: 1000,
  },

  backButton: {
    padding: 10,
  },

  backButtonText: {
    fontSize: 16,
    color: colors.backColor,
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
    marginRight:20,
  },

  rightComponent: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});

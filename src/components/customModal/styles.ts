import {StyleSheet} from 'react-native';
import {colors} from '@src/theme/ColorStyles';

export const styles = StyleSheet.create({
  
  overlay: {
    width: '100%',
    height: '100%',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
    paddingVertical: '20%',
  },

  modalContent: {
    width: '80%',
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.textPrimary,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },

  closeButton: {
    marginTop: 10,
    color: colors.primary,
    textAlign: 'center',
  },
});

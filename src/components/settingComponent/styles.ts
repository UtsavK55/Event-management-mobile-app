import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.textPrimary,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  picker: {
    width: 150,
  },
  resetButton: {
    backgroundColor: '#ff3b30',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.textPrimary,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttonBackground,
    padding: 10,
    zIndex: 1,
    borderRadius: 8,
  },
  buttonText: {
    // flex: 1,
    textAlign: 'center',
    color: colors.textPrimary,
  },
  sortSelect: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.itemBorderColor,
    // backgroundColor: colors.secondary,
    marginVertical: 4,
    borderRadius: 8,
  },
});

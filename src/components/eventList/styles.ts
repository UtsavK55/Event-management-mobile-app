import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },

  header: {
    backgroundColor: colors.background,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'black'
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchBackground,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    height: 40,
    color:'black'
  },

  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },

  eventList: {
    padding: 16,
  },

  eventCard: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.iconColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  eventDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  eventDetailText: {
    marginLeft: 8,
    color: colors.iconColor,
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalContent: {
    backgroundColor: colors.modalBackground,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.itemBorderColor,
    // backgroundColor: colors.secondary,
    marginVertical: 4,
    borderRadius: 8,
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
    flex: 1,
    textAlign: 'left',
    color: colors.textPrimary,
    paddingHorizontal:6
  },

  pickerContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 14,
  },
  
  buttonContainer: {
    flex: 1,
  },
  sortSelect :{
    fontWeight:'bold',
    color:colors.primary
  }
});

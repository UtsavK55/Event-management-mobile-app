import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color:'black'
    // marginBottom: 5,
  },
  attendeeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  attendeeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  selectedAttendee: {
    backgroundColor: '#e0e0e0',
    borderColor: '#007AFF',
  },
  buttonContainer: {
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius:8
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
  attendeeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  attendeeEmail: {
    fontSize: 14,
    color: '#666',
  },
  attendeeActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 15,
  },
  listContainer: {
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
});

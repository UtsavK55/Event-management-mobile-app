import { colors } from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:colors.textPrimary
  },
  detailsContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 10,
    color:'black'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary
    // marginBottom: 10,
  },
  attendeeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  attendeeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:colors.textPrimary
  },
  attendeeEmail: {
    fontSize: 14,
    color: '#666',
  },
  attendeeActions: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  actionButton: {
    marginLeft: 15,
  },
  listContainer: {
    // flex: 1,
    // backgroundColor: '#fff',
    // paddingHorizontal: 20,
    marginHorizontal: 10,
    // height: '30%',
  },
});

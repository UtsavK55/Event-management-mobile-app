import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 60,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
    color:'black'
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
});

import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  eventList: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom:20
  },
  content: {
    flex: 1,
    // padding: 16,
  },
  summaryContainer: {
    marginBottom: 24,
    marginTop: 10,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical:10
  },
  summaryCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    // marginHorizontal: 8,
    // alignItems: 'center',
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    color: colors.textPrimary,
    flexDirection: 'column',
    alignSelf: 'center',
    marginRight: 14,
    // marginTop: 8,
    // textAlign: 'center',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'column',
    alignSelf: 'center',
    marginLeft: 14,
    color: colors.primary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  eventCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  eventDate: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  eventAttendees: {
    fontSize: 14,
    color: '#2196F3',
    marginTop: 4,
  },
  pickerContainer: {
    // flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 18,
    // justifyContent: 'space-between',
  },
  picker: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  emptyInfo: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.textPrimary,
    paddingHorizontal: 16,
  },
});

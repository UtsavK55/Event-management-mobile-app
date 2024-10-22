import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  eventList: {
    padding: 16,
  },

  eventCard: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.textPrimary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.textPrimary,
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
});

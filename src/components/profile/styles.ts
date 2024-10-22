import {colors} from '@src/theme/ColorStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    marginTop: 10,
  },
  bio: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
    marginTop: 5,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    // marginTop: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E2E8F0',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    // backgroundColor: colors.searchBackground,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    // borderRadius: 8,
    // shadowColor: colors.textPrimary,
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2D3748',
  },
  actionsContainer: {
    flexDirection: 'column',
    gap: 14,
    paddingHorizontal: 20,
    marginVertical: 50,

  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:4,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
     shadowColor: colors.textPrimary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingLeft:5
  },
  actionButtonText: {
    color: colors.textPrimary,
    marginLeft: 5,
    fontSize: 16,
    marginHorizontal: 20,
  },
  infoTextLabel: {
    fontSize: 18,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 4,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageText: {
    fontSize: 40,
    color: '#fff', // Color of the text
  },
});

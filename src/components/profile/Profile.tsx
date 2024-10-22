import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {Button} from '../button';
import {useEffect, useState} from 'react';
import {getData, storeData} from '@src/storage/storage';
import {storageKeys} from '@src/constants/storageKeys';
import {useUserLoginContext} from '@src/contexts/LoginContext';
import {ROUTES} from '@src/constants/Routes';
import {colors} from '@src/theme/ColorStyles';
import Icon from 'react-native-vector-icons/Feather';

const Profile = ({navigation}: ProfileScreenProps) => {
  const [userInfoArr, setUserInfoArr] = useState<SignupInfoArr>([]);
  const {loginId, setLoginId} = useUserLoginContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData(storageKeys.signUpData);
      userData ? setUserInfoArr(userData) : setUserInfoArr([]);
    };

    fetchUsers();
  }, []);

  const user = userInfoArr.find(item => item.id === loginId);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          setLoginId('');
          storeData('', storageKeys.loginId);
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          borderBottomColor: colors.searchBackground,
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            paddingTop: 16,
            paddingVertical: 10,
            color: colors.textPrimary,
            textAlign: 'center',
            backgroundColor: 'white',
          }}>
          Profile
        </Text>
      </View>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileImageText}>
            {user?.userName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.name}>{user?.userName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTextLabel}>Email:</Text>
          <Text style={styles.infoText}>{user?.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTextLabel}>Age:</Text>
          <Text style={styles.infoText}>{user?.age} Y</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTextLabel}>Gender:</Text>
          <Text style={styles.infoText}>{user?.gender}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        {/* <Button label="Edit Profile" onPress={() => //console.log('a')} /> */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate(ROUTES.SETTINGS)}>
          <Icon
            name="settings"
            size={colors.iconSize}
            color={colors.iconColor}
          />
          <Text style={styles.actionButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
          <Icon name="log-out" size={colors.iconSize} color={'red'} />
          <Text
            style={{
              color: 'red',
              marginLeft: 5,
              fontSize: 16,
              marginHorizontal: 20,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Profile;

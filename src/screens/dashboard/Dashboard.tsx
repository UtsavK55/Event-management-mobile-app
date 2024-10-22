import {Text} from 'react-native';

import BaseContainer from '@components/baseContainer';
import {Button} from '@components/button';
import {ROUTES} from '@constants/Routes';
import {storageKeys} from '@constants/storageKeys';
import {useUserLoginContext} from '@contexts/LoginContext';
import {storeData} from '@storage/storage';
import DashboardComponent from '@src/components/dashboardComponent/DashboardComponent';
import CustomHeader from '@src/components/header';

const Dashboard = ({navigation}: DashboardScreenProps) => {
  const {setLoginId} = useUserLoginContext();

  const handleAddEvent = () => {
    navigation.navigate(ROUTES.ADD_EVENT);
  };

  const handleLogout = () => {
    setLoginId('');
    storeData('', storageKeys.loginId);
  };

  return (
    <BaseContainer>
      {/* <Text>Dashboard</Text> */}
      <DashboardComponent navigation={navigation} />
      {/* <Button label="Add Event" onPress={handleAddEvent} />
      <Button label="Log out" onPress={handleLogout} /> */}
    </BaseContainer>
  );
};
export default Dashboard;

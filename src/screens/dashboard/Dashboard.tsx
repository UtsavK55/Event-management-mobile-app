import BaseContainer from '@src/components/baseContainer';
import {Button} from '@src/components/button';
import { useUserLoginContext } from '@src/contexts/isLoggedInContext';
import {Text} from 'react-native';

const Dashboard = () => {
  const {setLoginId} = useUserLoginContext();
  return (
    <BaseContainer>
      <Text>Dashboard</Text>
      <Button onPress={() => setLoginId('')}>Log out</Button>
    </BaseContainer>
  );
};
export default Dashboard;

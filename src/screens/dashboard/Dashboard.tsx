import BaseContainer from '@src/components/baseContainer';
import {Button} from '@src/components/button';
import {useisLoggedInContext} from '@src/contexts/isLoggedInContext';
import {Text} from 'react-native';

const Dashboard = () => {
  const {setisLoggedIn} = useisLoggedInContext();
  return (
    <BaseContainer>
      <Text>Dashboard</Text>
      <Button onPress={() => setisLoggedIn('')}>Log out</Button>
    </BaseContainer>
  );
};
export default Dashboard;

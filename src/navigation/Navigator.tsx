import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';
import {useEffect} from 'react';
import {getData} from '@src/storage/storage';
import {useUserLoginContext} from '@src/contexts/isLoggedInContext';

const Navigator = () => {
  const {loginId, setLoginId} = useUserLoginContext();
  useEffect(() => {
    const fetchUsers = async () => {
      const userId = await getData('isLoggedIn');
      setLoginId(userId);
    };

    fetchUsers();
  }, []);
  return <>{!loginId ? <AuthNavigator /> : <StackNavigator />}</>;
};

export default Navigator;

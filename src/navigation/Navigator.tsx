import {useisLoggedInContext} from '@src/contexts/isLoggedInContext';
import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';
import {useEffect} from 'react';
import {getData} from '@src/storage/storage';

const Navigator = () => {
  const {isLoggedIn, setisLoggedIn} = useisLoggedInContext();
  useEffect(() => {
    const fetchUsers = async () => {
      const userId = await getData('isLoggedIn');
      setisLoggedIn(userId);
    };

    fetchUsers();
  }, []);
  return <>{!isLoggedIn ? <AuthNavigator /> : <StackNavigator />}</>;
};

export default Navigator;

import AuthNavigator from './AuthNavigator';
import {useUserLoginContext} from '@contexts/LoginContext';
import TabNavigator from './TabNavigator';

const Navigator = () => {
  const {loginId, setLoginId} = useUserLoginContext();
  
  return <>{!loginId ? <AuthNavigator /> : <TabNavigator />}</>;
};

export default Navigator;

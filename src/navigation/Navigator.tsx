import {useUserLoginContext} from '@contexts/LoginContext';

import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const Navigator = () => {
  const {loginId, setLoginId} = useUserLoginContext();

  return <>{loginId ? <TabNavigator /> : <AuthNavigator />}</>;
};

export default Navigator;

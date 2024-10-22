import {useUserLoginContext} from '@contexts/LoginContext';

import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import {ActivityIndicator, View} from 'react-native';

const Navigator = () => {
  const {loginId, isLoading} = useUserLoginContext();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); 
  }

  return <>{loginId ? <TabNavigator /> : <AuthNavigator />}</>;
};

export default Navigator;

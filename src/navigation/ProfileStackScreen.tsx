import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '@constants/Routes';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import Profile from '@src/components/profile';
import Setting from '@src/screens/setting/Settting';

const ProfileStackScreen = ({navigation, route}: ProfileScreenProps) => {
  const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.PROFILE;
    if (routeName === ROUTES.SETTINGS) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <ProfileStack.Screen
        name={ROUTES.SETTINGS}
        component={Setting}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;

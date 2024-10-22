import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '@constants/Routes';
import AddEvent from '@screens/addEvent/AddEvent';
import Dashboard from '@screens/dashboard/Dashboard';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

const DashboardStackScreen = ({
  navigation,
  route,
}: DashboardStackScreenProps) => {
  const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.EVENTS;
    if (routeName === ROUTES.ADD_EVENT) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name={ROUTES.DASHBOARD}
        component={Dashboard}
        options={{headerShown: false, gestureEnabled: false}}
      />
      
    </DashboardStack.Navigator>
  );
};
export default DashboardStackScreen;

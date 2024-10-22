import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '@constants/Routes';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import EventListScreen from '@src/screens/eventListScreen/EventListScreen';
import EventDetail from '@src/screens/eventDetail/EventDetail';
import AddEvent from '@src/screens/addEvent/AddEvent';

const EventStackScreen = ({navigation, route}: EventStackScreenProps) => {
  const EventStack = createNativeStackNavigator<EventStackParamList>();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.EVENTS;
    if (routeName === ROUTES.EVENT_DETAILS || routeName === ROUTES.ADD_EVENT) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name={ROUTES.EVENTS}
        component={EventListScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <EventStack.Screen
        name={ROUTES.ADD_EVENT}
        component={AddEvent}
        options={{
          headerShown: false,
          gestureEnabled: false,
          navigationBarHidden: true,
        }}
      />
      <EventStack.Screen
        name={ROUTES.EVENT_DETAILS}
        component={EventDetail}
        options={{
          headerShown: false,
          gestureEnabled: false,
          navigationBarHidden: true,
        }}
      />
    </EventStack.Navigator>
  );
};
export default EventStackScreen;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '@constants/Routes';
import EventList from '@screens/eventList/EventList';
import DashboardStackScreen from './DashboardStackScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.DashboardStackScreen}
        component={DashboardStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name={ROUTES.EVENTS} component={EventList} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

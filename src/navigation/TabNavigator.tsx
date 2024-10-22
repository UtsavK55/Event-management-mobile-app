import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '@constants/Routes';
import DashboardStackScreen from './DashboardStackScreen';
import ProfileScreen from '@src/screens/profileScreen/ProfileScreen';
import EventListScreen from '@src/screens/eventListScreen/EventListScreen';
import EventStackScreen from './EventStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import {colors} from '@src/theme/ColorStyles';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  type TabBarIconProps = {
    focused: boolean;
  };
  const tabBarIcon =
    (name: string) =>
    ({focused}: TabBarIconProps) => {
      return (
        <Icon name={name} size={colors.iconSize} color={colors.iconColor} />
      );
    };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.DASHBOARD_STACK_SCREEN}
        component={DashboardStackScreen}
        options={{headerShown: false, tabBarIcon: tabBarIcon('home')}}
      />
      <Tab.Screen
        name={ROUTES.EVENT_STACK_SCREEN}
        component={EventStackScreen}
        options={{headerShown: false,tabBarIcon: tabBarIcon('list')}}
      />
      <Tab.Screen
        name={ROUTES.PROFILE_STACK_SCREEN}
        component={ProfileStackScreen}
        options={{headerShown: false,tabBarIcon: tabBarIcon('user')}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

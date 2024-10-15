import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@constants/Routes';
import AddEvent from '@screens/addEvent/AddEvent';
import Dashboard from '@screens/dashboard/Dashboard';

const DashboardStackScreen = () => {
  const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name={ROUTES.DASHBOARD}
        component={Dashboard}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <DashboardStack.Screen
        name={ROUTES.ADDEVENT}
        component={AddEvent}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </DashboardStack.Navigator>
  );
};
export default DashboardStackScreen;

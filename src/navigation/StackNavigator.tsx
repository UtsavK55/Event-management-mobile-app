import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ROUTES } from '@src/constants/Routes';

import Dashboard from '@src/screens/dashboard/Dashboard';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

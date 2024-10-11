import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from '@src/screens/dashboard/Dashboard';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

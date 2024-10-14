import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '@src/screens/signUp/SignUp';
import Login from '@src/screens/login/login';
import { ROUTES } from '@src/constants/Routes';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={ROUTES.SIGNUP} component={SignUp} options={{ title: 'Sign Up' }} />
      <AuthStack.Screen name={ROUTES.LOGIN} component={Login} options={{ title: 'Login' }} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

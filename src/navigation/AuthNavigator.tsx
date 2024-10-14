import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '@src/screens/signUp/SignUp';
import { ROUTES } from '@src/constants/Routes';
import Login from '@src/screens/login/Login';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={ROUTES.LOGIN} component={Login} options={{ title: 'Login' }} />
      <AuthStack.Screen name={ROUTES.SIGNUP} component={SignUp} options={{ title: 'Sign Up' }} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

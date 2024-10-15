import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '@screens/signUp/SignUp';
import {ROUTES} from '@constants/Routes';
import Login from '@screens/login/Login';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{title: 'Login', headerShown: false, gestureEnabled: false}}
      />
      <AuthStack.Screen
        name={ROUTES.SIGNUP}
        component={SignUp}
        options={{title: 'Sign Up', headerShown: false, gestureEnabled: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

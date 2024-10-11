import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '@src/screens/signUp/SignUp';
import Login from '@src/screens/login/login';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
      <AuthStack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

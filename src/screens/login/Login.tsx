import {useState} from 'react';
import {Alert, Image, Text} from 'react-native';

import BottomAuthScreen from '@src/components/bottomAuthScreen';
import {Button} from '@src/components/button';
import {Input} from '@src/components/input';
import {emailRegex, passwordRegex} from '@src/constants/constant';
import {ROUTES} from '@src/constants/Routes';
import {useisLoggedInContext} from '@src/contexts/isLoggedInContext';
import {getData, storeData} from '@src/storage/storage';
import BaseContainer from '@src/components/baseContainer';

const Login = ({navigation}: LoginScreenProps) => {
  const {setisLoggedIn} = useisLoggedInContext();

  const [inputs, setInputs] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  });

  const handleInputChange = (inputIdentifier: string, enteredValue: string) => {
    setInputs(currentInputs => {
      return {
        ...currentInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const handleSubmit = async () => {
    const loginData = {
      email: inputs.email.value,
      password: inputs.password.value,
    };

    const emailIsValid = emailRegex.test(loginData.email);
    const passwordIsValid = passwordRegex.test(loginData.password);

    if (!emailIsValid || !passwordIsValid) {
      setInputs(curInputs => {
        return {
          email: {value: curInputs.email.value, isValid: emailIsValid},
          password: {value: curInputs.password.value, isValid: passwordIsValid},
        };
      });
      return;
    }

    const userDataArr = await getData('signupDataArr');

    const userData = userDataArr.find((item: SignupInfo) => {
      return (
        item.email === loginData.email && item.password === loginData.password
      );
    });

    if (userData) {
      setisLoggedIn(userData.id);
      storeData(userData.id, 'isLoggedIn');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <BaseContainer>
      <Image
        style={{height: 200, width: 400, marginVertical: 20}}
        source={require('../../assets/logo.png')}
      />
      <Text
        style={{
          fontSize: 32,
          marginHorizontal: 10,
          textAlign: 'center',
          color: '#4169E1',
          marginBottom: 32,
        }}>
        Welcome to Eventify
      </Text>
      <Input
        label="Email"
        invalid={!inputs.email.isValid}
        textInputConfig={{
          keyboardType: 'email-address',
          onChangeText: (value: string) => handleInputChange('email', value),
          value: inputs.email.value,
          autoCapitalize: 'none',
        }}
      />
      <Input
        label="Password"
        invalid={!inputs.password.isValid}
        textInputConfig={{
          keyboardType: 'default',
          onChangeText: (value: string) => handleInputChange('password', value),
          value: inputs.password.value,
        }}
      />
      <Button mode="default" onPress={handleSubmit}>
        Submit
      </Button>
      <BottomAuthScreen
        text="Don't have an account?"
        buttonLabel="Sign Up"
        onPressLogin={() => navigation.replace(ROUTES.SIGNUP)}
      />
    </BaseContainer>
  );
};

export default Login;

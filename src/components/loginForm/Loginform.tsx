import {View} from 'react-native';
import {useState} from 'react';
import {Alert, Image, Text} from 'react-native';

import {Button} from '@src/components/button';
import {Input} from '@src/components/input';
import {emailRegex, passwordRegex} from '@src/constants/constant';
import {getData, storeData} from '@src/storage/storage';
import {useUserLoginContext} from '@src/contexts/isLoggedInContext';
import {styles} from './styles';

const LoginForm = () => {
  const {setLoginId} = useUserLoginContext();

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
      setLoginId(userData.id);
      storeData(userData.id, 'isLoggedIn');
    } else {
      Alert.alert('Invalid credentials');
    }
  };
  return (
    <View>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>Welcome to Eventify</Text>
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
      <View style={styles.buttonContainer}>
        <Button mode="default" onPress={handleSubmit}>
          Submit
        </Button>
      </View>
      
    </View>
  );
};

export default LoginForm;

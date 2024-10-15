import {View} from 'react-native';
import {useState} from 'react';
import {Alert, Image, Text} from 'react-native';

import {Button} from '@components/button';
import {Input} from '@components/input';
import {emailRegex, passwordRegex} from '@constants/constant';
import {getData, storeData} from '@storage/storage';
import {useUserLoginContext} from '@contexts/LoginContext';
import {logoImg} from '@helpers/helper';
import {storageKeys} from '@constants/storageKeys';

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
      setInputs(currentInputs => ({
        ...currentInputs,
        email: {value: currentInputs.email.value, isValid: emailIsValid},
        password: {
          value: currentInputs.password.value,
          isValid: passwordIsValid,
        },
      }));
      return;
    }

    const userDataArr = await getData(storageKeys.signUpData);

    const userData = userDataArr
      ? userDataArr.find((item: SignupInfo) => {
          return (
            item.email === loginData.email &&
            item.password === loginData.password
          );
        })
      : null;

    if (userData) {
      setLoginId(userData.id);
      storeData(userData.id, storageKeys.loginId);
    } else {
      Alert.alert('Invalid credentials');
    }
  };
  return (
    <View>
      <Image style={styles.image} source={logoImg} />
      <Text style={styles.text}>Welcome to Eventify</Text>
      <Input
        label="Email"
        invalid={!inputs.email.isValid}
        value={inputs.email.value}
        onChangeText={(value: string) => handleInputChange('email', value)}
        textInputConfig={{
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        }}
      />
      <Input
        label="Password"
        invalid={!inputs.password.isValid}
        value={inputs.password.value}
        onChangeText={(value: string) => handleInputChange('password', value)}
        textInputConfig={{
          keyboardType: 'default',
        }}
      />
      <View style={styles.buttonContainer}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginForm;

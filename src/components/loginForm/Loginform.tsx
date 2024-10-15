import {useState} from 'react';
import {View} from 'react-native';
import {Alert, Image, Text} from 'react-native';

import {Button} from '@components/button';
import {Input} from '@components/input';
import {emailRegex, passwordRegex} from '@constants/constant';
import {getData, storeData} from '@storage/storage';
import {useUserLoginContext} from '@contexts/LoginContext';
import {logoImg, validateInput} from '@helpers/helper';
import {storageKeys} from '@constants/storageKeys';

import {styles} from './styles';

const LoginForm = () => {

  const {setLoginId} = useUserLoginContext();

  const [inputs, setInputs] = useState({
    email: {
      value: '',
      isValid: true,
      errorMessage: '',
    },
    password: {
      value: '',
      isValid: true,
      errorMessage: '',
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

    const emailError = validateInput(
      loginData.email,
      emailRegex,
      'Email is required.',
      'Please enter a valid email.',
    );

    const passwordError = validateInput(
      loginData.password,
      passwordRegex,
      'Password is required.',
      "Entered password doesn't match the password format.",
    );

    if (emailError || passwordError) {
      setInputs(currentInputs => ({
        email: {
          ...currentInputs.email,
          isValid: !emailError,
          errorMessage: emailError,
        },
        password: {
          ...currentInputs.password,
          isValid: !passwordError,
          errorMessage: passwordError,
        },
      }));

      return;
    }

    const userDataArr = await getData(storageKeys.signUpData);

    const userData =
      userDataArr?.find(({email, password}: SignupInfo) => {
        if (email !== loginData.email) return false;
        return password === loginData.password;
      }) || null;

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
        required
        errorMessage={inputs.email.errorMessage}
      />
      <Input
        label="Password"
        invalid={!inputs.password.isValid}
        value={inputs.password.value}
        onChangeText={(value: string) => handleInputChange('password', value)}
        textInputConfig={{
          keyboardType: 'default',
          secureTextEntry: 'true',
        }}
        required={true}
        errorMessage={inputs.password.errorMessage}
      />
      <View style={styles.buttonContainer}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginForm;

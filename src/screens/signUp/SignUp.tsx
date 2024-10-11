import {Button} from '@src/components/button';
import {Input} from '@src/components/input';
import {alphaRegex, emailRegex, passwordRegex} from '@src/constants/constant';
import {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: {
      value: '',
      isValid: true,
    },
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    confirmPass: {
      value: '',
      isValid: true,
    },
  });

  const handleInputChange = (inputIdentifier: string, enteredValue: string) => {
    setInputs(curInputs => {
      return {
        ...curInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const handleSubmit = () => {
    const signupData = {
      name: inputs.name.value,
      email: inputs.email.value,
      password: inputs.password.value,
      confirmPass: inputs.confirmPass.value,
    };

    const nameIsValid =  alphaRegex.test(signupData.name.trim());
    const emailIsValid = emailRegex.test(signupData.email);
    const passwordIsValid = passwordRegex.test(signupData.password);
    const confirmPassIsValid = signupData.confirmPass === signupData.password;

    if (
      !nameIsValid ||
      !emailIsValid ||
      !passwordIsValid ||
      !confirmPassIsValid
    ) {
      setInputs(curInputs => {
        return {
          name: {value: curInputs.name.value, isValid: nameIsValid},
          email: {value: curInputs.email.value, isValid: emailIsValid},
          password: {value: curInputs.password.value, isValid: passwordIsValid},
          confirmPass: {
            value: curInputs.confirmPass.value,
            isValid: confirmPassIsValid,
          },
        };
      });
      return;
    }
    console.log(signupData);
  };

  return (
    <SafeAreaView>
      <Input
        label="Name"
        invalid={!inputs.name.isValid}
        textInputConfig={{
          keyboardType: 'default',
          onChangeText: (value: string) => handleInputChange('name', value),
          value: inputs.name.value,
        }}
      />
      <Input
        label="E-mail"
        invalid={!inputs.email.isValid}
        textInputConfig={{
          keyboardType: 'email-address',
          onChangeText: (value: string) => handleInputChange('email', value),
          value: inputs.email.value,
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
      <Input
        label="Confirm Password"
        invalid={!inputs.confirmPass.isValid}
        textInputConfig={{
          keyboardType: 'default',
          onChangeText: (value: string) =>
            handleInputChange('confirmPass', value),
          value: inputs.confirmPass.value,
        }}
      />
      <Button mode="flat" onPress={handleSubmit}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default SignUp;

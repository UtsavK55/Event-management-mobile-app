import {useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';

import {Button} from '@src/components/button';
import {Input} from '@src/components/input';
import {
  alphaRegex,
  emailRegex,
  genderData,
  passwordRegex,
} from '@src/constants/constant';
import {getData, storeData} from '@src/storage/storage';
import RadioButton from '@src/components/radioButton';
import {styles} from './styles';
import {generateId} from '@src/helpers/helper';
import {useUserLoginContext} from '@src/contexts/isLoggedInContext';

const SignUpForm = () => {
  const {setLoginId} = useUserLoginContext();

  const [inputs, setInputs] = useState({
    userName: {
      value: '',
      isValid: true,
    },
    email: {
      value: '',
      isValid: true,
    },
    age: {
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

  const [radioOption, setRadioOption] = useState('Male');

  const [eventsArr, setEventsArr] = useState<SignupInfoArr>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData('signupDataArr');
      setEventsArr(userData);
    };

    fetchUsers();
  }, []);

  const handleInputChange = (inputIdentifier: string, enteredValue: string) => {
    setInputs(currentInputs => {
      return {
        ...currentInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const handleSubmit = () => {
    const signupData = {
      id: generateId(),
      userName: inputs.userName.value,
      email: inputs.email.value,
      age: Number(inputs.age.value),
      gender: radioOption,
      password: inputs.password.value,
      confirmPass: inputs.confirmPass.value,
    };

    const nameIsValid = alphaRegex.test(signupData.userName.trim());
    const emailIsValid = emailRegex.test(signupData.email);
    const ageIsValid = !isNaN(signupData.age) && signupData.age > 0;
    const passwordIsValid = passwordRegex.test(signupData.password);
    const confirmPassIsValid = signupData.confirmPass === signupData.password;

    if (
      !nameIsValid ||
      !emailIsValid ||
      !ageIsValid ||
      !passwordIsValid ||
      !confirmPassIsValid
    ) {
      setInputs(currentInputs => {
        return {
          userName: {value: currentInputs.userName.value, isValid: nameIsValid},
          email: {value: currentInputs.email.value, isValid: emailIsValid},
          age: {value: currentInputs.age.value, isValid: ageIsValid},
          password: {
            value: currentInputs.password.value,
            isValid: passwordIsValid,
          },
          confirmPass: {
            value: currentInputs.confirmPass.value,
            isValid: confirmPassIsValid,
          },
        };
      });
      return;
    }

    setEventsArr(prevEvents => {
      const updatedEvents = [...prevEvents, signupData];
      storeData(updatedEvents, 'signupDataArr');
      storeData(signupData.id, 'isLoggedIn');
      return updatedEvents;
    });

    setLoginId(signupData.id);
  };

  return (
    <View>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
      <ScrollView>
        <Input
          label="Name"
          invalid={!inputs.userName.isValid}
          textInputConfig={{
            keyboardType: 'default',
            onChangeText: (value: string) =>
              handleInputChange('userName', value),
            value: inputs.userName.value,
          }}
        />
        <Input
          label="E-mail"
          invalid={!inputs.email.isValid}
          textInputConfig={{
            keyboardType: 'email-address',
            onChangeText: (value: string) => handleInputChange('email', value),
            value: inputs.email.value,
            autoCapitalize: 'none',
          }}
        />
        <Input
          label="Age"
          invalid={!inputs.age.isValid}
          textInputConfig={{
            keyboardType: 'numeric',
            onChangeText: (value: string) => handleInputChange('age', value),
            value: inputs.age.value,
          }}
        />

        <RadioButton
          radioOption={radioOption}
          setRadioOption={setRadioOption}
          data={genderData}
          label="Gender"
        />
        <Input
          label="Password"
          invalid={!inputs.password.isValid}
          textInputConfig={{
            keyboardType: 'default',
            onChangeText: (value: string) =>
              handleInputChange('password', value),
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
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="default" onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </View>
  );
};

export default SignUpForm;

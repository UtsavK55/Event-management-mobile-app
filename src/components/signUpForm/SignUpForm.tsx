import {useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';

import {Button} from '@components/button';
import {Input} from '@components/input';
import {
  alphaRegex,
  emailRegex,
  genderData,
  passwordRegex,
} from '@constants/constant';
import {getData, storeData} from '@storage/storage';
import RadioButton from '@components/radioButton';
import {generateId, logoImg} from '@helpers/helper';
import {useUserLoginContext} from '@contexts/LoginContext';
import {storageKeys} from '@constants/storageKeys';

import {styles} from './styles';

const SignUpForm = () => {
  
  const {setLoginId} = useUserLoginContext();

  const emptyForm = {
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
  };
  const [inputs, setInputs] = useState(emptyForm);

  const [radioOption, setRadioOption] = useState('Male');

  const [userInfoArr, setUserInfoArr] = useState<SignupInfoArr>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData(storageKeys.signUpData);
      userData ? setUserInfoArr(userData) : setUserInfoArr([]);
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
      setInputs(currentInputs => ({
        ...currentInputs,
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
      }));
      return;
    }

    setUserInfoArr(prevInfo => {
      const updatedInfo = [
        ...(Array.isArray(prevInfo) ? prevInfo : []),
        signupData,
      ];
      storeData(updatedInfo, storageKeys.signUpData);
      storeData(signupData.id, storageKeys.loginId);
      return updatedInfo;
    });

    setLoginId(signupData.id);
    setInputs(emptyForm);
  };

  return (
    <View>
      <Image style={styles.image} source={logoImg} />
      <ScrollView>
        <Input
          label="Name"
          invalid={!inputs.userName.isValid}
          value={inputs.userName.value}
          onChangeText={(value: string) => handleInputChange('userName', value)}
          textInputConfig={{
            keyboardType: 'default',
          }}
        />
        <Input
          label="E-mail"
          invalid={!inputs.email.isValid}
          onChangeText={(value: string) => handleInputChange('email', value)}
          value={inputs.email.value}
          textInputConfig={{
            keyboardType: 'email-address',
            autoCapitalize: 'none',
          }}
        />
        <Input
          label="Age"
          invalid={!inputs.age.isValid}
          onChangeText={(value: string) => handleInputChange('age', value)}
          value={inputs.age.value}
          textInputConfig={{
            keyboardType: 'numeric',
          }}
        />

        <RadioButton
          radioOption={radioOption}
          setRadioOption={setRadioOption}
          data={genderData}
          label="Gender*"
        />
        <Input
          label="Password"
          invalid={!inputs.password.isValid}
          onChangeText={(value: string) => handleInputChange('password', value)}
          value={inputs.password.value}
          textInputConfig={{
            keyboardType: 'default',
          }}
        />
        <Input
          label="Confirm Password"
          invalid={!inputs.confirmPass.isValid}
          onChangeText={(value: string) =>
            handleInputChange('confirmPass', value)
          }
          value={inputs.confirmPass.value}
          textInputConfig={{
            keyboardType: 'default',
          }}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default SignUpForm;

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
import {generateId, logoImg, validateInput} from '@helpers/helper';
import {useUserLoginContext} from '@contexts/LoginContext';
import {storageKeys} from '@constants/storageKeys';
import {emptySignUpForm} from '@src/constants/formConstants';

import {styles} from './styles';
import {ROUTES} from '@src/constants/Routes';

const SignUpForm = ({navigation}: SignupScreenProps) => {
  const {setLoginId} = useUserLoginContext();

  const [inputs, setInputs] = useState(emptySignUpForm);

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

    const nameError = validateInput(
      signupData.userName,
      alphaRegex,
      'Name is required.',
      'Please enter a valid name (only letters).',
    );

    const emailError = validateInput(
      signupData.email,
      emailRegex,
      'Email is required.',
      'Please enter a valid email.',
    );

    const ageError =
      !signupData.age || signupData.age <= 0
        ? 'Age is required and must be greater than zero.'
        : '';

    const passwordError = validateInput(
      signupData.password,
      passwordRegex,
      'Password is required.',
      "Entered password doesn't match the password format.",
    );

    const confirmPassError =
      signupData.confirmPass !== signupData.password
        ? 'Passwords do not match.'
        : '';

    if (
      nameError ||
      emailError ||
      ageError ||
      passwordError ||
      confirmPassError
    ) {
      setInputs(currentInputs => ({
        ...currentInputs,
        userName: {
          value: currentInputs.userName.value,
          isValid: !nameError,
          errorMessage: nameError,
        },
        email: {
          value: currentInputs.email.value,
          isValid: !emailError,
          errorMessage: emailError,
        },
        age: {
          value: currentInputs.age.value,
          isValid: !ageError,
          errorMessage: ageError,
        },
        password: {
          value: currentInputs.password.value,
          isValid: !passwordError,
          errorMessage: passwordError,
        },
        confirmPass: {
          value: currentInputs.confirmPass.value,
          isValid: !confirmPassError,
          errorMessage: confirmPassError,
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

    // setLoginId(signupData.id);
    setInputs(emptySignUpForm);
    navigation.replace(ROUTES.LOGIN);
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
          required
          errorMessage={inputs.userName.errorMessage}
        />
        <Input
          label="Email"
          invalid={!inputs.email.isValid}
          onChangeText={(value: string) => handleInputChange('email', value)}
          value={inputs.email.value}
          textInputConfig={{
            keyboardType: 'email-address',
            autoCapitalize: 'none',
          }}
          required
          errorMessage={inputs.email.errorMessage}
        />
        <Input
          label="Age"
          invalid={!inputs.age.isValid}
          onChangeText={(value: string) => handleInputChange('age', value)}
          value={inputs.age.value}
          textInputConfig={{
            keyboardType: 'numeric',
          }}
          required
          errorMessage={inputs.age.errorMessage}
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
          required
          errorMessage={inputs.password.errorMessage}
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
          required
          errorMessage={inputs.confirmPass.errorMessage}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default SignUpForm;

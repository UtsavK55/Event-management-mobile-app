import {ROUTES} from '@constants/Routes';

import SignUpForm from '@components/signUpForm/SignUpForm';
import BaseContainer from '@components/baseContainer';
import FooterAuth from '@components/footerAuth';
import {ScrollView} from 'react-native';

const SignUp = ({navigation}: SignupScreenProps) => {
  return (
    <BaseContainer>
      <ScrollView>
        <SignUpForm navigation={navigation} />
        <FooterAuth
          text="Already have an account?"
          buttonLabel="Login"
          onPressLogin={() => navigation.replace(ROUTES.LOGIN)}
        />
      </ScrollView>
    </BaseContainer>
  );
};

export default SignUp;

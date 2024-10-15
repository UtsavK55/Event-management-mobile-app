import {ROUTES} from '@constants/Routes';

import SignUpForm from '@components/signUpForm/SignUpForm';
import BaseContainer from '@components/baseContainer';
import FooterAuth from '@components/footerAuth';

const SignUp = ({navigation}: SignupScreenProps) => {
  return (
    <BaseContainer>
      <SignUpForm />
      <FooterAuth
        text="Already have an account?"
        buttonLabel="Login"
        onPressLogin={() => navigation.replace(ROUTES.LOGIN)}
      />
    </BaseContainer>
  );
};

export default SignUp;

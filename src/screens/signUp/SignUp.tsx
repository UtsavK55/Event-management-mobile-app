
import {ROUTES} from '@src/constants/Routes';

import SignUpForm from '@src/components/signUpForm/SignUpForm';
import BaseContainer from '@src/components/baseContainer';
import Footer from '@src/components/footer';

const SignUp = ({navigation}: SignupScreenProps) => {
  return (
    <BaseContainer>
      <SignUpForm />
      <Footer
        text="Already have an account?"
        buttonLabel="Login"
        onPressLogin={() => navigation.replace(ROUTES.LOGIN)}
      />
    </BaseContainer>
  );
};

export default SignUp;

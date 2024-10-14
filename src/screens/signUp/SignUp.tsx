
import {ROUTES} from '@src/constants/Routes';
import BottomAuthScreen from '@src/components/bottomAuthScreen';
import SignUpForm from '@src/components/signUpForm/SignUpForm';
import BaseContainer from '@src/components/baseContainer';

const SignUp = ({navigation}: SignupScreenProps) => {
  return (
    <BaseContainer>
      <SignUpForm />
      <BottomAuthScreen
        text="Already have an account?"
        buttonLabel="Login"
        onPressLogin={() => navigation.replace(ROUTES.LOGIN)}
      />
    </BaseContainer>
  );
};

export default SignUp;

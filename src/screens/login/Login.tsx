import {ROUTES} from '@src/constants/Routes';

import BaseContainer from '@src/components/baseContainer';
import Footer from '@src/components/footer';
import LoginForm from '@src/components/loginForm';

const Login = ({navigation}: LoginScreenProps) => {
  return (
    <BaseContainer>
      <LoginForm />
      <Footer
        text="Don't have an account?"
        buttonLabel="Sign Up"
        onPressLogin={() => navigation.replace(ROUTES.SIGNUP)}
      />
    </BaseContainer>
  );
};

export default Login;

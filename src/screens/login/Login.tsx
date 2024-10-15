import {ROUTES} from '@constants/Routes';

import BaseContainer from '@components/baseContainer';

import LoginForm from '@components/loginForm';
import FooterAuth from '@components/footerAuth';

const Login = ({navigation}: LoginScreenProps) => {
  return (
    <BaseContainer>
      <LoginForm />
      <FooterAuth
        text="Don't have an account?"
        buttonLabel="Sign Up"
        onPressLogin={() => navigation.replace(ROUTES.SIGNUP)}
      />
    </BaseContainer>
  );
};

export default Login;

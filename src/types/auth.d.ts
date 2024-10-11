interface SignupInfo {
  name: {
    value: string;
    isValid: boolean;
  };
  email: {
    value: string;
    isValid: boolean;
  };
  password: {
    value: string;
    isValid: boolean;
  };
  confirmPass: {
    value: string;
    isValid: boolean;
  };
}

interface SignupInfoContextType {
  signupInfo: SignupInfo;
  setSignupInfo: Dispatch<SetStateAction<SignupInfoContextType>>;
}

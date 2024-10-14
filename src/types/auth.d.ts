interface SignupInfo {
  id: string;
  userName: string;
  email: string;
  age: number;
  gender: string;
  password: string;
  confirmPass: string;
}

type SignupInfoArr = SignupInfo[];

interface SignupInfoContextType {
  signupInfo: SignupInfo;
  setSignupInfo: Dispatch<SetStateAction<SignupInfoContextType>>;
}

interface userLoginContextType {
  loginId: string;
  setLoginId: Dispatch<SetStateAction<string>>;
}

interface AlreadySignedUpProps {
  text: string;
  buttonLabel: string;
  onPressLogin: () => void;
}

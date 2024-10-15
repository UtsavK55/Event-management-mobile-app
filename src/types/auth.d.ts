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
  userInfoArr: SignupInfo[];
  setUserInfoArr: Dispatch<SetStateAction<SignupInfoArr>>;
}

interface userLoginContextType {
  loginId: string;
  setLoginId: Dispatch<SetStateAction<string>>;
}

interface FooterAuthProps {
  text: string;
  buttonLabel: string;
  onPressLogin: () => void;
}

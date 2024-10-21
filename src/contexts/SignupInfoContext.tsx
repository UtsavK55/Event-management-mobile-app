import {storageKeys} from '@constants/storageKeys';
import {getData} from '@storage/storage';
import {createContext, useContext, useState, ReactNode, useEffect} from 'react';

const SignupInfoContext = createContext<SignupInfoContextType | undefined>(
  undefined,
);

export const useSignupInfoContext = () => {
  
  const context = useContext(SignupInfoContext);
  if (!context) {
    throw new Error(
      'useSignupInfoContext must be used within an SignupInfoProvider',
    );
  }
  return context;
};

export const SignupInfoProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {

  const [userInfoArr, setUserInfoArr] = useState<SignupInfoArr>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData(storageKeys.signUpData);
      setUserInfoArr(userData);
    };

    fetchUsers();
  }, []);

  return (
    <SignupInfoContext.Provider value={{userInfoArr, setUserInfoArr}}>
      {children}
    </SignupInfoContext.Provider>
  );
};

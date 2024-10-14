import {createContext, useContext, useState, ReactNode} from 'react';

const userLoginContext = createContext<userLoginContextType | undefined>(
  undefined,
);

export const useUserLoginContext = () => {
  const context = useContext(userLoginContext);
  if (!context) {
    throw new Error(
      'useUserLoginContext must be used within an UserLoginProvider',
    );
  }
  return context;
};

export const UserLoginProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [loginId, setLoginId] = useState<string>('');

  return (
    <userLoginContext.Provider value={{loginId, setLoginId}}>
      {children}
    </userLoginContext.Provider>
  );
};

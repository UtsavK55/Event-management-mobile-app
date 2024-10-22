import {createContext, useContext, useState, ReactNode, useEffect} from 'react';

import {storageKeys} from '@constants/storageKeys';
import {getData} from '@storage/storage';

const UserLoginContext = createContext<UserLoginContextType | undefined>(
  undefined,
);

export const useUserLoginContext = () => {

  const context = useContext(UserLoginContext);
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

  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const [loginId, setLoginId] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      const userId = await getData(storageKeys.loginId);
      setLoginId(userId || '');
      setIsLoading(false);
    };

    fetchUsers();
  }, []);
  
  return (
    <UserLoginContext.Provider value={{loginId, setLoginId, isLoading}}>
      {children}
    </UserLoginContext.Provider>
  );
};

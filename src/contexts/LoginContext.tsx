import {storageKeys} from '@constants/storageKeys';
import {getData} from '@storage/storage';
import {createContext, useContext, useState, ReactNode, useEffect} from 'react';

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

  useEffect(() => {
    const fetchUsers = async () => {
      const userId = await getData(storageKeys.loginId);
      userId ? setLoginId(userId) : setLoginId('');
    };

    fetchUsers();
  }, []);
  
  return (
    <userLoginContext.Provider value={{loginId, setLoginId}}>
      {children}
    </userLoginContext.Provider>
  );
};

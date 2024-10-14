import {createContext, useContext, useState, ReactNode} from 'react';

const isLoggedInContext = createContext<isLoggedInContextType | undefined>(
  undefined,
);

export const useisLoggedInContext = () => {
  const context = useContext(isLoggedInContext);
  if (!context) {
    throw new Error(
      'useisLoggedInContext must be used within an isLoggedInProvider',
    );
  }
  return context;
};

export const IsLoggedInProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [isLoggedIn, setisLoggedIn] = useState<string>('');

  return (
    <isLoggedInContext.Provider value={{isLoggedIn, setisLoggedIn}}>
      {children}
    </isLoggedInContext.Provider>
  );
};

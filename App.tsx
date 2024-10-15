import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Navigator from '@navigation/Navigator';
import {UserLoginProvider} from '@contexts/LoginContext';
import {SignupInfoProvider} from '@contexts/SignupInfoContext';

function App(): React.JSX.Element {
  return (
    <UserLoginProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </UserLoginProvider>
  );
}

export default App;

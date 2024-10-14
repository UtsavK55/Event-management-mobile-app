import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Navigator from '@src/navigation/Navigator';
import {UserLoginProvider} from '@src/contexts/isLoggedInContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <UserLoginProvider>
        <Navigator />
      </UserLoginProvider>
    </NavigationContainer>
  );
}

export default App;

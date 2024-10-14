import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {IsLoggedInProvider} from '@src/contexts/isLoggedInContext';
import Navigator from '@src/navigation/Navigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <IsLoggedInProvider>
        <Navigator />
      </IsLoggedInProvider>
    </NavigationContainer>
  );
}

export default App;

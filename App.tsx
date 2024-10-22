import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {UserLoginProvider} from '@contexts/LoginContext';
import Navigator from '@navigation/Navigator';
import {SortFilterProvider} from '@src/contexts/SortFilterContext';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <UserLoginProvider>
      <SortFilterProvider>
        <NavigationContainer>
          <StatusBar />
          <Navigator />
        </NavigationContainer>
      </SortFilterProvider>
    </UserLoginProvider>
  );
}

export default App;

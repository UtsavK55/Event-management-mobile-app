import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from '@src/navigation/AuthNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}

export default App;

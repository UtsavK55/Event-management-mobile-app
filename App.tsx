import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@src/navigation/AuthNavigator';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}

export default App;

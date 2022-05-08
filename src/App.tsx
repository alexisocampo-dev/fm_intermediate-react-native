import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './screens/BottomTabNavigator';
import { AppProvider } from './AppProvider';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

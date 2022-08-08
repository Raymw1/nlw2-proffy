import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';

type RootStackParamList = {
    Landing: undefined,
    GiveClasses: undefined,
}


const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export { RootStackParamList };

function AppStack () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Landing' component={Landing} />
        <Screen name='GiveClasses' component={GiveClasses} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;


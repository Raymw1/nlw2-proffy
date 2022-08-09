import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs, { StudyTabsList } from './StudyTabs';

type RootStackParamList = {
  Landing: undefined,
  GiveClasses: undefined,
  Study: NavigatorScreenParams<StudyTabsList>
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export { RootStackParamList };

function AppStack () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Landing' component={Landing} />
        <Screen name='GiveClasses' component={GiveClasses} />
        <Screen name='Study' component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;


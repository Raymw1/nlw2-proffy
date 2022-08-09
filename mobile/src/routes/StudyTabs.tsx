import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

type StudyTabsList = {
  TeacherList: undefined,
  Favorites: undefined,
}

export { StudyTabsList };

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      screenOptions={{ 
        headerShown: false, 
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarIconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        tabBarLabelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        tabBarInactiveBackgroundColor: '#FAFAFC',
        tabBarActiveBackgroundColor: '#EBEBF5',
        tabBarInactiveTintColor: '#C1BCCC',
        tabBarActiveTintColor: '#32264D',
      }}
    >
      <Screen
        name='TeacherList'
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size }) => 
            (<Ionicons name='ios-easel' size={size} color={color} />),
        }} 
      />
      <Screen
        name='Favorites'
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => 
            (<Ionicons name='ios-heart' size={size} color={color} />),
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;

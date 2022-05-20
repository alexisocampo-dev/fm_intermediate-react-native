import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from './HomeScreen';
import { History } from './HistoryScreen';
import { AnalyticsScreen } from './AnalyticsScreen';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: { fontFamily: theme.fontFamilyRegular },
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          if (route.name === 'Home') {
            return <HomeIcon size={20} color={color} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon size={20} color={color} />;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon size={20} color={color} />;
          }

          return null;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{ title: 'Fancy Charts' }}
      />
    </Tab.Navigator>
  );
};

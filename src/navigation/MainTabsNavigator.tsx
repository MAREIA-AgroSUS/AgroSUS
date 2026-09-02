import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '../components/BottomTabBar';

import DashboardScreen from '../screens/DashboardScreen';
import ProdutoresScreen from '../screens/ProdutoresScreen';
import ColetaStackNavigator from './ColetaStackNavigator';
import AlertasScreen from '../screens/AlertasScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function MainTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabBar {...props} />}
      initialRouteName="Agenda"
    >
      <Tab.Screen name="Agenda" component={DashboardScreen} />
      <Tab.Screen name="Produtores" component={ProdutoresScreen} />
      <Tab.Screen name="Coleta" component={ColetaStackNavigator} />
      <Tab.Screen name="Alertas" component={AlertasScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

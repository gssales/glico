/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import DashboardScreen from '../screens/DashboardScreen';
import EditEntryScreen from '../screens/EditEntryScreen';
import { RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ViewEntryScreen from '../screens/ViewEntryScreen';
import MealBuilderScreen from '../screens/MealBuilderScreen';
import FoodFinderScreen from '../screens/FoodFinderScreen';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import HistoryScreen from '../screens/HistoryScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { Pressable } from 'react-native';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="UserRegister">
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="EditEntry" component={EditEntryScreen}
        options={({ navigation }: RootStackScreenProps<'EditEntry'>) => ({
          title: '',
          headerBackVisible: false,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Root')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="close"
                size={25}
                color={Colors.text}
                style={{ marginLeft: 15 }} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Root')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="save"
                size={25}
                color={Colors.text}
                style={{ marginRight: 15 }} />
            </Pressable>
          ),
        })} />
      <Stack.Screen name="ViewEntry" component={ViewEntryScreen} options={{ title: 'Detalhes do Registro' }} />
      <Stack.Screen
        name="MealBuilder"
        component={MealBuilderScreen}
        options={{
          title: 'Refeição',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: Colors.blue },
          headerBackVisible: false,
        }} />
      <Stack.Screen
        name="FoodFinder"
        component={FoodFinderScreen}
        options={{
          title: 'Escolher Alimento',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: Colors.blue },
        }} />
      <Stack.Screen 
      name="UserRegister" 
      component={UserRegisterScreen} 
      options={({ navigation }: RootStackScreenProps<'UserRegister'>) => ({
        title: 'Cadastro de Usuário',
        headerBackVisible: false,
        headerStyle: { backgroundColor: Colors.blue },
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Root')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <MaterialIcons
              name="save"
              size={25}
              color={Colors.text}
              style={{ marginRight: 15 }} />
          </Pressable>
        ),
      })} 
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.blue },
        tabBarInactiveTintColor: "#bbb",
        tabBarActiveTintColor: 'white',
      }}>
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }} />
      <BottomTab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="calculate" color={color} />
        }} />
      <BottomTab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="assessment" color={color} />
        }} />
      <BottomTab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="face" color={color} />
        }} />
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors.text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

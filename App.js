import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetail from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './store/favorites-context';

function DrawerNavigator() {

  const Drawer = createDrawerNavigator();
  
  return(
    <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#FFF',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#E4BAA1'
      }}
    >
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size}/>
          )
        }}
      />
      <Drawer.Screen 
        name='Favorires' 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size}/>
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <React.Fragment>
      <StatusBar style='light'/>
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: '#FFF',
            contentStyle: { backgroundColor: '#3F2F25' }
          }}>
            <Stack.Screen 
              name='Drawer' 
              component={DrawerNavigator}
              options={{ 
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetail}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

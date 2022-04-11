import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetail from './screens/MealDetailScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <React.Fragment>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerStyle: { backgroundColor: '#351401' },
           headerTintColor: '#FFF',
           contentStyle: { backgroundColor: '#3F2F25' }
        }}>
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen}
           /*  options={({ route, navigation }) => { 
              const catId = route.params.categoryId;
              return {
                title: catId
              };
            }} */
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

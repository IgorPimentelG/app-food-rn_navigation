import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

function FavoritesScreen() {

    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

    return(
        <MealsList items={favoriteMeals}/>
    );
}

export default FavoritesScreen;
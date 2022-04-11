import { useLayoutEffect, useContext } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/favorites-context';

function MealDetail({ route, navigation }) {

    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id = mealId);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return( 
                    <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline' }
                        color='#FFF'
                        onPress={changeFavoriteStatusHandler}
                    />
                )
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    function changeFavoriteStatusHandler() {
        if( mealIsFavorite ) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    return(
       <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
          <View style={styles.listOuterContiner}>
            <View style={styles.listContainer}>
                <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                    </View>
                    {selectedMeal.ingredients.map((ingredient) => (
                        <View style={styles.listItem}>
                            <Text style={styles.itemText} key={ingredient}>{ingredient}</Text>
                        </View>
                    ))}

                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                    </View>
                    {selectedMeal.steps.map((step) => (
                        <View style={styles.listItem}>
                            <Text style={styles.itemText} key={step}>{step}</Text>
                        </View>
                    ))}
            </View>
          </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({

    rootContainer: {
        marginBottom: 24
    }, 

    image: {
        width: '100%',
        height: 350
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#FFF'
    },
    detailText: {
        color: '#FFF'
    },

    subtitle: {
        color: '#E2B497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    subtitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: '#E2B497',
        borderBottomWidth: 2
    },

    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#E2B497'
    },

    itemText: {
        color: '#351401',
        textAlign: 'center'
    },

    listContainer: {
        width: '80%',
    },

    listOuterContiner: {
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default MealDetail;
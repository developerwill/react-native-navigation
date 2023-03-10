/* Redux */
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailsScreens({navigation}) {
    const route = useRoute();
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const isFavoriteMeal = favoriteMealIds.includes(mealId);

    const mealDetails = MEALS.find((meal) => meal.id === mealId);

    const mealDetailsProps = {
        affordability: mealDetails.affordability,
        complexity: mealDetails.complexity,
        duration: mealDetails.duration
    }

    function favoriteMealHandler () {
        if(isFavoriteMeal) {
            dispatch(removeFavorite({id: mealId}));
        } else {
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        /*// Gets meal's title dynamically
        navigation.setOptions({
            title: MEALS.find((meal) => meal.id === mealId).title
        });*/
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    onPress={favoriteMealHandler}
                    icon={isFavoriteMeal ? 'star' : 'star-outline'}
                    color={"white"}
                />
            }
        })
    }, [navigation, favoriteMealHandler]);

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{uri: mealDetails.imageUrl}}
                style={styles.image}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    {mealDetails.title}
                </Text>
                <View>
                    <MealDetails {...mealDetailsProps} textStyle={styles}/>
                </View>
                <View style={styles.listOuterContainer}>
                    <View style={styles.listIngredientsContainer}>
                        <Subtitle title={"Ingredients"}/>
                        <List array={mealDetails.ingredients}/>
                    </View>
                    <View style={styles.listContainer}>
                        <Subtitle title={"Steps"}/>
                        <List array={mealDetails.steps}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        fontSize: 18,
        paddingHorizontal: 16,
        marginBottom: 32
    },
    listIngredientsContainer: {
        alignItems: 'center'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
});
import {MEALS, CATEGORIES} from "../data/dummy-data";
import {useRoute} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsScreens(/*{route}*/ {navigation}){
    // Method with prop route. This only works if the component is a Stack.Screen
    // const categoryId = route.params.categoryId;
    const route = useRoute();
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    // useLayoutEffect executes simultaneously with the component rendering
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [navigation, categoryId]);

    return <MealsList items={displayedMeals}/>
}
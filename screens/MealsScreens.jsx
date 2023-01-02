import {MEALS, CATEGORIES} from "../data/dummy-data";
import {StyleSheet, FlatList, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react";

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

    const renderMeal = (mealData) => {
        const meal = mealData.item;

        const mealItemProps = {
            title: meal.title,
            imageURL: meal.imageUrl,
            duration: meal.duration,
            complexity: meal.complexity,
            affordability: meal.affordability
        }

        return <MealItem {...mealItemProps} />
    }

    return (
      <View style={styles.container}>
          <FlatList
              data={displayedMeals}
              keyExtractor={(meal) => meal.id}
              renderItem={renderMeal}
          >
          </FlatList>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
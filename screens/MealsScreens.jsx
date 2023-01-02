import {MEALS} from "../data/dummy-data";
import {StyleSheet, FlatList, View, Text} from "react-native";
import {useRoute} from "@react-navigation/native";
import MealItem from "../components/MealItem";

export default function MealsScreens(/*{route}*/){
    // Method with prop route. This only works if the component is a Stack.Screen
    // const categoryId = route.params.categoryId;
    const route = useRoute();
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    const renderMeal = (mealData) => {
        return <MealItem title={mealData.item.title}/>
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
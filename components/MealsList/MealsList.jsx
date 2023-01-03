import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";

export default function MealsList({items}) {
    function renderMeal(mealData) {
        const meal = mealData.item;

        const mealItemProps = {
            id: meal.id,
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
                data={items}
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
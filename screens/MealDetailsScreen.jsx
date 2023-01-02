import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";

export default function MealDetailsScreens({navigation}) {
    const route = useRoute();
    const mealId = route.params.mealId;

    const mealDetails = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(() =>{
        navigation.setOptions({
            title: MEALS.find((meal) => meal.id === mealId).title
        });
    },[navigation]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={{uri: mealDetails.imageUrl}}
                    style={styles.image}
                />
                <Text style={styles.title}>{mealDetails.title}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    innerContainer: {
        margin: 16,
        fontSize: 18
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        marginBottom: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
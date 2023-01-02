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
    const mealId = route.params.mealId;

    const mealDetails = MEALS.find((meal) => meal.id === mealId);

    const mealDetailsProps = {
        affordability: mealDetails.affordability,
        complexity: mealDetails.complexity,
        duration: mealDetails.duration
    }

    const headerButtonPressHandler = () => {
        console.log("hi")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: MEALS.find((meal) => meal.id === mealId).title
        });
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    onPress={headerButtonPressHandler}
                    icon={"star"}
                    color={"white"}
                />
            }
        })
    }, [navigation, headerButtonPressHandler]);

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
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Screens} from "../data/ScreenNames";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({id, title, imageURL, duration, complexity, affordability}) {
    const navigation = useNavigation();

    const mealDetailsProps = {
        duration: duration,
        complexity: complexity,
        affordability: affordability
    }

    const selectMealItemHandler = () => {
        navigation.navigate(
            Screens.mealDetails.name,
            {mealId: id}
        );
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={selectMealItemHandler}>
                <View>
                    <Image source={{uri: imageURL}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails {...mealDetailsProps}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        margin: 8
    }
});
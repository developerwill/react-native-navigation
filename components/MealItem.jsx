import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Screens} from "../data/ScreenNames";
import {useNavigation} from "@react-navigation/native";

export default function MealItem({id, title, imageURL, duration, complexity, affordability}) {
    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate(
            Screens.mealDetails.name,
            {mealId: id}
        );
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                onPress={selectMealItemHandler}
            >
                <View>
                    <Image
                        source={{uri: imageURL}}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
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
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});
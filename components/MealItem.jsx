import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export default function MealItem({title, imageURL, duration, complexity, affordability}) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{uri: imageURL}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <Text>{duration}m</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    }
});
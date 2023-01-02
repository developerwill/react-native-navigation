import {Pressable, StyleSheet, Text, View} from "react-native";

export default function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable
                android_ripple={{color: '#FFFFFF91'}}
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: 'hidden',
        backgroundColor: 'white' // For the shadow to be displayed we need to set a background color
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.75
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
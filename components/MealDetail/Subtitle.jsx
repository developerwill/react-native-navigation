import {StyleSheet, Text, View} from "react-native";

export default function Subtitle({title}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        textAlign: 'center',
        color: '#b7856e'
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginTop: 4,
        marginBottom: 16,
        borderColor: 'black',
        borderBottomWidth: 2
    }
});
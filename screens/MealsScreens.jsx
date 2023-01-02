import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";

export default function MealsScreens(/*{route}*/){
    // Method with prop route. This only works if the component is a Stack.Screen
    // const categoryId = route.params.categoryId;
    const route = useRoute();
    const categoryId = route.params.categoryId;

    return (
      <View style={styles.container}>
          <Text>Meals Screen - {categoryId}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
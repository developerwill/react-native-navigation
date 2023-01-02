import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

export default function MealsScreens(){
    return (
      <View style={styles.container}>
          <Text>Meals Screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
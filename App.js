import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {screensNames} from "./screens/ScreenNames";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreens from "./screens/MealsScreens";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style={'auto'}/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={screensNames.categories} component={CategoriesScreen}/>
                    <Stack.Screen name={screensNames.meals} component={MealsScreens}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});

import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {defaultScreenOptions} from "./data/defaultScreenOptions";
import {Screens} from "./data/ScreenNames";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreens from "./screens/MealsScreens";
import MealDetailsScreens from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style={'light'}/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={defaultScreenOptions}>
                    <Stack.Screen
                        name={Screens.mealsCategories.name}
                        component={CategoriesScreen}
                        options={Screens.mealsCategories.options}
                    />
                    <Stack.Screen
                        name={Screens.meals.name}
                        component={MealsScreens}
                    />
                    <Stack.Screen
                        name={Screens.mealDetails.name}
                        component={MealDetailsScreens}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

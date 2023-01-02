import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Screens} from "./screens/ScreenNames";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreens from "./screens/MealsScreens";
import {defaultScreenOptions} from "./screens/defaultScreenOptions";

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
                        options={{
                            title: Screens.meals.options.title
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});

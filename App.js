/* Redux */
import {Provider} from "react-redux";
import {store} from "./store/redux/store";

import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {defaultScreenOptions} from "./data/defaultScreenOptions";
import {Screens} from "./data/ScreenNames";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreens from "./screens/MealsScreens";
import MealDetailsScreens from "./screens/MealDetailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {defaultDrawerOptions} from "./data/defaulDrawerOptions";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={defaultDrawerOptions}>
            <Drawer.Screen
                name={Screens.mealsCategoriesDrawer.name}
                component={CategoriesScreen}
                options={Screens.mealsCategoriesDrawer.options}
            />
            <Drawer.Screen
                name={Screens.favoriteMeals.name}
                component={FavoritesScreen}
                options={Screens.favoriteMeals.options}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style={'light'}/>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={defaultScreenOptions}>
                        <Stack.Screen
                            name={Screens.mealsCategories.name}
                            component={DrawerNavigator}
                            options={Screens.mealsCategories.options}
                        />
                        <Stack.Screen
                            name={Screens.meals.name}
                            component={MealsScreens}
                        />
                        <Stack.Screen
                            name={Screens.mealDetails.name}
                            component={MealDetailsScreens}
                            options={{title: 'About the Meal'}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}

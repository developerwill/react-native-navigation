import {Ionicons} from "@expo/vector-icons";

export const Screens = {
    mealsCategories: {
        name: "mealsCategories",
        options : {
            title: "All Categories",
            headerShown: false
        }
    },
    meals: {
        name: "meals"
    },
    mealDetails: {
        name: "mealDetails",
        options : {
            title: "About Meal"
        }
    },
    mealsCategoriesDrawer: {
        name: "mealsCategoriesDrawer",
        options : {
            title: "All Categories",
            drawerIcon: ({color, size}) => (
                <Ionicons name={'list'} color={color} size={size}/>
            )
        }
    },
    favoriteMeals: {
        name: "favoriteMeals",
        options : {
            title: "Favorite Meals",
            drawerIcon: ({color, size}) => (
                <Ionicons name={'star'} color={color} size={size}/>
            )
        }
    }
}
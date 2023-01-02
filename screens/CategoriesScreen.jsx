import {CATEGORIES} from '../data/dummy-data';
import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import {Screens} from "../data/ScreenNames";

// We could use ScrollView also since there aren't many categories and the list isn't dynamic
function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        const pressHandler = () => {
            navigation.navigate(
                Screens.meals.name,
                {categoryId: itemData.item.id}
            );
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id }
            renderItem={renderCategoryItem}
            numColumns={2} // Forces to render 2 columns instead of 1
        />
    );
}

export default CategoriesScreen;
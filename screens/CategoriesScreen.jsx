import {CATEGORIES} from '../data/dummy-data';
import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

/*
* We could use ScrollView also since there aren't many categories and the list isn't dynamic
*/

function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

export default function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id }
            renderItem={renderCategoryItem}
            numColumns={2} // Forces to render 2 columns instead of 1
        />
    );
}
import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../../components/CategoryGridTile";


function CategorieScreen ({setColor}) {
    function renderCategoryItem(itemData) {
        return <CategoryGridTile title = {itemData.item.title} color= {itemData.item.color} id={itemData.item.id} setColor={setColor}/>
    }

return (
    <View style={styles.container}>
    <FlatList data = {CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
    </View>
)
}

export default CategorieScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})
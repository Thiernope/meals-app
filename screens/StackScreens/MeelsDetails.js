import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../../data/dummy-data";
import MealItem from "../../components/MealItem";

   

function MealsDetails () {
    const route = useRoute();
    const catId = route.params.categoryId;
    const color = route.params.color;
    const itemHandler = (itemData) => {
        const item = itemData.item;
        return <MealItem 
        title= {item.title} 
        id={item.id} 
        imageUrl={item.imageUrl} 
        color={color}
        duration={item.duration } 
        complexity={item.complexity} 
        affordability={item.affordability}/>
       }
    const AllMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));
    
return (
    <FlatList data = {AllMeals} keyExtractor={(item) => item.id} renderItem={itemHandler} />
)
}

export default MealsDetails;
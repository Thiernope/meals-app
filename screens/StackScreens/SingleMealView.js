import { ScrollView, Text, StyleSheet, Image } from "react-native"
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../../ui/MealDetails";
import Subtitle from "../../ui/Subtitle";
import List from "../../ui/List";
import { useLayoutEffect } from "react";
import AlertComp from "../../components/AlertComp";


function SingleMealView ({navigation}) {
    useLayoutEffect(() => {
     navigation.setOptions({
        headerRight: () => <AlertComp/>
     })
    },[])

   const route = useRoute();
   const mealId = route.params.mealId;
   const color = route.params.color;
   const meal = MEALS.find(meal => meal.id === mealId);
    return(
        <ScrollView style={styles.container}>
            <Image source={{uri: meal.imageUrl}}  style={styles.image}/>
            <Text style={styles.title}>{meal.title}</Text>

            <MealDetails duration= {meal.duration} complexity= {meal.complexity} affordability={meal.affordability}/>
            <Subtitle color={color}>Ingredient</Subtitle>
            <List data={meal.ingredients} color={color}/>
            <Subtitle color={color}>Steps</Subtitle>
            <List data={meal.steps}  color={color}/>
        </ScrollView>
    )
}

export default SingleMealView;

const styles = StyleSheet.create({
    container: {
     flex: 1
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        margin: 30,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center"
    }
})
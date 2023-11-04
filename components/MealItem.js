import { View, Text, Pressable, Image, StyleSheet, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../ui/MealDetails";


function MealItem ({title, id, imageUrl, duration, complexity, affordability, categoryId, color}) {
    const navigation = useNavigation();
    function handleNavigate() {
        navigation.navigate("singleMealView", {mealId: id, categoryId: categoryId, title: title, color: color})
    }
 return (
    <View style={styles.mealItem}>
        <View style={styles.innerContainer}>
        <Pressable android_ripple={{color: "lightgray"}} style={({pressed}) => pressed? styles.pressedCard: null} onPress={handleNavigate}>
         <Image source={{uri: imageUrl}} style={styles.image}/>
         <Text style={styles.title}>{title}</Text>
         <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </Pressable>
        </View>
    </View>
 )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },

    mealItem: {
     margin: 20,
     borderRadius: 8,
     backgroundColor: "white",
     elevation: 4,
     overflow: Platform.OS === "android" ? "hidden": "visible",
     shadowColor: "gray",
     shadowOffset: {width: 0, height: 2},
     shadowOpacity: 0.5,
     shadowRadius: 8
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    title: {
        margin: 8,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center"
    },
    pressedCard: {
        opacity: 0.5
    }
});
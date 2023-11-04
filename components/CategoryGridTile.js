import { View, Text, Pressable, StyleSheet, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";


function CategoryGridTile ({title, color, id}) {
  const navigation   = useNavigation();
  
  const navigateHandler = () => {
    navigation.navigate("MealsDetails", {categoryId: id, title: title, color: color});
  }

  return (
    <View style={styles.gridItem}>
        <Pressable android_ripple={{color: "lightgray"}} style={({pressed}) => [styles.pressableButton, pressed? styles.pressedButton: null]} onPress={navigateHandler}>
            <View style={[styles.innerContainer, { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}


export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
     flext: 1,
     margin: 16,
     width: 150,
     height: 150,
     backgroundColor: "white",
     elevation: 4,
     borderRadius: 8,
     shadowColor: "gray",
     shadowOffset: {width: 0 , height: 1 },
     shadowOpacity: 0.2,
     shadowRadius: 8,
     overflow: Platform.OS === "android"? "hidden": "visible"
    },
    pressableButton: {
        flex: 1
    },
    innerContainer: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     borderRadius: 8
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    pressedButton: {
        opacity: 0.5
    }
})
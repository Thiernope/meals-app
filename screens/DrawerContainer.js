import { createDrawerNavigator } from "@react-navigation/drawer";
import CategorieScreen from "./StackScreens/CategorieScreen";
import FavoritesScreen from "./DrawersScreens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator screenOptions={{
        drawerStyle: { width: "100%"}
    }}>
        <Drawer.Screen name="allMeals" component={CategorieScreen} options={{
            title: "Meals Categories",
            drawerLabel: "All",
            drawerIcon: ({color, size}) => <Ionicons name="pizza" color={color} size={size}/>
        }}/>
        <Drawer.Screen name="favorite" component={FavoritesScreen} options={{
            title: "Favorites",
            drawerLabel: "Favorites",
            drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}/>
        }}/>
    </Drawer.Navigator>
  )
}

export default DrawerContainer
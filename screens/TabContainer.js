import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTab = createBottomTabNavigator();
import DeleverieScreen from "./TabScreens/DeleveliesScreen";
import OrdersScreen from "./TabScreens/OrdersScreen";
import { Ionicons } from "@expo/vector-icons";
import DrawerContainer from "./DrawerContainer";

const TabContainer = () => (
<BottomTab.Navigator>
    <BottomTab.Screen name="meals" component={DrawerContainer} options={{
        tabBarIcon: ({color, size }) => <Ionicons name="pizza" color={color} size={size}/>,
        headerShown: false
    }}/>
    <BottomTab.Screen name="orders" component={DeleverieScreen} options={{
        tabBarIcon: ({color, size}) => <Ionicons name="cart" color={color} size={size}/>,
        tabBarLabel: "Orders",
        title: "All Orders"
    }}/>
    <BottomTab.Screen name="delivered" component={OrdersScreen} options = {{
        tabBarIcon: ({color, size}) => <Ionicons name="car" color={color} size={size}/>,
        tabBarLabel: "Delivered",
        title: "Delivered Meals"
    }}/>
</BottomTab.Navigator>
)

export default TabContainer
import MealsDetails from './StackScreens/MeelsDetails';
import SingleMealView from './StackScreens/SingleMealView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabContainer from './TabContainer';

const Stack = createNativeStackNavigator();


const StackScreensContainer = () =>  (
    <Stack.Navigator screenOptions={{
        headerTintColor: "black"
      }}>
        <Stack.Screen name="Categories" component={TabContainer} 
         options={{
            headerShown: false
         }}
        />
        <Stack.Screen name="MealsDetails" component={MealsDetails} 
          options={({route, navigation})=> {
          const title = route.params.title;
          const color = route.params.color;
    
          return{
            title,
            headerStyle: {backgroundColor: color},
          }
        }}
        />
        <Stack.Screen name="singleMealView" component={SingleMealView} options={({route}) => {
          const title = route.params.title;
          const color = route.params.color;
          return {
            title,
            headerStyle: {backgroundColor: color}
          }
        }}/>
      </Stack.Navigator>
)

export default StackScreensContainer;
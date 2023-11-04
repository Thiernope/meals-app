
import 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import Home from './screens/Home';
import StackScreensContainer from './screens/StackScreenContainer';

export default function App() {
  const [isLoggedIn, setIsiLogined ] = useState(false);
  return (
    <>
    <StatusBar style="dark"/>
     {isLoggedIn?    <NavigationContainer>
      <StackScreensContainer/>
     </NavigationContainer>: 
     <Home setIsiLogined ={setIsiLogined }/>
     }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
});

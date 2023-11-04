import {View, Text, Button, StyleSheet } from "react-native";


const Home = ({setIsiLogined}) => {
    const authHandler = () => {
        setIsiLogined(true)
    }
  return (
    <View style={styles.container}>
        <Text>Find your favorate meal</Text>
        <Button title="Get Started" onPress={authHandler}/>
    </View>
  )
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
import {View, Text, StyleSheet } from "react-native";


const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
        <Text>All ordered meals will be listed here</Text>
    </View>
  )
}

export default FavoritesScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
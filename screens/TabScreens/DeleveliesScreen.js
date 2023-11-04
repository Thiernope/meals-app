import {View, Text, StyleSheet } from "react-native";


const DeleverieScreen = () => {
  return (
    <View style={styles.container}>
        <Text>All delevered Meals will be listed here</Text>
    </View>
  )
}

export default DeleverieScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
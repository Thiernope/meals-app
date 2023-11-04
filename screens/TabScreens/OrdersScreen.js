import {View, Text, StyleSheet } from "react-native";


const OrdersScreen = () => {
  return (
    <View style={styles.container}>
        <Text>All ordered meals will be listed here</Text>
    </View>
  )
}

export default OrdersScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
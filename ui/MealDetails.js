import { View, Text, StyleSheet } from "react-native";

function MealDetails ({duration, complexity, affordability }) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
         </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    detailItem: {
        margin: 4,
        color: "black"
    },
})


export default MealDetails;
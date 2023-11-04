import { View, Text, StyleSheet } from "react-native";


function List ({data, color}) {
    return data.map((dataPoint, index) => <View key={index} style={[styles.item, {backgroundColor: color}]}>
        <Text style={styles.itemText}>{dataPoint}</Text>
    </View>)
}

export default List;


const styles = StyleSheet.create({
    item: {
        backgroundColor: "green",
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8
    },

    itemText: {
        fontSize: 18,
        textAlign: "center",
    }
})
import { View, Text, StyleSheet } from "react-native";

function Subtitle({children, color}) {
    return<View style={[styles.outerContainer, {color: color, borderBottomColor: color }]}>
        <Text style={[styles.subTitle, {color: color}]}>{children}</Text>
        </View>
}

export default Subtitle;

const styles = StyleSheet.create({
    outerContainer: {
        borderBottomColor: "green",
        borderBottomWidth: 2,
        margin: 20,
    },
    subTitle: {
        padding: 20,
        color: "green",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    }
})
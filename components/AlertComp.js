import {View, Text, Alert, Pressable, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const showAlert = () => {
    Alert.alert("Oops", "This functionality is not there yet, Bare with us now 😋!!", [{text: "ok", style: "cancel"}])
}

function AlertComp() {
    return(
        <View style={styles.container}>
        <Pressable onPress={showAlert} android_ripple={{color: "gray"}} style={({pressed}) => pressed? styles.pressedBtn : styles.innerContainer}>
            <Ionicons name="car" size={20} color="white"/>
            <Text style={styles.btnText}>Order</Text>
        </Pressable>
    </View>
    )
}


export default AlertComp;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 100,
        backgroundColor: "black",
        maxWidth: 80,
        overflow: Platform.OS === "android"? "hidden": "visible",
        elevation: 4
    },

    btnText: {
        color: "white",
        textAlign: "center",
        paddingVertical: 10,
        marginLeft: 5
    },
    pressedBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.5
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})
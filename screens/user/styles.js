import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewInput:{
        flexDirection: "column",
        gap: 10,
        marginTop: 10
    },
    textInput:{
        padding: 10,
        borderColor: "gray",
        borderWidth: 1
    },
    pressableText:{
        backgroundColor: "white",
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40,
        padding: 10,
    },
    pressableView:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
        gap: 8,
    },
    textOldPricePressable:{
        color: "red",
        fontSize: 20,
        textDecorationLine: "line-through",
    },
    textFinalSteps:{
        backgroundColor: "#007FFF",
        padding: 10,
        borderRadius: 5
    },
    textFinalStep:{
        textAlign: "center",
        color: "white",
        fontSize: 15
    }
});
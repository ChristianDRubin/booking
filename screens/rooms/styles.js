import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textPayProperty:{
        marginTop: 3,
        fontSize: 16
    },
    textFreeCancellation:{
        marginTop: 3,
        color: "green",
        fontSize: 16
    },
    textPressableHeaderRoom:{
        margin: 10,
        backgroundColor: "white",
        padding: 10
    },
    
    textViewHeaderRoom:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textItemName:{
        color: "#007FFF",
        fontSize: 17,
        fontWeight: "500"
    },
    textPressableSelected:{
        borderColor: "#318CE7",
        backgroundColor: "#F0F8FF",
        borderWidth: 2,
        width: "100%",
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    textTextSelected:{
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#318CE7",
        fontWeight: "bold",
        fontSize: 16,
    },
    textPressableSelect:{
        borderColor: "#007FFF",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
    },
    textTextSelect:{
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16,
        color: "#007FFF",
    },
    textPressableReserve:{
        backgroundColor: "#007FFF",
        padding: 8,
        marginBottom: 30,
        borderRadius: 3,
        marginHorizontal: 15
    },
    textTextPressableReserve:{
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    }
    
});
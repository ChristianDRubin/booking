import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerView:{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    headerPressable:{
        flexDirection: "row",
        alignItems: "center",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 25,
        padding: 8,
    },
    headerPressable2:{
        flexDirection: "row",
        alignItems: "center",
    },
    headerPressableText:{
        marginLeft: 8,
        fontWeight: "bold",
        color: "white",
        fontSize: 12,
    },
});
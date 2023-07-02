import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerPlaces:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        padding: 12,
        backgroundColor: "white",
    },
    sortPressable:{
        flexDirection: "row",
        alignItems: "center"
    },
    textSortIcon:{
        fontSize: 15,
        fontWeight: "500",
        marginLeft: 8
    },
    scrollview:{
        backgroundColor: "#F5F5F5"
    },
    footerModalPressable:{
        paddingRight: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: 10,
        marginBottom:30
    },
    modalContent:{
        width: "100%",
        height: 280
    },
    viewContent:{
        flexDirection: "row"
    },
    viewContentText:{
        marginVertical: 10,
        flex: 2,
        height: 280,
        borderRightWidth: 1,
        borderColor: "#E0E0E0"
    },
    viewText:{
        textAlign: "center"
    },
    viewHeader:{
        flex: 3,
        margin: 10
    },
    filterMapPressable:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    itemFilter:{
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 6
    },
});
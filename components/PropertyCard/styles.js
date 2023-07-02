import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
    image:{
        height: height / 4,
        width: width - 280
    },
    pressableNav:{
        margin: 15,
        flexDirection: "row",
        backgroundColor: "white"
    },
    viewFavorites:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    favoritesText:{
        width: 200
    },
    viewStars:{
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 7,
    },
    viewGeniusLevel:{
        backgroundColor: "#6CB4EE",
        paddingVertical: 3,
        borderRadius: 5,
        width: 100
    },
    viewTextGeniusLevel:{
        textAlign: "center",
        color: "white",
        fontSize: 15
    },
    viewPrices:{
        width: 210,
        marginTop: 6,
        color: "gray",
        fontWeight: "bold"
    },
    viewPricesNight:{
        marginTop: 4,
        fontSize: 15,
        fontWeight: "500"
    },
    viewText2:{
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    viewText3:{
        color: "red",
        fontSize: 18,
        textDecorationLine: "line-through"
    },
    viewText4:{
        backgroundColor: "#6082B6",
        paddingVertical: 2,
        marginTop: 2,
        borderRadius: 5,
        width: 150,
        paddingHorizontal: 3
    },
    viewText5:{
        textAlign: "center",
        color: "white"
    },
});
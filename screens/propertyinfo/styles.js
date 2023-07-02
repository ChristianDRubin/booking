import { StyleSheet } from 'react-native';
import { pixelNormalize } from '../../utils/functions';

export const styles = StyleSheet.create({
    pressableProperty:{
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10
    },
    imageStyles:{
        width: 120,
        height: pixelNormalize(80),
        borderRadius: pixelNormalize(4),
    },
    pressableMostrarMas:{
        alignItems: "center",
        justifyContent: "center"
    },
    textMostrarMas:{
        textAlign: "center",
        marginLeft: 20
    },
    viewBottom:{
        marginHorizontal: 12,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    pressableViewTextPropertyInfo:{
        backgroundColor: "#17B169",
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 6,
    },
    pressableView2:{
        backgroundColor: "#003580",
        paddingVertical: 3,
        borderRadius: 5,
        width: 100,
    },
    geniusText:{
        textAlign: "center",
        color: "white",
        fontSize: 13,
        fontWeight: "400"
    },
    pressableTextTravelSustentable:{
        color: "white",
        fontSize: 13
    },
    pressableViewTextConfirmation2:{
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 7
    },
    viewStats:{
        margin: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 60,
    },
    pressableViewTextConfirmation:{
        fontSize: 25,
        fontWeight: "bold"
    },
    pressableViewTextConfirmation2:{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 12,
        marginTop: 4,
        gap: 8,
    },
    pressableTextCheckInOut:{
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 3
    },
    pressableTextDates:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#007FFF"
    },
    textSeleccionarDisponibilidad:{
        textAlign: "center",
        color: "white",
        fontWeight:"bold",
        fontSize:17
    },
    ButtonConfirmation:{
        backgroundColor: "#6CB4EE",
        position: "absolute",
        bottom: 20,
        padding: 15,
        width:"95%",
        marginHorizontal:10
    },
    textComodidades:{
        borderColor: "#E0E0E0",
        borderWidth: 3,
        height: 1,
        marginTop: 15
    },
    textComodidades2:{
        marginHorizontal: 12,
        marginTop: 7,
        backgroundColor: "green",
        paddingHorizontal: 4,
        paddingVertical: 5,
        width: 78,
        borderRadius: 4,
    },
    discountText:{
        textAlign: "center",
        color: "white"
    },
    textPrecioPorNoche:{
        marginTop: 10,
        fontSize: 17,
        fontWeight: "500",
        marginHorizontal: 12,
    },
    textOldPrices:{
        color: "red",
        fontSize: 20,
        textDecorationLine: "line-through",
    },
    viewComodidades:{
        margin: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 60,

    },
});
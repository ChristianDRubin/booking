import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    destination:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15
    },
    selectedDates:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15
    },
    datepicker:{
        width: 350,
        height: 30,
        borderRadius: 0,
        borderWidth: 0,
        borderColor: "transparent"
    },
    roomsAndGuests:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15
    },
    searchButton:{
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15,
        backgroundColor: "#2a52be"
    },
    textButton:{
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
        color: "white"
    },
    modalButton:{
        marginBottom: 20,
        color: "white",
        backgroundColor: "#003580"
    },
    modalContentHeader:{
        width: "100%",
         height: 310
    },
    modalContentView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15
    },
    modalContentTextHeader:{
        fontSize: 16,
        fontWeight: "500"
    },
    modalContentPresableMinusHeader:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    modalContentPresableMinus:{
        width: 26,
        height: 26,
        borderRadius: 13,
        borderColor: "#BEBEBE",
        backgroundColor: "#E0E0E0"
    },
    modalContentPresableTextMinus:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        paddingHorizontal: 6
    },
    scrollViewView:{
        margin: 20,
        borderColor: "#FFC72C",
        borderWidth: 3,
        borderRadius: 6
    },
    bannerText:{
        marginHorizontal:20,
        fontSize:17,
        fontWeight:"500"
    },
    bannerPressable:{
        width:200,
        height:150,
        marginTop:10,
        backgroundColor:"#003580",
        borderRadius:10,
        padding:20,
        marginHorizontal:10
    },
    bannerTextPressables:{
        color:'white',
        fontSize:15,
        fontWeight:"bold",
        marginVertical:7
    },
    bannerPressable3er:{
        width:200,
        height:150,
        marginTop:10,
        borderColor:"#E0E0E0",
        borderWidth:2,
        borderRadius:10,
        padding:20,
        marginHorizontal:10
    },
    bannerTextPressables3er:{
        fontSize:15,
        fontWeight:"bold",
        marginVertical:7
    },
});
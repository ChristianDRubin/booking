import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    destination:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15,
    },
    selectedDates:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15,
    },
    datepicker:{
        width: 350,
        height: 30,
        borderRadius: 0,
        borderWidth: 0,
        borderColor: "transparent",
    },
    roomsAndGuests:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15,
    },
    searchButton:{
        paddingHorizontal: 10,
        borderColor: "#FFC72C",
        borderWidth: 2,
        paddingVertical: 15,
        backgroundColor: "#2a52be",
    },
    textButton:{
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
        color: "white",
    },
    modalButton:{
        marginBottom: 20,
        color: "white",
        backgroundColor: "#003580",
    },
});
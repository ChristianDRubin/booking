import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeAreaViewRegister:{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center"
    },
    keyboardAvoidingViewRegister:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },
    textRegister:{
        color: "#003580",
        fontSize: 17,
        fontWeight: "700"
    },
    textRegisterAccount:{
        marginTop: 15,
        fontSize: 18,
        fontWeight: "500"
    },
    textfieldsRegister:{
        fontSize: 18,
        fontWeight: "600",
        color: "gray"
    },
    textInputRegister:{
        fontSize: 18,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 300,
    },
    textRegisterButton:{
        textAlign: "center",
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
    pressableRegister:{
        width: 200,
        backgroundColor: "#003580",
        padding: 15,
        borderRadius: 7,
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto"
    },
    textAllReadyAccount:{
        textAlign: "center",
        color: "gray",
        fontSize: 17
    }
});
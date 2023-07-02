import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeAreaViewLogin:{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center"
    },
    keyboardAvoidingViewLogin:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },
    textSignIn:{
        color: "#003580",
        fontSize: 17,
        fontWeight: "700"
    },
    textSignInAccount:{
        marginTop: 15,
        fontSize: 18,
        fontWeight: "500"
    },
    textfieldsLogin:{
        fontSize: 18,
        fontWeight: "600",
        color: "gray"
    },
    textInputLogin:{
        fontSize: 18,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 300,
    },
    textLoginButton:{
        textAlign: "center",
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
    pressableLogin:{
        width: 200,
        backgroundColor: "#003580",
        padding: 15,
        borderRadius: 7,
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto"
    }
});
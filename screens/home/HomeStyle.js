import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        marginTop: 50,
        flex:1
    },
    locationView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    locationText: {
        fontSize: 18,
        fontWeight: '600',
    },
    locationImg: {
        marginLeft: 'auto',
        marginRight: 7,
    },
    imgStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 0.2,
    },
    searchView: {
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.8,
        borderColor: "#c0c0c0",
        borderRadius: 7
    },

})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        margin: 14
    },
    img: {
        width: 70,
        height: 70,
    },
    itemname: {
        width: 83,
        fontSize: 17,
        fontWeight: '500',
        marginBottom: '2%'
    },
    itemprice: {
        width: 60,
        color: 'gray',
        fontSize: 15
    },
    addtocartView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    minus: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderColor: "#BEBEBE",
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignContent: 'center'
    },
    minustext: {
        fontSize: 20,
        color: "#088F8F",
        paddingHorizontal: 6,
        fontWeight: '600',
        textAlign: 'center',
        top: -1
    },
    quantitytext: {
        fontSize: 19,
        color: '#088f8f',
        paddingHorizontal: 8,
        fontWeight: '600'
    },
    increView: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderColor: '#BEBEBE',
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    plus: {
        fontSize: 20,
        color: '#088F8F',
        paddingHorizontal: 6,
        fontWeight: '600',
        textAlign: 'center',
        top: -1

    },
    addText: {
        borderBlockColor: 'gray',
        borderWidth: 0.8,
        marginVertical: 10,
        color: '#088f8f',
        textAlign: 'center',
        padding: 5,
        borderRadius: 4,
        fontSize: 17,
        fontWeight: 'bold'
    }
})
import { Alert, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { decrementQty, deleteCart, incrementQty } from '../../redux/CartReducer';
const CartScreen = () => {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    console.log('cart is ', cart);
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
    const IncreamentQuantity = () => {
        dispatch(incrementQty(item)) //cart Increment
    }
    const DecrementQuantity = () => {
        dispatch(decrementQty(item)) //cart decrement
    }
    return (
        <>
            <ScrollView style={{ marginTop: 50 }}>
                {
                    total == 0 ?
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                marginTop: 40
                            }}>Your cart is empty</Text>
                        </View>
                        :
                        <>
                            <View style={{
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <AntDesign
                                    onPress={() => {
                                        navigation.goBack()
                                    }}
                                    name="arrowleft" size={24} color="black" />
                                <Text>Your Bucket</Text>
                            </View>
                            <Pressable
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 12,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    padding: 14,
                                }}
                            >
                                {
                                    cart.map((item, index) => (
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginVertical: 10

                                            }}
                                            key={index}>
                                            <Text style={{ width: 100, fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
                                            {/* + - button */}
                                            <View style={{ width: 180, alignItems: 'center' }}>
                                                <Pressable
                                                    style={styles.addtocartView}
                                                >
                                                    <Pressable
                                                        onPress={() => { dispatch(decrementQty(item)) }}
                                                        style={styles.minus}>
                                                        <Text
                                                            style={styles.minustext}
                                                        >
                                                            -
                                                        </Text>
                                                    </Pressable>
                                                    <Pressable>
                                                        <Text
                                                            style={styles.quantitytext}
                                                        >
                                                            {item.quantity}
                                                        </Text>
                                                    </Pressable>
                                                    <TouchableOpacity
                                                        onPress={() => { dispatch(incrementQty(item)) }}
                                                        style={styles.increView}
                                                    >
                                                        <Text
                                                            style={styles.plus}
                                                        >
                                                            +
                                                        </Text>
                                                    </TouchableOpacity>
                                                </Pressable>
                                            </View>
                                            <Text style={{ width: 100, fontSize: 16, fontWeight: '500', alignSelf: 'auto' }}>{'\u20B9'}{item.price * item.quantity}</Text>
                                        </View>
                                    ))
                                }
                            </Pressable>
                        </>
                }
            </ScrollView>

            {total !== 0 &&
                <Pressable
                    style={{
                        backgroundColor: '#088F8F',
                        padding: 10,
                        marginBottom: 40,
                        margin: 15,
                        borderRadius: 7,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: 'white',

                        }}>{cart.length} items | {'\u20B9'}{total}</Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                marginVertical: 6
                            }}
                        >checkout for order</Text>
                    </View>

                    <Pressable
                        onPress={() => Alert.alert('Order Successfull !',
                            'Thank you for Ordering Our Partner will be reach out soon to pick your clothes!',
                            [
                                {
                                    text: 'Thank You',
                                    onPress: () => {
                                        dispatch(deleteCart());
                                        navigation.replace('Home')
                                    }
                                }
                            ]
                        )}
                    >
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: 'white'
                        }}>CheckOut</Text>
                    </Pressable>
                </Pressable>
            }
        </>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    addtocartView: {
        width: 100,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 0.7,
        borderRadius: 7,
        alignItems: 'center',
        borderColor: '#BEBEBE',
    },
    minus: {
        width: 26,
        height: 26,
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
    increView: {
        width: 26,
        height: 26,
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
    quantitytext: {
        fontSize: 19,
        color: '#088f8f',
        paddingHorizontal: 8,
        fontWeight: '600'
    },
})
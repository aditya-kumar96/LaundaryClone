import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, decrementQty, incrementQty } from '../../redux/CartReducer'
import { decrementQuantity, incrementQuantity } from '../../redux/ProductReducer'
import { styles } from './DressItemStyle'

const DressItem = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)

    const addItemToCart = () => {
        dispatch(addtocart(item));
        dispatch(incrementQuantity(item)) //Product Increment
    }
    const IncreamentQuantity = () => {
        dispatch(incrementQty(item)) //cart Increment
        dispatch(incrementQuantity(item)) //Product Increment
    }
    const DecrementQuantity = () => {
        dispatch(decrementQty(item)) //cart decrement
        dispatch(decrementQuantity(item)) //cart Decrement
    }
    return (
        <View>
            <Pressable style={styles.container}>
                <View>
                    <Image style={styles.img} source={{ uri: item.image }} />
                </View>
                <View>
                    <Text style={styles.itemname}>{item.name}</Text>
                    <Text
                        style={styles.itemprice}
                    >	{'\u20B9'}{item.price}</Text>
                </View>
                {cart.some((i) => i.id == item.id) ?
                    (
                        <Pressable
                            style={styles.addtocartView}
                        >
                            <Pressable
                                onPress={DecrementQuantity}
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

                                onPress={IncreamentQuantity}
                                style={styles.increView}
                            >
                                <Text
                                    style={styles.plus}
                                >
                                    +
                                </Text>

                            </TouchableOpacity>

                        </Pressable>

                    ) :
                    (
                        <Pressable
                            onPress={addItemToCart}
                            style={{ width: 80 }}>
                            <Text style={styles.addText}>Add</Text>
                        </Pressable>

                    )

                }

            </Pressable>
        </View>
    )
}

export default DressItem

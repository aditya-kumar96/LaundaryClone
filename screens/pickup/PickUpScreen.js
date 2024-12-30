import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker'
import PickupTimeData, { deliveryTime, times } from '../../utils/rawdata/PickupTimeData'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const PickUpScreen = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState([]);
    const [selecteddeliveryTime, setSelectedDeliveryTime] = useState([]);

    const cart = useSelector((state) => state.cart.cart);
    console.log('cart is ', cart);
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);

    const proceedToCart = () => {
        if (!selectedDate || !selectedTime || !selecteddeliveryTime) {
            Alert.alert(
                'Select Time and Date',
                "Please fill all details",
                [
                    {
                        text: 'Cancel',
                        onPress: () => 'canceled'
                    },
                    {
                        text: 'Ok',
                        onPress: () => 'okay'
                    },
                    { cancenlable: false }
                ]
            )

        }
        if (selectedDate && selectedTime && deliveryTime) {
            navigation.replace("Cart")
        }
    }


    return (
        <>
            <SafeAreaView>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                        marginHorizontal: 10
                    }}
                >Enter Address </Text>
                <TextInput style={{
                    padding: 40,
                    borderColor: 'gray',
                    borderWidth: 0.7,
                    borderRadius: 9,
                    margin: 10
                }} />

                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginHorizontal: 10
                }}>
                    Pick Up Date
                </Text>

                <HorizontalDatepicker
                    mode="gregorian"
                    startDate={new Date('2024-12-20')}
                    endDate={new Date('2024-12-31')}
                    initialSelectedDate={new Date('2020-08-22')}
                    onSelectedDateChange={(date) => setSelectedDate(date)}
                    selectedItemWidth={170}
                    unselectedItemWidth={38}
                    itemHeight={38}
                    itemRadius={10}
                    selectedItemTextStyle={styles.selectedItemTextStyle}
                    unselectedItemTextStyle={styles.selectedItemTextStyle}
                    selectedItemBackgroundColor="#222831"
                    unselectedItemBackgroundColor="#ececec"
                    flatListContainerStyle={styles.flatListContainerStyle}
                />

                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginHorizontal: 10
                }}>
                    Select Time
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        times.map(item => (
                            <Pressable
                                key={item.id}
                                onPress={() => setSelectedTime(item.id)}
                                style={
                                    selectedTime === item.id ?
                                        {
                                            margin: 10,
                                            borderRadius: 7,
                                            marginHorizontal: 10,
                                            borderColor: 'gray',
                                            borderWidth: 0.7,
                                            padding: 15,
                                            backgroundColor: 'red'
                                        } :
                                        {
                                            margin: 10,
                                            borderRadius: 7,
                                            marginHorizontal: 10,
                                            borderColor: 'gray',
                                            borderWidth: 0.7,
                                            padding: 15
                                        }
                                }
                                accessible={true}
                                accessibilityLabel={`Select ${item.time}`}
                            >
                                <Text>{item.time}</Text>
                            </Pressable>
                        ))
                    }

                </ScrollView>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginHorizontal: 10
                }}>
                    Select Time
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        deliveryTime.map(item => (
                            <Pressable
                                key={item.id}
                                onPress={() => setSelectedDeliveryTime(item.id)}
                                style={
                                    selecteddeliveryTime === item.id ?
                                        {
                                            margin: 10,
                                            borderRadius: 7,
                                            marginHorizontal: 10,
                                            borderColor: 'gray',
                                            borderWidth: 0.7,
                                            padding: 15,
                                            backgroundColor: 'red'
                                        } :
                                        {
                                            margin: 10,
                                            borderRadius: 7,
                                            marginHorizontal: 10,
                                            borderColor: 'gray',
                                            borderWidth: 0.7,
                                            padding: 15
                                        }
                                }
                                accessible={true}
                                accessibilityLabel={`Select ${item.time}`}
                            >
                                <Text>{item.name}</Text>
                            </Pressable>
                        ))
                    }

                </ScrollView>



            </SafeAreaView>
            {total !== 0 &&
                <Pressable

                    style={{
                        backgroundColor: '#088F8F',
                        padding: 10,
                        marginBottom: 40,
                        marginTop: 'auto',
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
                        >extra charges might apply</Text>
                    </View>

                    <Pressable
                        onPress={() => proceedToCart()}
                    >
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: 'white'
                        }}>Proceed to Cart</Text>
                    </Pressable>

                </Pressable>
            }

        </>

    )
}

export default PickUpScreen

const styles = StyleSheet.create({})
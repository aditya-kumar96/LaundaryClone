import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './ServicesStyle';

const Services = () => {
    const services = [
        {
            id: "0",
            image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
            name: "Washing",

        },
        {
            id: "11",
            image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
            name: "Laundry"
        },
        {
            id: "12",
            image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
            name: "Wash & Iron",

        },
        {
            id: "13",
            image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
            name: "Cleaning",
        },

    ];


    return (
        <View style={styles.container}>
            <Text style={styles.serviceText}>Services Available</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {services.map((service, index) => (
                    <Pressable key={index} style={styles.servicename}>
                        <Image
                            source={{ uri: service.image }}
                            style={{ width: 70, height: 70 }}
                        />
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>{service.name}</Text>
                    </Pressable>
                ))}

            </ScrollView>
        </View>
    )
}

export default Services

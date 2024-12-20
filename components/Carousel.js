import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageSlider from '@coder-shubh/react-native-image-slider';
const Carousel = () => {
    const images = ["https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
        "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",]
    return (
        <View style={{
            height: 200,
            width: 'auto',
            justifyContent: 'center',
            alignItems: 'baseline',
            alignSelf: 'center'
        }}>
            <ImageSlider
                images={images}
                imageHeight={200}
                dotSize={8}
                dotColor='silver'
                activeDotColor='blue'
                showNavigationButtons={false}
                showIndicatorDots={true}
                imageLabel={false}
                label='Example Label'
                autoSlideInterval={7000}
                extrapolate='clamp'
                radius={7}
                containerStyle={{bottom:10,position:'absolute'}}
            />
        </View>
    )
}

export default Carousel
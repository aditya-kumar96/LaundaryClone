import { View, Text, Alert, SafeAreaView, Pressable, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import Entypo from '@expo/vector-icons/Entypo';
import { Feather } from '@expo/vector-icons'
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductReducer';

const HomeScreen = () => {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState('we are loading your location');
  const [locationServiceEnabled, setlocationServiceEnabled] = useState(false);
  useEffect(() => {
    checkIfLocaitonEnabled();
    getCurrentLocation();
  }, [])

  const cart = useSelector((state) => state.cart.cart);
  console.log('cart is ', cart);

  const checkIfLocaitonEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert('Location service are not enabled', 'Please enable the location ')
    }
    else {
      setlocationServiceEnabled(enabled)
    }
  }

  const getCurrentLocation = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Allow the app to use the location services ')
    }

    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude, longitude
      })
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`
        setdisplayCurrentAddress(address);
      }
    }
  }
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    if (product.length > 0) return
    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)))
    }
    fetchProducts();
  }, [])
  console.log('products', product);

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];




  return (
    <SafeAreaView
      style={{ backgroundColor: '#F0F0F0' }}
    >
      <ScrollView>
        {/* Location and Profile */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <Entypo name="location-pin" size={24} color="#fd5c63" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>
          <Pressable style={{ marginLeft: 'auto', marginRight: 7 }}>
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/ogw/AF2bZyhS4fDIVYAf34q6fr0SKFlbDiesU8NR6Rq2vrFtCzewLA=s32-c-mo", }}
              style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 0.2 }}
            />
          </Pressable>
        </View>
        {/* Search Bar  */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 0.8,
            borderColor: "#c0c0c0",
            borderRadius: 7
          }}>
          <TextInput placeholder='Search for item or more' />
          <Feather name='search' size={24} color="#fd5c63" />
        </View>
        {/* Slider Component */}
        <Carousel />
        {/* Services Component */}
        <Services />
        {/* Render all products */}
        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
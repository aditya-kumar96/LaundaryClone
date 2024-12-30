import { View, Text, Alert, SafeAreaView, Pressable, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import Entypo from '@expo/vector-icons/Entypo';
import { Feather } from '@expo/vector-icons'
import Carousel from '../../components/carousel/Carousel';
import Services from '../../components/services/Services';
import DressItem from '../../components/dressitem/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/ProductReducer';
import { styles } from './HomeStyle';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState('we are loading your location');
  const [locationServiceEnabled, setlocationServiceEnabled] = useState(false);
  useEffect(() => {
    checkIfLocaitonEnabled();
    getCurrentLocation();
  }, [])

  const cart = useSelector((state) => state.cart.cart);
  console.log('cart is ', cart);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);


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
    <>
      <ScrollView style={styles.container}>
        {/* Location and Profile */}
        <View style={styles.locationView}>
          <Entypo name="location-pin" size={24} color="#fd5c63" />
          <View>
            <Text style={styles.locationText}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>
          <Pressable style={styles.locationImg}>
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/ogw/AF2bZyhS4fDIVYAf34q6fr0SKFlbDiesU8NR6Rq2vrFtCzewLA=s32-c-mo", }}
              style={styles.imgStyle}
            />
          </Pressable>
        </View>
        {/* Search Bar  */}
        <View
          style={styles.searchView}>
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
      {total !== 0 &&
        <Pressable
          onPress={() => navigation.navigate('PickUp')}
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
            >extra charges might apply</Text>
          </View>

          <Pressable
            onPress={() => navigation.navigate('PickUp')}
          >
            <Text style={{
              fontSize: 17,
              fontWeight: '600',
              color: 'white'
            }}>Proceed to Pickup</Text>
          </Pressable>

        </Pressable>
      }

    </>
  )
}

export default HomeScreen
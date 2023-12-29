import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Armchair, Bed, Chair, Lamp, Popular, Table } from '../components/icons'

import { ProductTile, Category } from '../components/Home'
import { firebase } from '@react-native-firebase/firestore'
import Loader from '../components/Global/Loader'
import addToCart from '../Firebase/AddToCart'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Home = ({ navigation }) => {

    const [active, setActive] = useState(0)
    const [productsArray, setProductsArray] = useState([])
    const [originalArray, setOriginalArray] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        filterArray()
    }, [active, originalArray])


    useEffect(() => {

        const array = []
        firebase
            .firestore()
            .collection('products')
            .get()
            .then(response => {
                response.forEach(
                    (documentSnapshot) => {
                        array.push({
                            id: documentSnapshot.id,
                            ...documentSnapshot.data(),
                        }
                        )
                    })
                // console.log(array[0])
                setOriginalArray(array)
                filterArray()
                setIsLoaded(true)
            })

    }, [])


    const filterArray = () => {
        let array = originalArray

        // Alert.alert(JSON.stringify(array))/
        if (categories[active].type == 'popular') {
            array = array.sort((a, b) => b.rating - a.rating);
        }
        else {
            const productType = categories[active].type
            array = array.filter(item => {
                return item.type[productType] && item.type[productType] === true
            });
        }
        const finalArray = pairArray(array, 2)
        setProductsArray(finalArray)
    }


    const categories = [
        {
            label: 'Popular',
            icon: <Popular />,
            type: "popular"
        },
        {
            label: "Chair",
            icon: <Chair />,
            type: "is_chair"
        },
        {
            label: "Table",
            icon: <Table />,
            type: "is_table"
        },
        {
            label: "Armchair",
            icon: <Armchair />,
            type: "is_armchair"
        },
        {
            label: "Bed",
            icon: <Bed />,
            type: "is_bed"
        },
        {
            label: "Lamp",
            icon: <Lamp />,
            type: "is_lamp"
        },
    ]


    const pairArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };


    const goToProduct = (item) => {
        navigation.navigate("Product", { productData: item })
    }

    const getuserID = async () => {
        const user_id = await AsyncStorage.getItem("user_id")
        console.log("User ID Set == " + user_id);

        return user_id
    }

    const toCart = async (id) => {
        const user_id = await getuserID()
        // console.log("here with " + id);
        await addToCart(id, 1, user_id)
        ToastAndroid.showWithGravity("Item Added to Cart!", ToastAndroid.CENTER, 10)
    }

    return (

        <View style={styles.mainView} >
            {/* Categories Horizontal Bar */}
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.categoriesView}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={index}
                        style={[
                            styles.category,
                            // index == categories.length -1 ? styles.last : "",
                            index == 0 ? styles.first : ""
                        ]}
                        onPress={() => setActive(index)}
                    >

                        <Category
                            title={category.label}
                            active={index == active ? true : false}
                        >
                            {category.icon}
                        </Category>
                    </TouchableOpacity>
                ))}
                <View style={styles.spacer} ></View>
            </ScrollView>
            {/* Products Vertical  */}
            {isLoaded ?

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.productsView}
                >
                    {productsArray.map((pair, index) =>
                        pair.length % 2 == 0 ?
                            (
                                <View style={styles.horizontalView} key={index}>
                                    {pair.map((item, index2) => (
                                        <TouchableOpacity
                                            style={{ flex: 1 }}
                                            onPress={() => goToProduct(item)}
                                            key={index2}
                                        >
                                            <ProductTile
                                                title={item.name}
                                                price={item.price}
                                                image={item.images[0]}
                                                onAddToCart={() => toCart(item.id)}
                                            />
                                        </TouchableOpacity>

                                    ))}
                                </View>
                            ) : (
                                <View style={styles.horizontalView} key={index}>
                                    <TouchableOpacity
                                        style={{ flex: 1 }}
                                        onPress={() => goToProduct(pair[0])}
                                        key={pair.length - 1}
                                    >
                                        <ProductTile
                                            title={pair[0].name}
                                            price={pair[0].price}
                                            image={pair[0].images[0]}
                                            onAddToCart={() => toCart(pair[0].id)}
                                        />
                                    </TouchableOpacity>
                                    <View style={styles.emptyTile}></View>
                                </View>
                            )
                    )}
                    <View style={styles.verticalSpacer}></View>
                </ScrollView>
                :
                <Loader />
            }
        </View>

    )
}

export default Home


const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    categoriesView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 10,
        elevation: 5,

    },
    category: {
        marginHorizontal: 12.5,
        marginVertical: 5
    },
    first: {
        marginLeft: 0
    },
    last: {
        marginRight: 0
    },
    spacer: {
        width: 20
    },
    productsView: {
        paddingHorizontal: 20,
        // paddingTop: 10,

    },
    horizontalView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flex: 1,
        gap: 20,
        marginTop: 15
    },
    verticalSpacer: {
        height: 100
    },
    emptyTile: {
        flex: 1
    }
})
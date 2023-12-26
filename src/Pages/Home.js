import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Armchair, Bed, Chair, Lamp, Popular, Table } from '../components/icons'

import { ProductTile, Category } from '../components/Home'


const Home = ({ navigation }) => {

    const [active, setActive] = useState(0)
    const [productsArray,setProductsArray] = useState([])

    

    useEffect(()=>{
        let array = products
        
        // Alert.alert(JSON.stringify(array))/
        if (categories[active].type == 'popular') {
            array = array.sort((a, b) => a.rating - b.rating);
        }
        else{
            const type = categories[active].type
            array = array.filter(item => item[type] && item[type] === true);
        }
        const finalArray = pairArray(array,2)
        setProductsArray(finalArray)
        
    },[active])

    

    const products = [
        {
            title: "Black Simple Chair 1",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.1,
            is_chair : true
        },
        {
            title: "Black Simple Table 2",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.2,
            is_table : true
        },
        {
            title: "Black Simple Lamp 3",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.9,
            is_lamp:true,
        },
        {
            title: "Black Simple Bed 4",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.7,
            is_bed : true
        },
        {
            title: "Black Simple Bed 5",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 3.5,
            is_bed : true
        },
        {
            title: "Black Simple ArmChair 6",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.0,
            is_armchair:true
        },
        {
            title: "Black Simple Chair 7",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.6,
            is_chair : true
        },
        {
            title: "Black Simple Chair 8",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.9,
            is_chair : true
        },
        {
            title: "Black Simple Table 9",
            price: 12000,
            image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 3.5,
            is_table : true
        },
    ]



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



    return (

        <View style={styles.mainView}>
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
            {/* Categories Vertical  */}
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
                                        onPress={() => navigation.navigate("Product")}
                                        key={index2}
                                    >
                                        <ProductTile
                                            title={item.title}
                                            price={item.price}
                                            image={item.image}
                                        />
                                    </TouchableOpacity>

                                ))}
                            </View>
                        ) : (
                            <View style={styles.horizontalView} key={index}>
                                <TouchableOpacity
                                    style={{ flex: 1 }}
                                    onPress={() => navigation.navigate("Product")}
                                    key={pair.length - 1}
                                >
                                    <ProductTile
                                        title={pair[0].title}
                                        price={pair[0].price}
                                        image={pair[0].image}
                                    />
                                </TouchableOpacity>
                                <View style={styles.emptyTile}></View>
                            </View>
                        )
                )}
                <View style={styles.verticalSpacer}></View>
            </ScrollView>
        </View>

    )
}

export default Home


const styles = StyleSheet.create({
    categoriesView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 10,
        elevation: 5
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
        marginTop: 10
    },
    verticalSpacer: {
        height: 100
    },
    emptyTile:{
        flex:1
    }
})
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { Armchair, Bed, Chair, Lamp, Popular, Table } from '../components/icons'
import MyColors from '../styles/MyColors'
import { ProductTile, Category } from '../components/Home'


const Home = () => {

    const [active, setActive] = useState(0)

    const categories = [
        {
            label: 'Popular',
            icon: <Popular />
        },
        {
            label: "Chair",
            icon: <Chair />
        },
        {
            label: "Table",
            icon: <Table />
        },
        {
            label: "Armchair",
            icon: <Armchair />
        },
        {
            label: "Bed",
            icon: <Bed />
        },
        {
            label: "Lamp",
            icon: <Lamp />
        },
    ]

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
                <View style={styles.horizontalView}>
                    <TouchableOpacity style={{flex:1}}>
                        <ProductTile 
                            title={"Black Simple Lamp"} 
                            price={"12,000"} 
                        />
                    </TouchableOpacity>
                    <ProductTile title={"Black Simple Lamp"} price={"12,000"} />

                </View>
                <View style={styles.horizontalView}>
                    <ProductTile title={"Black Simple Lamp"} price={"12,000"} />
                    <ProductTile title={"Black Simple Lamp"} price={"12,000"} />

                </View>
                <View style={styles.horizontalView}>
                    <ProductTile title={"Black Simple Lamp"} price={"12,000"} />
                    <ProductTile title={"Black Simple Lamp"} price={"12,000"} />

                </View>

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
        marginBottom:5
    },
    category: {
        marginHorizontal: 12.5,
        marginVertical:5
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
    verticalSpacer:{
        height:100
    }
})
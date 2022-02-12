import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native'

import AddSign from "react-native-vector-icons/AntDesign"
import Item from "./Item"
import RNPickerSelect from 'react-native-picker-select';

const ExpensesList = ({ navigation, }) => {

    const [allExpenses, setAllExpenses] = useState([])



    useEffect(() => {
        axios.get("http://localhost:3000/")
            .then(
                (response) => {
                    setAllExpenses(response.data)

                }
            ).catch(
                (error) => {
                    console.log(`Error: ${error.message}`)
                }
            )
    }, [])


    const deleteItem = (id) => {

        axios.delete("http://localhost:3000/" + id)
            .then(
                () => { console.warn("deleted") }
            )
            .catch(
                (error) => { console.warn(error.message) }
            )

        console.warn("deleted")

    }



    return (


        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.YourExpensesHeader}>Your Expenses</Text>

                <TouchableOpacity onPress={() => (navigation.navigate("Add New"))}>
                    < Text style={styles.AddNew} > Add New < AddSign style={styles.plusSign} name="plus" /></Text>
                </TouchableOpacity>

            </View >


            <View style={styles.ItemSheader}>
                <Text style={styles.itemsHeading}>Items</Text>
                <Text style={styles.itemsHeading}>

                    Cost
                </Text>
                {/* <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '₵', value: '₵' },
                        { label: '$', value: '$' },
                        { label: '£', value: '£;' },
                        { label: '€', value: '€' },
                        { label: '¥', value: '¥' },

                    ]}
                /> */}
            </View>


            <FlatList

                data={allExpenses}
                keyExtractor={(item, index) => {
                    return index
                }}

                renderItem={({ item }) => (<Item item={item} deleteItem={deleteItem} />)}
                extraData={allExpenses}
            />


        </SafeAreaView >
    )
}

export default ExpensesList

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#337E86",
        height: "100%",
        color: "white"
    },

    header: {

        flexDirection: "row",
        justifyContent: "space-between",

    },

    ItemSheader: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
        paddingHorizontal: 50

    },

    itemsHeading: {
        color: "white"
    },

    YourExpensesHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },

    AddNew: {
        fontSize: 24,
        paddingHorizontal: 10,
        color: "white"
    },


    plusSign: {
        fontSize: 20
    },


})


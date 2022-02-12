import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const Item = ({ item, deleteItem, }) => {

    const navigation = useNavigation()


    return (
        <View style={styles.itemCostView}>
            <View style={styles.itemView}>
                <Text style={styles.items}>{item.item}</Text>
                <Text style={styles.createdAt} >createdAt:{item.createdAt} </Text>

                <View style={styles.btnsView} >
                    <TouchableOpacity style={styles.btnsView} onPress={() => (navigation.navigate("Edit", { id: item }))} >
                        <Text style={styles.btns}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnsView} onPress={() => (deleteItem(item._id))} >
                        <Text style={styles.btns}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.costView}>
                <Text style={styles.costs}>{item.cost}</Text>

            </View>


        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    header: {

        flexDirection: "row",
        justifyContent: "space-between"
    },

    ItemSheader: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
        paddingHorizontal: 50

    },

    YourExpensesHeader: {
        fontSize: 30,
        fontWeight: "bold"
    },

    AddNew: {
        fontSize: 24,
        paddingHorizontal: 10
    },

    itemsHeading: {
        fontSize: 20,
        fontWeight: "bold"
    },


    itemCostView: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 5,


    },

    itemView: {
        flex: 5,
        marginHorizontal: 8

    },

    costView: {
        flex: 1,
    },

    items: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },

    costs: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },

    btns: {
        fontSize: 15,
        marginHorizontal: 10,
        backgroundColor: "tomato",
        padding: 5,
        marginTop: 8,
        color: "white",
        fontWeight: "bold"

    },

    btnsView: {
        flexDirection: "row",

    },
    plusSign: {
        fontSize: 20
    },

    createdAt: {
        fontWeight: "bold"
    }
})

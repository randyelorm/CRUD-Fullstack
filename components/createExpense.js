import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, View, Image } from 'react-native'
import axios from 'axios'

const createExpense = ({ navigation }) => {

    const [item, setItem] = useState("")
    const [cost, setCost] = useState("")


    const handleSubmit = () => {

        const userInput = {
            item: item,
            cost: cost
        }

        axios.post("http://localhost:3000/create", userInput)
            .then(() => {

                navigation.navigate("ExpensesScreen")
            })
            .catch((error) => { console.warn(error.message) })



    }



    return (
        <SafeAreaView style={styles.Views}>

            <View style={styles.ImageView}>
                <Image source={require("../assets/money.gif")} style={{ width: 300, height: 300 }} />
            </View>

            <View style={styles.InputContainer}>
                <Text style={styles.Header}>Add New </Text>
                <View style={styles.TextInputView}  >
                    <TextInput
                        placeholder='Enter Item'
                        type="text"
                        style={styles.TextInput}
                        onChangeText={(text) => (setItem(text))}
                        value={item}
                    />
                    <TextInput
                        placeholder='Enter Cost'
                        keyboardType="numeric"
                        style={styles.TextInput}
                        onChangeText={(text) => (setCost(text))}
                        value={cost}

                    />
                </View>
                <TouchableOpacity style={styles.AddView} onPress={handleSubmit}  >
                    <Text style={styles.AddText} >Add +</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default createExpense

const styles = StyleSheet.create({
    Header: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#337E86",
    },

    Views: {
        flex: 1
    },

    InputContainer: {
        width: "100%",

        flex: 1
    },

    ImageView: {
        flex: 1,


    },

    TextInput: {
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "#337E86",
        marginVertical: 3,
        color: "#337E86",
    },

    TextInputView: {
        width: "100%",
        paddingHorizontal: 10,

    },

    Views: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    AddView: {
        alignSelf: "center",
        backgroundColor: "#337E86",
        width: "70%",
        margin: 10,
        padding: 10


    },

    AddText: {
        fontSize: 20,
        alignSelf: "center",
        color: "white"

    }
})

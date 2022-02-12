import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme, useNavigation } from "@react-navigation/native"
import ExpensesList from '../components/ExpensesList'
import EditExpenses from '../components/EditExpenses'
import createExpense from '../components/createExpense'


const StacKNavigation = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "white"
        },
    };


    const Stack = createStackNavigator()
    return (
        <>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
                    <Stack.Screen name="ExpensesScreen" component={ExpensesList} options={{ headerShown: false }} />
                    <Stack.Screen name="Add New" component={createExpense} options={{ headerTitle: "" }} />
                    <Stack.Screen name="Edit" component={EditExpenses} />
                </Stack.Navigator>
            </NavigationContainer>

        </>
    )
}

export default StacKNavigation

const styles = StyleSheet.create({

})

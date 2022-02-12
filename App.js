import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CreateExpense from './components/createExpense';
import ExpensesList from './components/ExpensesList';
import StacKNavigation from './StackRoutes/StacKNavigation';

export default function App() {

  return (
    <View style={styles.container}>
      <StacKNavigation />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

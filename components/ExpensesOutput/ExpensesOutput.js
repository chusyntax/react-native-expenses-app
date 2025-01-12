import { Text, View, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      <ExpensesList />
      <FlatList />
    </View>
  );
}

export default ExpensesOutput;

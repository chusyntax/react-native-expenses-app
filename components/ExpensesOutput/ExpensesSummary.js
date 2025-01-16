import { View, Text } from "react-native";

function ExpensesSummary({ periodName, expenses }) {
  const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>Total expenses:</Text>
      <Text>${totalExpenses.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

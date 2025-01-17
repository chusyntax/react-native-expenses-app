import { Text, View, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New TV",
    amount: 799.49,
    date: new Date("2021-1-12"),
  },
  {
    id: "e2",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date("2021-2-28"),
  },
  {
    id: "e3",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date("2021-3-15"),
  },
  {
    id: "e4",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date("2021-,-1"),
  },
  {
    id: "e5",
    description: "Chicken",
    amount: 4.12,
    date: new Date("2021-6-3"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList />
      <FlatList />
    </View>
  );
}

export default ExpensesOutput;

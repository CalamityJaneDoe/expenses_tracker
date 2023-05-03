import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: "Car Insurance",
      amount: 249.17,
      date: new Date(2023, 2, 28)
    },
    {
      id: 'e2',
      title: "Books",
      amount: 125.50,
      date: new Date(2023, 2, 15)
    },
    {
      id: 'e3',
      title: "Concert tickets",
      amount: 86.12,
      date: new Date(2023, 2, 5)
    },
    {
      id: 'e4',
      title: "Beauty products",
      amount: 368.56,
      date: new Date(2023, 2, 1)
    },
  ]
  return (
    <div>
      <NewExpense />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
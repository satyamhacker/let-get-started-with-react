import ExpenseItem  from "./components/Expenses/ExpenseItem";
import Card from './components/UI/Card';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:'gurugram'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location:'delhi'}, 
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:'delhi'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:'karolbagh'
    },
  ];

   // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <Card>
      <h2>Let's get started!</h2>
      {expenses.map((expense, index) => (
  <ExpenseItem
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    location={expense.location}
  />
))}
    </Card>
  );
}
export default App;
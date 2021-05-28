import Expenses from './components/Expenses';

function App() {
  const newExpense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 200,
      date: new Date(2021, 7, 4),
    },
    {
      id: "e2",
      title: "Apartment Rent",
      amount: 300,
      date: new Date(2021, 7, 4),
    },
  ];
  return (
    <div className="App">
      <Expenses expense = {newExpense}/>
    </div>
  );
}

export default App;

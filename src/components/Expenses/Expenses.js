import './Expenses.css';
import ExpenseItems from "./ExpenseItems";
import Card from '../UI/Card';

function Expenses(props) {
    const items = props.expense;
    return (
        <Card className="expenses">
        <ExpenseItems title={items[0].title} date={items[0].date} amount={items[0].amount}></ExpenseItems>
        <ExpenseItems title={items[1].title} date={items[1].date} amount={items[1].amount}></ExpenseItems>
        </Card>
    );
}

export default Expenses;
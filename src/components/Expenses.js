import './Expenses.css';
import ExpenseItems from "./ExpenseItems";

function Expenses(props) {
    const expense = props.expense;
    return (
        <div className="expenses">
        <ExpenseItems title={expense[0].title} date={expense[0].date} amount={expense[0].amount}></ExpenseItems>
        <ExpenseItems title={expense[1].title} date={expense[1].date} amount={expense[1].amount}></ExpenseItems>
        </div>
    );
}

export default Expenses;
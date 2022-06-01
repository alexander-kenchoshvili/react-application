import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  
const filteredExpenses = props.item.filter((expense)=>{
  return expense.date.getFullYear().toString() === filteredYear;
})
let expenseContent = <p>No Content</p>;
if(filteredExpenses.length >0){
  expenseContent = filteredExpenses.map((expense)=>(
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
    ))
}

  return (
    <div>
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {expenseContent}
    </Card>
    </div>
  )
}

export default Expenses
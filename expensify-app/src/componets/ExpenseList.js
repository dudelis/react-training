import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';



const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <ul>
        {props.expenses.map((expense, index)=> (
            <ExpenseListItem {...expense}
                key={expense.id}
            />
        ))}
        </ul>
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

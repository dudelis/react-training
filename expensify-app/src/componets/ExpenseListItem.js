import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses'; 

//description, amount, createdAt

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) =>(
    <li>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button id={id} onClick={()=>{
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </li>
);

export default connect()(ExpenseListItem);
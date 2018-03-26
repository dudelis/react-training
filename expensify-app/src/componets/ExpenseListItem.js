import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


//description, amount, createdAt

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) =>(
    <li>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {moment(createdAt).format('DD/MM/YYYY')}</p>
        
    </li>
);

export default ExpenseListItem;
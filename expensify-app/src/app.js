import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'water bill', amount: 4500,createdAt: 500}));
store.dispatch(addExpense({description: 'gas bill', amount: 5000, createdAt: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 109500, createdAt: 100}));
store.dispatch(addExpense({description: 'car', amount: 100000}));


const state = store.getState();
const expenses = getVisibleExpenses(state.expenses, state.filters)
console.log(expenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


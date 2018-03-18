import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
        <li>
            <NavLink to="/" activeClassName="is-active-link" exact>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/create" activeClassName="is-active-link">Create Expense</NavLink>
        </li>
        <li>
            <NavLink to="/help" activeClassName="is-active-link">Help</NavLink>
        </li>
    </ul>
    </header>
);

export default Header;
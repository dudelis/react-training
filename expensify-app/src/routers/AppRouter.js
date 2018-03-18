import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ExpenseDashboardPage from './../componets/ExpenseDashboardPage';
import AddExpensePage from './../componets/AddExpensePage';
import EditExpensePage from './../componets/EditExpensePage';
import HelpPage from './../componets/HelpPage';
import NotFoundPage from './../componets/NotFoundPage';
import Header from './../componets/Header';


const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
);

export default AppRouter;
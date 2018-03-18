import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import NotFoundPage from './../componets/NotFoundPage';
import Header from './../componets/Header';
import HomePage from './../componets/HomePage';
import PortfolioPage from './../componets/PortfolioPage';
import PortfolioItemPage from './../componets/PortfolioItemPage';
import ContactPage from '../componets/ContactPage';


const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/portfolio" component={PortfolioPage} exact />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
);

export default AppRouter;
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItemPage  = (props) =>{
    console.log(props);
    return (
        <div>
            <h1>A thing I have done.</h1>
            <p>This page is for the item with id {props.match.params.id}</p>
            <Link to="/" onClick={props.history.goBack}>Back</Link>
        </div>
    );
}

export default PortfolioItemPage;
import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={ StreamList }/>
            <Route path="/stream/new"  component= { StreamCreate }/>
            <Route path="/stream/edit/:id"  component={ StreamEdit }/>
            <Route path="/stream/delete"  component={ StreamDelete }/>
            <Route path="/stream/show"  component={ StreamShow }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

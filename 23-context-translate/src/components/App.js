import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector'
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class App extends Component {
  

  

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />  
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
        
        
      </div>
    );
  }
}

export default App;

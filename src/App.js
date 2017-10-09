import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './constants/usefull';
import { MainNavigation } from './navigation/MainNavigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
           <MainNavigation />
      </Provider>
    );
  }
}

export default App;

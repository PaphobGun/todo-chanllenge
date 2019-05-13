import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/history" exact component={History} />
      </BrowserRouter>
    </div>
  );
}

export default App;

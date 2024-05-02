import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </div>
    </Router>
  );
}

export default App;
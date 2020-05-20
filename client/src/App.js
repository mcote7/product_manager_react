import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import CreateProduct from './views/CreateProduct';
import UpdateProduct from './views/UpdateProduct';
import DisplayProducts from './views/DisplayProducts';
import ProductDetails from './views/ProductDetails';
import Navigation from './components/Navigation'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Router>
        <ProductDetails path="/product/:id"/>
        <UpdateProduct path="/update/:id"/>
        <CreateProduct path="/new"/>
        <DisplayProducts path="/"/>
      </Router>
    </div>
  );
}

export default App;

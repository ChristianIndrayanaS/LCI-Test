import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';

function App() {
  return (
    <>
      <Router>
          <Routes>
                <Route path="/" exact element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/product" element={<Product />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;

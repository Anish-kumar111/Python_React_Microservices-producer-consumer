import React from 'react';
import './App.css';

import Products from './admin/Products';
import Main from './main/Main';
import {BrowserRouter  as Router,Route,Routes,} from "react-router-dom";
import ProductsCreate from './admin/ProductsCreate';
import ProductsUpdate from './admin/ProductsUpdate';


function App() {
  return (
  <div className="App">
    
  <Routes>
    
  <Route  path="/" element={<Main/>}/>  
  <Route  path="/admin/products" element={<Products/>}/> 
  <Route  path="/admin/products/create" element={<ProductsCreate/>}/> 
  <Route  path="/admin/products/:id/edit" element={<ProductsUpdate/>}/> 
  </Routes>
      {/* <Main />
      </Route>  
      <Route basename="/admin/products">
      <Products />
      </Route>
      <Route basename="/admin/products/create">
      <ProductsCreate />
      </Route>
      <Route basename="/admin/products/edit/:id">
      <ProductsUpdate />
      </Route>    */}
  </div>



  );
}

export default App;

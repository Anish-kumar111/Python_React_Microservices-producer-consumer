import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../interfaces/product';

import Wrapper from './Wrapper';
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect( ()=>  {
    
       const getProducts= async () =>  {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');   
      const response = await fetch('http://localhost:8000/api/products', {
        method: 'GET',
        headers: requestHeaders,
        // body: requestBody
      });
      const data  = await response.json();
      console.log(data);
      setProducts(data);
    }
     getProducts();
  },  []);
   const del =async (id:number) =>  
   {  if(window.confirm('are you sure want to delete this product?'))
     {
     await  fetch(`http://localhost:8000/api/products/${id}`, {
       method:'DELETE'
     });
     setProducts(products.filter((p:Product)  =>  p.id  !== id));
   } 
  }
  return (
      <Wrapper>
          <div className="btn-group">
            
               <Link  to='/admin/products/create' className="btn btn-sm btn-outline-secondary">ADD</Link>
              </div>
        <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">likes</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {products.map(
           (p: Product) => {
              return(
            <tr key={p.id}>
              <td>{p.id}</td>
              <td><img  src={p.image} height="140"/></td>
              <td>{p.title}</td>
              <td>{p.likes}</td>
              <td><div  className='btn-group  mr-2'>
              <Link  to={`${p.id}/edit`} className="btn btn-sm btn-outline-secondary">EDIT</Link>
                <a href="#" className='btn  btn-sm  btn-outline-secondary'
                onClick={() =>  del(p.id)}
                >DELETE</a>
                </div></td>
            </tr>
              )
           })}
         
          </tbody>
        </table>
      </div>
    </Wrapper>
    );
};

export default Products;
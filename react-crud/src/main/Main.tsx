import React, { useEffect, useState } from 'react';
import { Product } from '../interfaces/product';


const Main = () => {
  const [products, setproducts] = useState([] as  Product[]);
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
   setproducts(data);
 }
  getProducts();
},  []);
  const likes= async (id:number)  =>  {
    await fetch(`http://localhost:8001/api/products/${id}/likes`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
  });
  setproducts(products.map(
    (p: Product)  =>  {
      if (p.id === id)  {
        p.likes++;
      }
      return  p
    }
  ))  
  }
    return (
        
            


<main>
<div className="album py-5 bg-light">
  <div className="container">

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {products.map(
       ( p:Product) =>{
          return(
      <div className="col"key={p.id}>
        <div className="card shadow-sm  ">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={p.image} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div className="card-body">
            <p className="card-text">{p.title}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"
                onClick={() =>  likes(p.id)}>like</button>
                {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
              </div>
              <small className="text-muted">{p.likes}likes</small>
            </div>
          </div>
        </div>
        
      </div>
     )
    }
  )
  } 
      </div>
      </div>
      </div>
  </main>    

     
 


            

    );
};

export default Main;

import React, { PropsWithRef, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../interfaces/product';
import Wrapper from './Wrapper';
import { useParams } from 'react-router-dom';



const ProductsUpdate = (props:PropsWithRef<any>) => {
  
    const [name, setName] = useState("")
    const [image,  setImage] = useState("")
    const navigates = useNavigate()
    // const [navigate,  setNavigate] = useState(false)
    const { id } = useParams(); // <-- access id match param here
    const [upid ] = useState();
    useEffect(  ()=>{
    ( async () =>  {
        
      const response = await fetch(`http://localhost:8000/api/products/${id}`); 
      const product:  Product  = await response.json();
      console.log(product);
      setName(product.name)
      setImage(product.image)
      
    }

     )();
  },  [id]);    
    
    
    
  const  submit   =   async (e: SyntheticEvent)  =>  {    
      e.preventDefault();
        
    const res  = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,image
        })
      });
      navigates('/admin/products');

      // // setNavigate(true);
     
    }
    // const submitButton = () =>{ 
      // const data= await res.json();
      // const msg = JSON.stringify(title);
      // const msg1  = JSON.stringify(image);
      // // if (data){
      //   if (msg && msg1){
          
      //   };
      //   navigates('/admin/products');

    // }
    // if  (navigate) {
    // return  <Navigate to='/admin/products'  replace={true}  />}
    return (
<Wrapper>
  
<form   onSubmit={submit}>
  <div className="mb-3"
  defaultValue={upid} >
    <label  className="form-label">title</label>
    <input type="text" className="form-control"
    defaultValue={name} 
    onChange={e =>  setName(e.target.value)}/>
    <label  className="form-label">image</label>
    <input type="text" className="form-control"
    defaultValue={image}
    onChange={e =>  setImage(e.target.value)}/>  
    
  </div>
  <button  type="submit" className="btn btn-primary">Submit</button>
</form>
            
</Wrapper>
    );
};

export default ProductsUpdate;
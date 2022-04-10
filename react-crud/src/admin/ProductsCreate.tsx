import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';

const ProductsCreate = () => {
    const [title, setTitle] = useState("")
    const [image,  setImage] = useState("")
    const navigates = useNavigate()
    const  submit   =   async (e: SyntheticEvent)  =>  { 
         
       e.preventDefault();  
       const res =  await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title,image
        })
      });
      navigates('/admin/products');
      // setNavigate(true);
      // e.preventDefault();
    }
    
    const submitButton = () =>{ 
      navigates('/admin/products');}
    // if  (navigate) {
    // return  <Navigate to={'admin/products'}  replace={true}/>}
    return (
<Wrapper>
<form   onSubmit={submit}>
  <div className="mb-3">
    <label  className="form-label">title</label>
    <input type="text" className="form-control" 
    onChange={e =>  setTitle(e.target.value)}/>
    <label  className="form-label">image</label>
    <input type="text" className="form-control"
    onChange={e =>  setImage(e.target.value)}/>  
    
  </div>
  <button  type="submit" className="btn btn-primary">Submit</button>
</form>
            
</Wrapper>
    );
};

export default ProductsCreate;



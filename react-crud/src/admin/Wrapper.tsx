import React, { PropsWithChildren } from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
    {/* <Nav /> */}
    {/* <Menu /> */}
    

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {props.children}
 
      
    
    </main>
        </div>
    );
};

export default Wrapper;
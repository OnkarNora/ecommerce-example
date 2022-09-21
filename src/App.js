
import Products from './Products';
import React from 'react';
import { useState, useEffect } from 'react'
function App() {

    const[data,setData] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="col-12 text-center my-3 fw-bold">Our Products</h1>
                    <Products item={data} setData={setData}/>
                </div>
            </div>
        </>
    );
}

export default App;

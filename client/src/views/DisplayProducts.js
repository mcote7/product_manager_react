import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const DisplayProducts = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
                console.log(res.data);
            });
    },[])
    return (
        <div>
            <p>~ all products ~</p>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default DisplayProducts;

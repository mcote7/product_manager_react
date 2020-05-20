import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ProductDetails = props => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => {
            console.log(res)
            setProduct(res.data)
            });
    }, [props.id])

    const removeFromDom = product => {
        setProduct(product);
    }

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res => {
                removeFromDom(productId)
                navigate("/")
            })
    }

    return (
        <>
        <div>
            <p>Title : {product.title}</p>
            <p>Price : ${product.price}</p>
            <p>Description : {product.description}</p>
        </div>
        <br/>
        <Link to={"/update/"+product._id}>update this product</Link>
        <button className="linkStyle" onClick={(e)=>{deleteProduct(product._id)}}>delete this product</button>
        </>
    );
};

export default ProductDetails;

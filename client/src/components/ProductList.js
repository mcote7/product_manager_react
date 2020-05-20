import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = props => {

    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (

        <div>
            {props.products.map((product, idx)=>{
                return  <p className="morph" key={idx}>product :&nbsp;&nbsp;
                <Link className="nomorph" to={"/product/"+product._id}>{product.title}</Link>&nbsp;&nbsp;${product.price}&nbsp;&nbsp;
                <button className="linkStyle" onClick={(e)=>{deleteProduct(product._id)}}>delete this product</button></p>
            })}
        </div>

    )
}

export default ProductList;
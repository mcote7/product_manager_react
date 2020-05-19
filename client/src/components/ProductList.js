import React from 'react';
import { Link } from '@reach/router';

const ProductList = props => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p key={idx}>{product._id} <Link to={"/products/"+product._id}>{product.title}</Link></p>
            })}
        </div>
    )
}

export default ProductList;
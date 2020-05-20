import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateProduct = props => {

    const [title, setTitle] = useState(); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description)
        })
    }, [props.id])

    const UpdateProduct= e => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/product/update/' + props.id, {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        setTitle("");
        setPrice("");
        setDescription("");
        navigate("/");
    }

    return (
        <form onSubmit={UpdateProduct}>
            <p>
                <label>Title</label><br/>
                <input required type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input required type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input required type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <button className="submitbutt" type="submit">update this product</button>
        </form>
    )
}

export default UpdateProduct;

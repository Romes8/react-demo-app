import React, { Component } from "react";
import {useParams} from 'react-router-dom'


function ProductDetails()  {
    const {product_id} = useParams();

    return(
        <div>
            <h1>Product id: {product_id}</h1>
        </div>

    );
}

export default ProductDetails;

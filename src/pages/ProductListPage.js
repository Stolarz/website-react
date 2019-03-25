import React from 'react';
import {Link} from 'react-router-dom';
import '../style/ProductListPage.css';

const products = ["car", "bike", "motocycle"];

const ProductListPage = () => {

    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>   
        </li>
    ))

    return ( 
        <div className="products">
        <h2>List of Products</h2>
            <div>
                <ul>
                    {list}    
                </ul>
            </div>
        </div>
     );
}
 
export default ProductListPage;
import React from 'react';
import Product from '../components/Product';
import {Link} from 'react-router-dom';

const ProductPage = ({match}) => {
    return ( 
        <>
            <div>
                Page of product
            </div>
            <Product id={match.params.id}/>
            <Link to="/products">Return to list of products</Link>
        </>
     );
}
 
export default ProductPage;
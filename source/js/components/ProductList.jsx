import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = (props) => {
    return (
        <ul className='product-list'>
            {
                props.products.map((product, i) =>
                    <ProductListItem key={i}
                    title={product.title}
                    category={product.category}
                    size={product.size}
                    cubicweight={product.cubicweight} />
                )
            }
        </ul>
    )
};

export default ProductList;
import React from 'react';

const ProductListItem = (props) => {
    let specs;
    if ( props.size.width && props.size.length && props.size.height ) {
        specs = <dl className='product-info'>
            <dt>width</dt>
            <dd>{props.size.width} cm</dd>
            <dt>height</dt>
            <dd>{props.size.height} cm</dd>
            <dt>length</dt>
            <dd>{props.size.length} cm</dd>
        </dl>
    }
    let cubicweight;
    if ( props.cubicweight ) {
        cubicweight = <p className='product-cubicweight'>Average cubic weight from air conditioner category: {props.cubicweight}kg</p>
    }
    return (
        <li className='product'>
            <article>
                <header className='product-header'>
                    <h3 className='product-title'>{props.title}</h3>
                    <p className='product-category'>{props.category}</p>
                </header>
                {specs}
                {cubicweight}
            </article>
        </li>
    )
}

export default ProductListItem;
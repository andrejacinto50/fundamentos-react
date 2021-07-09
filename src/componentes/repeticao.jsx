import React from 'react';

import products from '../data/products';

export default param => {
    
    function getproductsListItem() {
        return products.map(prod => {
             return <li>{prod.id} - {prod.nome} - R${prod.preco}</li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
               {getproductsListItem}
            </ul>
        </div>
    )
}
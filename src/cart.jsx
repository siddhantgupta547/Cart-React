import React from 'react';
import CartItem from './cart-item';


function Cart(props){


    const products= props.products;

    return <div>
        {products.map((product)=>{
            return <CartItem 
                key= {product.id}
                product= {product}
                onIncrease= {props.onIncrease}
                onDecrease= {props.onDecrease}
                remove= {props.remove}
            />
        })}  
    </div>
}

export default Cart;
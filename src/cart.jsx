import React from 'react';
import CartItem from './cart-item';

class Cart extends React.Component{
    render(){
        return(
            <div>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        )
    }
}

export default Cart;
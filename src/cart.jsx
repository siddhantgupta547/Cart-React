import React from 'react';
import CartItem from './cart-item';


class Cart extends React.Component{
    constructor(){
        super()
        this.state={ 
            products:[
                {
                    id: 1,
                    title: 'Phone',
                    price: '74,999',
                    quantity: 1
                },
                {   
                    id: 2,
                    title: 'Watch',
                    price: '48,999',
                    quantity: 1
                },
                {
                    id: 3,
                    title: 'Shoes',
                    price: '8,999',
                    quantity: 1
                }
            ]
        }
    }

    onInc = (product) =>{
        const products= this.state.products;
        console.log(products.indexOf(product));
        products[products.indexOf(product)].quantity+=1;
        this.setState({
            products
        })
    }

    onDec = (product) =>{
        const products= this.state.products;
        if(products[products.indexOf(product)].quantity<=1)
            return;
        products[products.indexOf(product)].quantity-=1;
        this.setState({
            products
        })
    }

    remove = (product) =>{
        const products= this.state.products;
        products.splice(products.indexOf(product),1)
        this.setState({
            products
        })
    }

    render(){
        
        const products= this.state.products;
        return(
        <div>
            {products.map((product)=>{
                return <CartItem 
                    key= {product.id}
                    product= {product}
                    onIncrease= {this.onInc}
                    onDecrease= {this.onDec}
                    remove= {this.remove}
                />
            })}  
            </div>
        )
    }
}

export default Cart;
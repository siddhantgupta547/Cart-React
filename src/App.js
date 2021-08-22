import React from 'react';
import logo from './logo.svg';
import Cart from './cart';
import NavBar from './NavBar';
import Total from './Total';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    id: 1,
                    title: 'Phone',
                    price: 74999,
                    quantity: 1
                },
                {   
                    id: 2,
                    title: 'Watch',
                    price: 48999,
                    quantity: 1
                },
                {
                    id: 3,
                    title: 'Shoes',
                    price: 8999,
                    quantity: 2
                }
            ]
        }
    }
    
    createNav(){
        const length= this.state.products.length;
        return  <NavBar 
            NumberOfProducts={length}
            />
    }

    createCart(){
        return <Cart 
        products= {this.state.products}
        onIncrease= {this.onInc}
        onDecrease= {this.onDec}
        remove= {this.remove} 
      />
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

    addTotal = () =>{
      const products= this.state.products;
      const total= products.reduce((acc,curr) =>{
        console.log(`quantity ${curr.quantity}, price ${curr.price}, acc ${acc}`);
         acc+=(curr.quantity)*(curr.price);
        return acc;
      },0)
      return <Total cartTotal= {total} />
    }

    render(){
    return (
        <div className="App">
            {this.createNav()}
            {this.createCart()}
            {this.addTotal()}
        </div>
      );
  }
}

export default App;
import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super()
        this.state={
            title: 'Phone',
            price: '74,999',
            quantity: 1
        }
    }

    IncreaseQuantity(){
        // console.log(++this.state.quantity);
        this.setState({
            quantity: this.state.quantity+1
        });
    }
    
    DecreaseQuantity(){
        if(this.state.quantity<=1)
        {
            return;
        }
        this.setState({
            quantity: this.state.quantity-1
        });
    }

    render(){
        const {title,price,quantity}= this.state;
        return(
        <div className= 'cart-item'>
            <div className= 'right-block'>
                <img style= {styles.img} onClick={this.IncreaseQuantity}/>
            </div>
            <div class= 'left-block'>
                <h3 style= {styles.details}>{title}</h3>
                <p style= {styles.details}>{price}</p>
                <p style= {styles.details}>{quantity}</p>
                <div className= 'cart-items-actions'>
                    <span className="action-icon  material-icons-outlined" onClick={this.IncreaseQuantity.bind(this)}>
                    add
                    </span>
                    <span className="action-icon material-icons-outlined" onClick={this.DecreaseQuantity.bind(this)}>
                        remove
                    </span>
                    <span className="action-icon material-icons-outlined">
                        delete
                    </span>    
                </div>
            </div>
        </div>
        )
    }
}

const styles= {
    img: {
        height: 100,
        width: 100,
        borderRadius: 5,
        backgroundColor: "#777"
    },
    details: {
        margin: 2
    }
}

export default CartItem;
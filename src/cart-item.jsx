import React from 'react';

class CartItem extends React.Component{
    
    // IncreaseQuantity(){
    //     // console.log(++this.state.quantity);
    //     this.setState({
    //         quantity: this.state.quantity+1
    //     });
    // }
    
    // DecreaseQuantity(){
    //     if(this.state.quantity<=1)
    //     {
    //         return;
    //     }
    //     this.setState({
    //         quantity: this.state.quantity-1
    //     });
    // }

    render(){
        console.log(this);
        // console.log(this.props);
        const {title,price,quantity}= this.props.product;
        return(
        <div className= 'cart-item'>
            <div className= 'right-block'>
                <img style= {styles.img}/>
            </div>
            <div class= 'left-block'>
                <h3 style= {styles.details}>{title}</h3>
                <p style= {styles.details}>{price}</p>
                <p style= {styles.details}>{quantity}</p>
                <div className= 'cart-items-actions'>
                    <span className="action-icon  material-icons-outlined" onClick={()=>this.props.onIncrease(this.props.product)}>
                    add
                    </span>
                    <span className="action-icon material-icons-outlined" onClick= {()=>this.props.onDecrease(this.props.product)}>
                        remove
                    </span>
                    <span className="action-icon material-icons-outlined" onClick={()=>this.props.remove(this.props.product)}>
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
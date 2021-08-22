import React from 'react';

const CartItem =(props)=>{
    
        const {title,price,quantity}= props.product;
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
                    <span className="action-icon  material-icons-outlined" onClick={()=>props.onIncrease(props.product)}>
                    add
                    </span>
                    <span className="action-icon material-icons-outlined" onClick= {()=>props.onDecrease(props.product)}>
                        remove
                    </span>
                    <span className="action-icon material-icons-outlined" onClick={()=>props.remove(props.product)}>
                        delete
                    </span>    
                </div>
            </div>
        </div>
        )
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
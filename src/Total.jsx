import React from 'react';

const Total = (props) =>{
    return <footer>
        <h1 style={{textAlign: 'right'}}>Total: {props.cartTotal}</h1>
    </footer>
}

export default Total;
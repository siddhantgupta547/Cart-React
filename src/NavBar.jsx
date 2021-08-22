import React from 'react';

function NavBar(props){  
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse right-align" id="navbarSupportedContent ">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <div>
              <span style={style.cartIcon}>{props.NumberOfProducts}</span>
              <a className="nav-link" href="#"> <span class="material-icons">shopping_cart</span></a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
}

const style= {
  cartIcon:{
    position: "absolute",
    color: "#dededf",
    right: 1
  }
}

export default NavBar;
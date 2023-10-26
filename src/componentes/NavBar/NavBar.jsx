import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (

    <header>
      <Link to="/">
        <img className='logo' src={"../imagenes/logo.1.png"} alt="Logo Kombat" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className='color-nav' to="categoria/1">Palas</NavLink>
          </li>
          <li>
            <NavLink className='color-nav'to="categoria/2">Accesorios</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
      
      
    </header>

  )
}

export default NavBar
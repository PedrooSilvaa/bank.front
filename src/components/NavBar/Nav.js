import React from 'react'
import './Nav.css'
import Home from '../assets/home.png'
const Nav = ({id}) => {
  return (
    <div className='containerNav'>
            <h1 className='titleNav'>
                Peaga
                <span>Pay</span>
            </h1>

            <ul>
                <li> <img src={Home} alt="home" /> Home</li>
                <li>Pix</li>
                <li>Transferência</li>
                <li>Saque-Online</li>
                <li>Deposito-Online</li>
                <li>Configurações</li>
            </ul>
            <p>by Pedro Henrique</p>
    </div>
  )
}

export default Nav
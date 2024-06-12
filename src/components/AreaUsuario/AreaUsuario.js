import React from 'react'
import './AreaUsuario.css'
import User from '../../assets/user.png'
import CardUsuario from '../Card/CardUsuario'
import Emprestimo from '../Emprestimo/Emprestimo'

const AreaUsuario = ({nomeUsuario, numeroAgencia, numeroConta}) => {
  return (
    <div className='containerUsuario'>
        <div className="headerUsuario">
            <h3>{nomeUsuario}</h3>
            <img src={User} alt="" />
        </div>
        <div className="mainUsuario">
          <CardUsuario numeroAgencia={numeroAgencia} numeroConta={numeroConta}/>
        </div>

        <div className="footerUsuario">
          <h3>Emprestimo</h3>
          <Emprestimo/>
        </div>
          
        
    </div>
  )
}

export default AreaUsuario
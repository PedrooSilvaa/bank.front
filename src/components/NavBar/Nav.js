import React, { useState } from 'react'
import './Nav.css'

import { Navigate } from 'react-router-dom';

const Nav = ({id}) => {

  const [caminho, setCaminho] = useState();
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (caminho) =>{
      setCaminho(caminho);
      setRedirect(true)
  }

  if (redirect) {
    return <Navigate to={caminho}  />;
  }

  return (
    <div className='containerNav'>
            <h1 className='titleNav'>
                Peagá
                <span>Pay</span>
            </h1>

            <ul>
                <li><button onClick={() => handleSubmit(`/transacao?id=${id}&tipo=pix`)}>Pix</button></li>
                <li><button onClick={() => handleSubmit(`/transacao?id=${id}&tipo=transferencia`)}>Transferência</button></li>
                <li><button onClick={() => handleSubmit(`/transacao?id=${id}&tipo=saque`)}>Saque-Online</button></li>
                <li><button onClick={() => handleSubmit(`/transacao?id=${id}&tipo=deposito`)}>Deposito-Online</button></li>
                <li><button>Configurações</button></li>
            </ul>
            <p>by Pedro Henrique</p>
    </div>
  )
}

export default Nav
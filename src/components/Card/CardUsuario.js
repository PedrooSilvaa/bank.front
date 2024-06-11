import React from 'react'
import aproximacao from '../../assets/aproximacao.png'
import masterCard from '../../assets/mastercard.png'
import './CardUsuario.css'

const CardUsuario = ({numeroAgencia, numeroConta}) => {
  return (
    <div className='containerCard'>
        <div className="headerCard">
            <h4>PH</h4>
            <img src={aproximacao} alt="" />
        </div>
        <div className="footerCard">
            <h4>{numeroAgencia} 1234 5678 {numeroConta}</h4>
            <img src={masterCard} alt="" />
        </div>
    </div>
  )
}

export default CardUsuario
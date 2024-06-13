import './Money.css'
const Money = ({ saldo }) => {
    const saldoDaConta = parseFloat(saldo)
    
  return (
    <div className='containerMoney'>
        <div className="headerMoney">
            <h3>Saldo Disponivel</h3>
            <h3>Lancamentos Futuro</h3>
        </div>

        <div className="footerMoney">
            <h3>
                R$ {saldoDaConta.toFixed(2)}
            </h3>
            <h3>
                R$ 0.00
            </h3>
        </div>
    </div>
  )
}

export default Money
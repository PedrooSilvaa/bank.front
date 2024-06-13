import React from 'react'
import { useState } from 'react'

import { createNewTransation } from '../../helpers/BankRequest';

const CreateTransacao = () => {

    const [tipo, setTipo] = useState()
    const [idOrigem, setIdOrigem] = useState()
    const [idDestinatario, setIdDestinatario] = useState()
    const [valor, setValor] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        setTipo('pix')
        setIdOrigem(1)
        setIdDestinatario(2)
        setValor(100)
        
        const transacao = {
            idOrigem,
            idDestinatario,
            valor
        }
    
        try {
            const createTransacao = await createNewTransation('tranferencia', transacao);
            console.log('Transação criado com sucesso:', createTransacao);
          // Limpar os campos após a criação do cliente
        }catch(error){
            alert(error)
        }
    }
return (
    <div>
        <button onClick={handleSubmit}>confirmar</button>
    </div>
)
}

export default CreateTransacao
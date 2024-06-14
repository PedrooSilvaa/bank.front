import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { createNewTransation } from '../../helpers/BankRequest';
import { Navigate } from 'react-router-dom';
import './CreateTransacao.css'

const CreateTransacao = () => {
    const handleHome = (caminho) =>{
        setRedirect(true)
    }
    
    let [searchParams] = useSearchParams();
    const [tipo, setTipo] = useState()
    const [idOrigem, setIdOrigem] = useState()
    const [idDestinatario, setIdDestinatario] = useState()
    const [valor, setValor] = useState()
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const id = searchParams.get('id')
        const tipoTransacao = searchParams.get('tipo')
        setTipo(tipoTransacao)
        setIdOrigem(id)
    }, [searchParams])
    
    const handleSubmit = async (event) => {
        event.preventDefault(); 
    
        try {
            const createTransacao = await createNewTransation(tipo, idOrigem, idDestinatario, valor);
            console.log('Transação criado com sucesso:', createTransacao);
        }catch(error){
            alert(error)
        }
        setRedirect(true)
    }



    if (redirect) {
        return <Navigate to={`/home?id=${idOrigem}`}  />;
    }
return (
    <div className='containerCreateTransacao'>
        <button onClick={handleHome}><h1>Home</h1></button>
        <form className='formTransacao' onSubmit={handleSubmit}>
            <h1>Criar Transação</h1>
            <label>conta</label>
            <input type="number" className='inputTransacao'onChange={(e) => setIdDestinatario(e.target.value)}/>
            <label>Valor</label>
            <input type="number" className='inputTransacao' onChange={(e) => setValor(e.target.value)}/>
        <input className='submitTransacao' type='submit' value='Enviar'/>
        </form>
    </div>
)
}

export default CreateTransacao
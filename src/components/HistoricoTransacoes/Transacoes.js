import { useEffect, useState } from 'react';
import './Transacoes.css';
import { listTransacoesContas } from '../../helpers/BankRequest';

const Transacoes = ({ idCliente }) => {
    const [trasacaoData, setTransacaoData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         console.log("idTransacao " + idCliente);
    //         const data = await listTransacoesContas(idCliente);
    //         setTransacaoData(data);
    //     }
    //     if (idCliente) {
    //         fetchData();
    //     }
    // }, [idCliente]);

    
    console.log("idTransacao 11 " + idCliente);

    const submit = async () => {
        const data = await listTransacoesContas(idCliente);
        setTransacaoData(data);
    }

    return (
        <div className='containerTransacoes'>
            <h3 className="titleTransacao">Histórico Transação</h3>
            <button onClick={submit}>atualizar</button>

            {trasacaoData.map((transacao, index) => (
                <div key={index}>
                    <span>{transacao.valor}</span>
                    <span>{transacao.tipo}</span>
                    <span>{transacao.data}</span>
                </div>
            ))}
        </div>
    );
};

export default Transacoes;
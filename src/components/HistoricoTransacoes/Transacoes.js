import { useEffect, useState } from 'react';
import './Transacoes.css';
import { listTransacoesContas } from '../../helpers/BankRequest';

const Transacoes = ({ idCliente }) => {
    const [transacaoData, setTransacaoData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log("idTransacao " + idCliente);
            const data = await listTransacoesContas(idCliente);
            setTransacaoData(data);
        }
        if (idCliente) {
            fetchData();
        }
    }, [idCliente]);

    const formatarData = (dataString) => {
        // Dividir a string nos caracteres de vírgula
        const partes = dataString.slice(',');
    
        // Extrair as partes relevantes
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];
        const hora = partes[3];
        const minuto = partes[4];
    
        const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;
        // Retornar a data formatada
        return `${dia}/${mes}/${ano} - ${hora}:${minutoFormatado}`;
    };

    return (
        <div className='containerTransacoes'>
            <h3 className="titleTransacao">Histórico Transação</h3>
            <div className='transacoesList'>
                {transacaoData.map((transacao, index) => (
                    <div key={index} className='transacaoItem'>
                        <span>R$ {transacao.valor}</span>
                        <span>{transacao.tipo}</span>
                        <span>{formatarData(transacao.data)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transacoes;
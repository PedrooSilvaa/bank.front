import { useState } from "react";
import './Emprestimo.css'

const Emprestimo = () => {
    const [valor, setValor] = useState();
    const [transacoes, setTransacoes] = useState([]);

    const handleClick = (novoValor) => {
        const newTransacoes = [];
        for (let i = 1; i <= 6; i++) {
            newTransacoes.push({
                mes: `${i} Vez`,
                porcJuros: `${((i / 5) + 1)}%`,
                juros: `R$ ${Math.ceil(novoValor * ((i / 5) + 1))}`
            });
        }
        setTransacoes(newTransacoes);
    };

    return (
        <div className="containerEmprestimo">
            <label>Digite o Valor:
                <input type="number" onChange={
                        (e) => {
                        const novoValor = e.target.value;
                        setValor(novoValor);
                        handleClick(novoValor)}} />
            </label>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {valor && transacoes.map((transacao, index) => (
                    <li key={index}>
                        <span>{transacao.mes}</span>
                        <span>{transacao.porcJuros}</span>
                        <span>{transacao.juros}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Emprestimo;

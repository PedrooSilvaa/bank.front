import { useSearchParams } from "react-router-dom";
import { getClienteById, getContaByIdCliente } from "../../helpers/BankRequest";
import { useState, useEffect } from "react";
import Nav from "../../components/NavBar/Nav";
import AreaUsuario from "../../components/AreaUsuario/AreaUsuario";
import './Home.css'
import Money from "../../components/MoneyOverview/Money";
import Transacoes from "../../components/HistoricoTransacoes/Transacoes";

const Home = () => {

    let [searchParams] = useSearchParams();
    const [clienteData, setClienteData] = useState({});
    const [contaData, setContaData] = useState({});
    const [id, setId] = useState(null);
    

    useEffect(() => {
        async function fetchData() {
    
        const idCliente = searchParams.get('id'); 

        if (idCliente) {
            const data = await getClienteById(idCliente);
            setId(idCliente)
            setClienteData(data);
            const dataConta = await getContaByIdCliente(idCliente);
            setContaData(dataConta);
            
        }
        }
    
        fetchData();
        }, [searchParams]);
  return (
    <div>
        {clienteData ? (
        <div className="containerHome">
          <Nav id={id}/>

          <div className="mainHome">
            <Money saldo={contaData.saldo}/>
            <Transacoes/>
          </div>

          <AreaUsuario nomeUsuario={clienteData.name} numeroAgencia={contaData.agencia} numeroConta={contaData.numero}/>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Home
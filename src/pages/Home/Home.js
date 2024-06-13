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
    const [id, setId] = useState();
    

    useEffect(() => {
      async function fetchData() {
        const idCliente = searchParams.get('id'); 
        console.log("id cliente " + idCliente)
        
        const data = await getClienteById(idCliente);
        console.log(data)
        setId(data.id)
        setClienteData(data);
        const dataConta = await getContaByIdCliente(idCliente);
        setContaData(dataConta);
        
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
            <Transacoes idCliente={id}/>
            
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
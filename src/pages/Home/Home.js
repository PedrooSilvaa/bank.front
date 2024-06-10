import { useSearchParams } from "react-router-dom";
import { getClienteById } from "../../helpers/BankRequest";
import { useState, useEffect } from "react";

const Home = () => {

    let [searchParams] = useSearchParams();
    const [clienteData, setClienteData] = useState(null);

    useEffect(() => {
        async function fetchData() {
    
        const idCliente = searchParams.get('id'); 
        
        if (idCliente) {
            const data = await getClienteById(idCliente);
            setClienteData(data);
        }
        }
    
        fetchData();
        }, [searchParams]);
  return (
    <div>
        {clienteData ? (
        <div className="containerCliente">
        <h3 className="nameCliente">{clienteData.name}</h3>
        <h3>{clienteData.cpf}</h3>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Home
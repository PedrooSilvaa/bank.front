import { getContaByIdCliente, PostNewClient } from '../../helpers/BankRequest'
import './CreateLogin.css'
import { useState } from 'react'
import { Navigate, NavLink} from 'react-router-dom';

const Logon = () => {

  const [name, setName] = useState()
  const [cpf, setCpf] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const [redirect, setRedirect] = useState(false);


  const handleSubmit = async (event) => {

    event.preventDefault(); 

    const newCliente = {
      name,
      cpf,
      email,
      phone,
      password
    };

    try {
      const createCliente = await PostNewClient(newCliente);
      console.log('Cliente criado com sucesso:', createCliente);
      // Limpar os campos após a criação do cliente
      setName("");
      setCpf("");
      setEmail("");
      setPhone("");
      setPassword("");

      const getConta = await getContaByIdCliente(createCliente.id);
      getConta ? alert(`Anote sua Conta e Agência \n Agência: ${getConta.agencia}\n Conta: ${getConta.numero}`) : alert("a")
      setRedirect(true)
      } catch (error) {
      console.error("Failed to create client:", error);
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
}


  return (
    <div className="containerLogon">
        <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <label>
              Name
              <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value) } />
            </label>

            <label>
              CPF
              <input type="text" placeholder='Ex. 00000000000' onChange={(e) => setCpf(e.target.value)}/>
            </label>

            <label>
              Email
              <input type="email" placeholder='Ex. bank@bank.com' onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <label>
              Phone
              <input type="text" placeholder='Ex. 11 99999-9999' onChange={(e) => setPhone(e.target.value)}/>
            </label>

            <label>
              Password
              <input type="password" placeholder='Min. 6 -- Max. 8' onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <input type="submit" value="Create an account" className='submitLogon'/>
            <NavLink to="/">
              I have an account
            </NavLink>
        </form>
    </div>
  )
}

export default Logon
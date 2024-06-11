import { getContaByNumero } from '../../helpers/BankRequest'
import './Login.css'
import { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState()
    const [numero, setNumero] = useState()
    const [password, setPassword] = useState()
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try {
            const data = await getContaByNumero(numero, password);
            setId(data.id_cliente)
            setRedirect(true);
        } catch (error) {
            alert("Count or Password Incorrect");
        }
    }

    if (redirect) {
        return <Navigate to={`/home?id=${id}`}  />;
    }


    return (
        <div className='containerLogin'>
            <form onSubmit={handleSubmit}>
                <h1>Log in to the account</h1>
                <label>
                    Conta
                    <input type="number" onChange={(e) => setNumero(e.target.value)}/>
                </label>
                <label>
                    Password
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Login" className='submitLogin'/>
                <NavLink to="/logon">
                    I dont have an account
                </NavLink>
            </form>
        </div>
    )
}

export default Login;

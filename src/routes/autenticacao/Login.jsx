import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/ContextoAuth';
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

function Login() {

    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        nomeDeUsuario: '',
        senha: ''
    });

    const handleChangeLogin = async (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await handleLogin(login, "auth/login");
            navigate('/');
        } catch (error) {
            console.error('Erro:', error.message);
        }
    };
    
    
    return(
        <>
            <div className="secaoLogin">
                <div className="cardLogin">
                    <form onSubmit={handleSubmit}>
                        <legend>LOGIN</legend>
                        <div className="inputs">
                            <div className="inputContainer">
                                <label htmlFor="usuario"><FaUser /></label>
                                <input type="text" value={login.nomeDeUsuario} name="nomeDeUsuario" placeholder="Digite o seu usuário" onChange={handleChangeLogin} required />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="password"><MdOutlinePassword /></label>
                                <input type="password" value={login.senha} name="senha" placeholder="Digite a sua senha" onChange={handleChangeLogin} required />
                            </div>
                        </div>
                        <button type="submit">LOGAR</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
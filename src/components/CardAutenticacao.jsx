import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { PiUserRectangleBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

function CardAutenticacao(cardAuthLogin) {

    // LOGIN

    const [login, setLogin] = useState({
        nomeDeUsuario: '',
        senha: ''
    });

    const handleChangeLogin = async (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const enviarRequisicaoLogin = async (loginData) => {

        try {
            const response = await fetch('https://testeuaustorafrotaf.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                throw new Error('Bad response', {
                    cause: {
                        response,
                    }
                })
            }
            return response.json();

        } catch (error) {
            switch(error.cause.response?.status) {
                case 400:
                    console.log("erro 400 daora");
                    break;
                case 401:
                    console.log("erro 401 daora");
                    break;
                case 403:
                    console.log("erro 403 daora");
                    break;
                case 404:
                    console.log("erro 404 daora");
                    break;
                case 500:
                    console.log("erro 500 daora");
                    break;
            }
            throw error
        }
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await enviarRequisicaoLogin(login);
            console.log('Token:', data);

        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    // CADASTRO

    const [cadastro, setCadastro] = useState({
        apelido: '', 
        nomeDeUsuario: '',
        senha: '',
        email: '',
        telefone: '',
        tipo: 'USER'
    });

    const handleChangeCadastro = async (e) => {
        const { name, value } = e.target;
        setCadastro({ ...cadastro, [name]: value });
    };

    const enviarRequisicaoCadastro = async (cadastroData) => {

        try {
            const response = await fetch('https://testeuaustorafrotaf.onrender.com/usuario/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cadastroData),
            });

            if (!response.ok) {
                throw new Error('Bad response', {
                    cause: {
                        response,
                    }
                })
            }

            return response.json();

        } catch (error) {
            switch(error.cause.response?.status) {
                case 400:
                    console.log("erro 400 daora");
                    break;
                case 401:
                    console.log("erro 401 daora");
                    break;
                case 403:
                    console.log("erro 403 daora");
                    break;
                case 404:
                    console.log("erro 404 daora");
                    break;
                case 500:
                    console.log("erro 500 daora");
                    break;
            }
            throw error
        }
    };

    const handleSubmitCadastro = async (e) => {
        e.preventDefault();

        try {
            const data = await enviarRequisicaoCadastro(cadastro);
            console.log('Token:', data);

        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    return (
        <>
            <div className="cardLogin">
                {cardAuthLogin.cardAuthLogin ? (
                    <form onSubmit={handleSubmitLogin}>
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
                ) : (
                    <form onSubmit={handleSubmitCadastro}>
                        <legend>CADASTRO</legend>
                        <div className="inputs">
                            <div className="inputContainer">
                                <label htmlFor="usuario"><MdEmail /></label>
                                <input type="text" value={cadastro.email} name="email" placeholder="Email" onChange={handleChangeCadastro} required />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="usuario"><FaUser /></label>
                                <input type="text" value={cadastro.nomeDeUsuario} name="nomeDeUsuario" placeholder="Usuário" onChange={handleChangeCadastro} required />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="usuario"><PiUserRectangleBold /></label>
                                <input type="text" value={cadastro.apelido} name="apelido" placeholder="Nome de exibição" onChange={handleChangeCadastro} required />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="password"><MdOutlinePassword /></label>
                                <input type="password" value={cadastro.senha} name="senha" placeholder="Senha" onChange={handleChangeCadastro} required />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="usuario"><FaPhoneSquareAlt /></label>
                                <input type="text" value={cadastro.telefone} name="telefone" placeholder="Celular" onChange={handleChangeCadastro} required />
                            </div>
                        </div>
                        <button type="submit">CADASTRAR</button>
                    </form>
                )}
            </div>
        </>
    )
}

export default CardAutenticacao 
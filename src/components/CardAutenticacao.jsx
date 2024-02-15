import { useState } from 'react';
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    const enviarRequisicao = async (json) => {
        try {
            const authApi = cardAuthLogin.cardAuthLogin ? 'auth/login' : 'usuario/register';

            const response = await fetch(`https://testeuaustorafrotaf.onrender.com/${authApi}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
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
            switch (error.cause.response?.status) {
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

    // const usuarioDataReq = async (token) => {
    //     try {
    //         const coisasUser = await fetch("https://testeuaustorafrotaf.onrender.com/auth/autenticar", {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         if (!coisasUser.ok) {
    //             throw new Error('Bad response', {
    //                 cause: {
    //                     coisasUser,
    //                 }
    //             })
    //         }

    //         return coisasUser.json();

    //     } catch(error) {
    //         switch (error.cause.coisasUser?.status) {
    //             case 400:
    //                 console.log("erro 400 daora");
    //                 break;
    //             case 401:
    //                 console.log("erro 401 daora");
    //                 break;
    //             case 403:
    //                 console.log("erro 403 daora");
    //                 break;
    //             case 404:
    //                 console.log("erro 404 daora");
    //                 break;
    //             case 500:
    //                 console.log("erro 500 daora");
    //                 break;
    //         }
    //         throw error
    //     }
    // }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (cardAuthLogin.cardAuthLogin) {
                let token = await enviarRequisicao(login);
                token = token.token
                sessionStorage.setItem('Token', JSON.stringify(token))
                navigate('/cadastrousuario');
            }

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


    return (
        <>
            <div className="cardLogin">
                {cardAuthLogin.cardAuthLogin ? (
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
                ) : (
                    <form onSubmit={handleSubmit}>
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
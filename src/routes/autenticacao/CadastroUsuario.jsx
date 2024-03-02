import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/ContextoAuth';
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { PiUserRectangleBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

function CadastroUsuario() {

    const { handleCadastro } = useContext(AuthContext);
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await handleCadastro(cadastro, "usuario/register");
            navigate('/login');
        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    
    return(
        <>
            <div className="secaoLogin">
                <div className="cardLogin">
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
                </div>
            </div>
        </>
    )
}

export default CadastroUsuario
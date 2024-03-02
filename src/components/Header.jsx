import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/ContextoAuth';
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Header() {

    const { usuarioData, token, logado, setLogado } = useContext(AuthContext);

    // const [logadoCheck, setLogado] = useState(false);
    const [apelido, setApelido] = useState("")
    const navigate = useNavigate();

    // useEffect(() => {
    //     const headerUserInfo = async () => {
    //         const usuarioLogado = sessionStorage.getItem('Token');

    //         if(usuarioLogado) {
    //             setLogado(true);
    //             const token = JSON.parse(sessionStorage.getItem('Token'));
    //             const userInfo = await usuarioData(token);
    //             setApelido(userInfo.apelido); 

    //         } 
    //     };

    //     headerUserInfo();
    // }, [sessionStorage.getItem('Token')]);

    useEffect(() => {
        const headerUserInfo = async () => {
            if(logado) {
                const userInfo = await usuarioData(token);
                setApelido(userInfo.apelido); 
            } 
        };

        headerUserInfo();
    }, [logado]);

    const handleLogout = async ()=> {
        setLogado(false);
        navigate('/login');
    }

    return (
        <>
            <header>
                <nav>
                    <div className="superior__nav">
                        <div className="logo__header">
                            <Link>
                                {/* <img src={} alt="" /> */}
                                uaustore
                            </Link>
                        </div>
                        <div className="barra-pesquisar__header">
                            <form action="">
                                <input type="search" />
                                <button>
                                    <CiSearch />
                                </button>
                            </form>
                        </div>
                        <div className="menu__nav">
                            {logado ? (
                                apelido && (
                                    <div className="menu-perfil">
                                        <Link to="/perfil">
                                            <CgProfile />
                                            <span>Olá, {apelido}</span>
                                        </Link>
                                        <button onClick={handleLogout}>Deslogar</button>
                                    </div>
                                )
                            ) : (
                                <ul>
                                    <li><Link to="/cadastrousuario">Cadastrar</Link></li>
                                    <li><Link to="/login">Entrar</Link></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="inferior__nav">

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
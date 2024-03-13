import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/ContextoAuth';
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Header() {

    const { usuarioData, token, logado, handleLogout } = useContext(AuthContext);

    const [apelido, setApelido] = useState("")

    useEffect(() => {
        const headerUserInfo = async () => {
            if(logado) {
                const userInfo = await usuarioData(token);
                setApelido(userInfo.apelido); 
            } 
        };

        headerUserInfo();
    }, [logado]);


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
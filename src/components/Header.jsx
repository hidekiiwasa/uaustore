import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Header() {

    const [logadoCheck, setLogado] = useState(false);
    const [apelido, setApelido] = useState("")
    const navigate = useNavigate();

    
    useEffect(() => {
        const usuarioLogado = sessionStorage.getItem('Usuario');
        if(usuarioLogado) {
            setLogado(true);
            const usuarioObj = JSON.parse(sessionStorage.getItem('Usuario'));
            const apelidoUsuario = usuarioObj.apelido;
            setApelido(apelidoUsuario)

        } else {
            setLogado(false);
        }
    })

    const handleLogout = async ()=>{
        sessionStorage.removeItem('Usuario');
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
                            {logadoCheck ? (
                                <div className="menu-perfil">
                                    <Link to="">
                                        <CgProfile />
                                        <span>Olá, {apelido}</span>
                                    </Link>
                                    <button onClick={handleLogout}>Deslogar</button>
                                </div>
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
import {useState, useEffect} from 'react';
import { ImProfile } from "react-icons/im";
import { Link } from 'react-router-dom';
import usuarioData from '../autenticacao/UsuarioData';

function Perfil() {

    const [dados, setDados] = useState({
        apelido: '',
        email: '',
    });

    useEffect(() => {
        const headerUserInfo = async () => {
                const token = JSON.parse(sessionStorage.getItem('Token'));
                const userInfo = await usuarioData(token);
                setDados({
                    apelido: userInfo.apelido,
                    email: userInfo.email,
                });
        };

        headerUserInfo();
    });

    return(
        <>
            <div className="page__perfil">
                <div className="menu-perfil">
                    <div className="menu-perfil__header">
                        <div className="foto_perfil">
                            {/* <img src={} alt="" /> */}
                        </div>
                        <div className="info_perfil__header">
                            <span>{dados.apelido}</span>
                            <p>{dados.email}</p>
                        </div>
                    </div>
                    <div className="menu-perfil__opcoes">
                        <Link to='/dadosperfil'>
                            <ImProfile />
                            Dados da conta
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil
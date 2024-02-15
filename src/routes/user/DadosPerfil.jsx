import {useEffect, useState} from 'react';
import usuarioData from '../autenticacao/UsuarioData';

function DadosPerfil() {

    const [dados, setDados] = useState({
        apelido: '',
        email: '',
        telefone: ''
    });

    useEffect(() => {
        const headerUserInfo = async () => {
                const token = JSON.parse(sessionStorage.getItem('Token'));
                const userInfo = await usuarioData(token);
                setDados({
                    apelido: userInfo.apelido,
                    email: userInfo.email,
                    telefone: userInfo.telefone
                });
        };

        headerUserInfo();
    }, []);

    return(
        <>
            <div className="page__dados-perfil">
                <div className="card__dados-perfil">
                    <div className="box__dado-perfil">
                        <span>Email</span>
                        <div className="hidden">
                            <p>{dados.email}</p>
                            <form>
                                <input type="email" />
                                <button>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Telefone</span>
                        <div className="hidden">
                            <p>{dados.telefone}</p>
                            <form>
                                <input type="tel" />
                                <button>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Nome de usuário</span>
                        <div className="hidden">
                            <p>{dados.apelido}</p>
                            <form>
                                <input type="text" />
                                <button>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Senha</span>
                        <div className="hidden">
                            <p>*******</p>
                            <form>
                                <input type="password" />
                                <button>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DadosPerfil
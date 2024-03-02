import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/ContextoAuth';

function DadosPerfil() {

    const { usuarioData, token } = useContext(AuthContext);

    const [dados, setDados] = useState({
        apelido: '',
        nomeDeUsuario: '',
        senha: '',
        email: '',
        telefone: ''

    });

    useEffect(() => {
        const dadosUserInfo = async () => {
            const userInfo = await usuarioData(token);
            console.log(userInfo)
            setDados({
                apelido: userInfo.apelido,
                nomeDeUsuario: userInfo.nomeDeUsuario,
                senha: userInfo.senha,
                email: userInfo.email,
                telefone: userInfo.telefone
            });
        };

        dadosUserInfo();
    }, []);

    const handleChangeLogin = async (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const updateUser = async (token) => {
    
        const userData = {
          apelido: "bbqw4",
          nomeDeUsuario: "111111",
          senha: "111111",
          email: "564qwwa@hotmail.com",
          telefone: "123321"
        }
    
        try {
    
          const response = await fetch('https://testeuaustorafrotaf.onrender.com/usuario/atualizar', {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json; charset=UTF-8',
            },
          });
    
          if (response.ok) {
            console.log('Usuário atualizado com sucesso!');

          } else {
            console.error('Falha ao atualizar usuário');

          }
        } catch (error) {
          console.error('Erro ao fazer requisição:', error);

        }
      };
    

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
                            <p>{dados.nomeDeUsuario}</p>
                            <form>
                                <input type="text" />
                                <button>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Apelido</span>
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
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextoAuth';

function DadosPerfil() {

    // A API está enviando a senha e o nomeDeUsuario incorretos por algum motivo, logo não é possível mudar o usuário. Porém, creio que esteja funcionando direito a lógica.

    const { usuarioData, token, setToken } = useContext(AuthContext);

    const [dados, setDados] = useState({
        apelido: '',
        nomeDeUsuario: '',
        senha: '',
        email: '',
        telefone: ''

    })

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
            })
        }

        dadosUserInfo();
    }, [token]);

    const handleChangeAlterar = async (e) => {
        const { name, value } = e.target;
        setDados({ ...dados, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(dados, token);
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }

    const updateUser = async (dataUser, token) => {
        
    
        try {
            console.log(dataUser)
          const response = await fetch('https://testeuaustorafrotaf.onrender.com/usuario/atualizar', {
            method: 'PUT',
            body: JSON.stringify(dataUser),
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json; charset=UTF-8',
            },
          })

          const data = await response.json()
          const novoToken = data.token
          setToken(novoToken)

          if (!response.ok) {
            console.error('Falha ao atualizar usuário');

          }
        } catch (error) {
          console.error('Erro ao fazer requisição:', error);

        }
      }
    

    return(
        <>
            <div className="page__dados-perfil">
                <div className="card__dados-perfil">
                    <div className="box__dado-perfil">
                        <span>Email</span>
                        <div className="hidden">
                            <form onSubmit={handleSubmit}>
                                <input type="email" value={dados.email} name="email" onChange={handleChangeAlterar}/>
                                <button type='submit'>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Telefone</span>
                        <div className="hidden">
                            <form onSubmit={handleSubmit}>
                                <input type="tel" value={dados.telefone} name="telefone" onChange={handleChangeAlterar}/>
                                <button type='submit'>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Nome de usuário</span>
                        <div className="hidden">
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={dados.nomeDeUsuario} name="nomeDeUsuario" onChange={handleChangeAlterar}/>
                                <button type='submit'>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Apelido</span>
                        <div className="hidden">
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={dados.apelido} name="apelido" onChange={handleChangeAlterar}/>
                                <button type='submit'>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <span>Senha</span>
                        <div className="hidden">
                            <form onSubmit={handleSubmit}>
                                <p>{dados.senha} bb</p>
                                <input type="password" value={dados.senha} name="senha" onChange={handleChangeAlterar} placeholder='*******'/>
                                <button type='submit'>Enviar</button>
                            </form>
                        </div>
                        <button>Alterar</button>
                    </div>
                    <div className="box__dado-perfil">
                        <Link to='/excluirperfil'>Excluir conta</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DadosPerfil
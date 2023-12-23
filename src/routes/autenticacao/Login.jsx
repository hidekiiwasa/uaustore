import { } from 'react';

function Login() {
    return (
        <>
            <div className='secaoLogin'>
                <div className="cardLogin">
                    <form action="POST">
                        <legend>Login</legend>
                        <div className="inputs">
                            <div className="inputContainer">
                                <label htmlFor="usuario">Senha</label>
                                <input type="text" name="usuario"placeholder="Digite o seu usuário"/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="senha" placeholder="Digite a sua senha"/>
                            </div>
                        </div>
                        <button>Logar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
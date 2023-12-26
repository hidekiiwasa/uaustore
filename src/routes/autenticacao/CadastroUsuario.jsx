import { } from 'react';

function CadastroUsuario() {

    return(
        <>
            <div className="secaoCadastroUsuario">
                <div className="cardLogin">
                    <form onSubmit={handleSubmit}>
                        <legend>LOGIN</legend>
                        <div className="inputs">
                            <div className="inputContainer">
                                <label htmlFor="usuario"><FaUser /></label>
                                <input type="text" value={login.nomeDeUsuario} name="nomeDeUsuario" placeholder="Digite o seu usuário" onChange={handleChange} required/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="password"><MdOutlinePassword /></label>
                                <input type="password" value={login.senha} name="senha" placeholder="Digite a sua senha" onChange={handleChange} required/>
                            </div>
                        </div>
                        <button type="submit">LOGAR</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CadastroUsuario
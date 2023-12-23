import { } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

function Login() {
    return (
        <>
            <div className='secaoLogin'>
                <div className="cardLogin">
                    <form action="POST">
                        <legend>LOGIN</legend>
                        <div className="inputs">
                            <div className="inputContainer">
                                <label htmlFor="usuario"><FaUser /></label>
                                <input type="text" name="usuario"placeholder="Digite o seu usuário"/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="password"><MdOutlinePassword /></label>
                                <input type="password" name="senha" placeholder="Digite a sua senha"/>
                            </div>
                        </div>
                        <button>LOGAR</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
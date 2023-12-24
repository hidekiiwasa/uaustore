import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

function Login() {

    const [login, setLogin] = useState({
      nomeDeUsuario: '',
      senha: ''
    });

    const handleChange = async (e) => {
      const { name, value } = e.target;
      setLogin({ ...login, [name]: value });
    };

    const handleSubmit = async(e) => {
      
      e.preventDefault();
      
      fetch('https://testeuaustorafrotaf.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao fazer login');
          }
          return response.json();
        })
        .then(data => {
          const token = data;
          console.log('Token:', token);
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    }
      
      

return (
    <>
        <div className='secaoLogin'>
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

export default Login
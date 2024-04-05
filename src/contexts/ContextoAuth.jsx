import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({})

function AuthProvider({children}){

    const navigate = useNavigate();

    const enviarRequisicao = async(json, api) => {
        try {
            const response = await fetch(`https://testeuaustorafrotaf.onrender.com/${api}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            })
    
            if (!response.ok) {
                throw new Error('Bad response', {
                    cause: {
                        response,
                    }
                })
            }
            
            return response.json();
    
        } catch (error) {
            switch (error.cause.response?.status) {
                case 400:
                    console.log("erro 400 daora");
                    break;
                case 401:
                    console.log("erro 401 daora");
                    break;
                case 403:
                    console.log("erro 403 daora");
                    break;
                case 404:
                    console.log("erro 404 daora");
                    break;
                case 500:
                    console.log("erro 500 daora");
                    break;
            }
            throw error
        }
    }

    const usuarioData = async (token) => {
        try {
            const coisasUser = await fetch("https://testeuaustorafrotaf.onrender.com/auth/autenticar", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
    
            if (!coisasUser.ok) {
                throw new Error('Bad response', {
                    cause: {
                        coisasUser,
                    }
                })
            }

            return coisasUser.json();
            
        } catch(error) {
            switch (error.cause.coisasUser?.status) {
                case 400:
                    console.log("erro 400 daora");
                    break;
                case 401:
                    console.log("erro 401 daora");
                    break;
                case 403:
                    console.log("erro 403 daora");
                    break;
                case 404:
                    console.log("erro 404 daora");
                    break;
                case 500:
                    console.log("erro 500 daora");
                    break;
            }
            throw error
        }
    }

    const [token, setToken] = useState('');
    const [logado, setLogado] = useState(false);
    
    const handleLogout = async () => {
        setLogado(false);
        setToken('')
        navigate('/login');
    }


    const handleLogin = async (json, api) => {
        const resposta = await enviarRequisicao(json, api);
        const newToken = resposta.token;
        setToken(newToken);
        setLogado(true);
    }

    const handleCadastro = async (json, api) => {
        await enviarRequisicao(json, api);
    }

    return (
        <AuthContext.Provider value={{token, logado, setLogado, setToken, handleLogin, enviarRequisicao, usuarioData, handleCadastro, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
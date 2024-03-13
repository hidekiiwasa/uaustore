import { useContext } from 'react';
import { AuthContext } from '../../contexts/ContextoAuth';

function ExcluirPerfil() {

    // Talvez a API não esteja funcionando

    const { token, handleLogout } = useContext(AuthContext);

    const deletarUser = async (token) => {
        console.log(token)
        try {
            const response = await fetch("/usuario/desativar", {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Bad response', {
                    cause: {
                        response,
                    }
                })
            }

            handleLogout();
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
    };

    return (
        <>
            <button onClick={() => deletarUser(token)}>Deletar</button>   
        </>
    )
}

export default ExcluirPerfil
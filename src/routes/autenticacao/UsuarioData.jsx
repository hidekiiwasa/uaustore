import {} from 'react';


const usuarioData = async (token) => {
    try {
        const coisasUser = await fetch("https://testeuaustorafrotaf.onrender.com/auth/autenticar", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

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
export default usuarioData
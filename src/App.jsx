import { } from 'react'

function App() {
  
  const updateUser = async () => {
    const apiUrl = 'https://testeuaustorafrotaf.onrender.com/usuario/atualizar'; // URL da API
  
    const userData = {
      apelido: "bbqwrwq4",
      nomeDeUsuario: "11111",
      senha: "11111",
      email: "564372a@hotmail.com",
      telefone: "abbbbbb"
    };
  
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IjExMTExIiwiZXhwIjoxNzAzMzEyODA4fQ.MUO8LzlE2CTp6HegrbxHcmPF5E5sublK8xcURgwCIsE'; // Token de autenticação
  
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        console.log('Usuário atualizado com sucesso!');
        // Faça algo após a atualização bem-sucedida
      } else {
        console.error('Falha ao atualizar usuário');
        // Trate possíveis erros aqui
      }
    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
      // Lidar com erros de requisição
    }
  };
  
  // Chame a função para atualizar o usuário
  updateUser();
  

  return (
    <>
      <p>qweq</p>
    </>
  )
}

export default App

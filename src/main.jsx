import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx'
import Login from './routes/autenticacao/Login.jsx';
import CadastroUsuario from './routes/autenticacao/CadastroUsuario.jsx';
import Perfil from './routes/user/Perfil.jsx';
import DadosPerfil from './routes/user/DadosPerfil.jsx';
import ExcluirPerfil from './routes/user/ExcluirPerfil.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children:[
      { path: '/login', element: <Login/> },
      { path: '/cadastrousuario', element: <CadastroUsuario/> },
      { path: '/perfil', element: <Perfil/> },
      { path: '/dadosperfil', element: <DadosPerfil/> },
      { path: '/excluirperfil', element: <ExcluirPerfil/> },
      { path: '/', element: <Home/> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

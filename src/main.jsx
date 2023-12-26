import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/autenticacao/Login.jsx'
import App from './App.jsx';
import CadastroUsuario from './routes/autenticacao/CadastroUsuario.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children:[
      { path: '/login', element: <Login/> },
      { path: '/cadastrousuario', element: <CadastroUsuario/> },
      // { path: '/', element: <Home/> },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

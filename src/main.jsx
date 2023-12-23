import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/autenticacao/Login.jsx'
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children:[
      { path: '/login', element: <Login/> },
      // { path: '/', element: <Home/> },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

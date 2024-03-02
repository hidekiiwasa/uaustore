import { } from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from './contexts/ContextoAuth.jsx';
import './scss/styles.css';
import Header from './components/Header.jsx';


function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </>
  )
}

export default App
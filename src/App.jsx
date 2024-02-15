import { } from 'react';
import { Outlet } from 'react-router-dom';
import './scss/styles.css'
import Header from './components/Header.jsx';


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
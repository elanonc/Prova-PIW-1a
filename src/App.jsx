import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { PaginaCadastro } from './components/Pages/PaginaCadastro/PaginaCadastro';
import { PaginaMostrar } from './components/Pages/PaginaMostrar/PaginaMostrar';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/mostrar" element={ <PaginaMostrar/> }/>
            <Route path="/cadastro" element={ <PaginaCadastro/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

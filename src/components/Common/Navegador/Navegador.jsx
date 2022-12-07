import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navegador.css";

export function Navegador() {
  return (
    <div className="navegador">
        <div className="links">
            <NavLink end to="/mostrar">Mostrar</NavLink>
            <NavLink end to="/cadastro">Cadastro</NavLink>
        </div>
    </div>
  )
}
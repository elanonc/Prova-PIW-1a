import React from 'react';

import { Navegador } from '../../Common/Navegador/Navegador';
import { useEffect, useState } from "react";
import { fecthLivros } from '../../../api/todo.api';
import { DetalheItem } from '../../Common/DetalheItem/DetalheItem';

export function PaginaMostrar() {
  let [ itens, setItem ] = useState([]);

  useEffect(() => {
    fecthLivros().then((response) => {
      console.log(response.data);
      setItem(response.data);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div className="PaginaMostrar">
        <Navegador/>
        <div className="item-container">
          <h1>Relação dos livros</h1>
            { itens.map( ( item ) => {
              return (
                <DetalheItem id={item.id} titulo={item.titulo} corpo={item.corpo} />
              )      
            })
          }
        </div>
    </div>

  )
}

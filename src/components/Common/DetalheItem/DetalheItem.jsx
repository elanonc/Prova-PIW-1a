import React from 'react';

export function DetalheItem( {id, titulo, corpo } ) {
  return (
    <div className="detalhe-item">
      <ul>
        <li key={id}>
          <b>Titulo:</b>{titulo}<br/>
          <b>Corpo:</b>{corpo}<br/>
        </li>
      </ul>
    </div>
  )
}
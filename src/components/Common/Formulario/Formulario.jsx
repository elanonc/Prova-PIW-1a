import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarLivro } from '../../../api/todo.api';

import "./Formulario.css";

export function Formulario() {  
  let { register, handleSubmit } = useForm();

  let navigate = useNavigate();

  function tratarSubmit(data){
    console.log(data);
    criarLivro(data.titulo, data.corpo ).then(
      function(todo) {
        console.log(todo);
        navigate("/mostrar");
      }
    ).catch(
      function(error){
        console.log(error);
      }
    )
  }

  return (
   <form className="form" onSubmit={handleSubmit(tratarSubmit)}>
      <div className="titulo">
        <h2>Titulo:</h2> <input {... register("titulo" )} type="text"/>
        <br/>
      </div>
      <div className="corpo">
        <h2>Corpo:</h2> <input {... register("corpo" )} type="text"/>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}
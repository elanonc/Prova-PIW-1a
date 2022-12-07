import axios from "axios";

const url_base = "https://62cc3547a080052930a7709b.mockapi.io/";

export function criarLivro(titulo, corpo){
    console.log({titulo,corpo});
    return axios({
        method:"POST",
        url:url_base+"todo",
        data:{
            titulo,corpo
        }
    });
}

export function fecthLivros(){
    return axios({
        method: "GET",
        url: url_base+"todo",
    })
}
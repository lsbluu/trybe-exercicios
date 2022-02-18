import React, {Component} from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];


const lista = conteudos.map((elemento,index) => {
    return <div className="card" key={index}>
        <p>Conteudo: {elemento.conteudo}</p>
        <p>Bloco: {elemento.bloco}</p>
        <p>Status: {elemento.status}</p>
    </div>
    
});
  


class Content extends Component{
    render(){
        return <div>{lista}</div>
    }
}


export default Content
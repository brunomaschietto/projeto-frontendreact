import React from "react";
import { DivPai, DivTotal, Imagem } from "./styles";

export default function Main (props) {
    const enviarCarrinho = (id) => {
        const adicionar = props.objetos.filter((elemento) => {
            if (elemento.id === id) {
                return elemento
            }
        })
        props.setCarrinho([...props.carrinho, adicionar])
    } 
    console.log(props.carrinho)
    return (
        <DivTotal>
        <DivPai>
            <div><Imagem src={props.elemento.imagem} alt={`Icone do ${props.elemento.nome}`}/></div>
            <div>{props.elemento.nome}</div>
            <div>{props.elemento.lancamento}</div>
            <div>{props.elemento.descricao}</div>
            <div>U${props.elemento.preco}</div>
            <button onClick={() =>enviarCarrinho(props.elemento.id)}>Adicionar ao carrinho</button>
        </DivPai>
        </DivTotal>  
    )
}

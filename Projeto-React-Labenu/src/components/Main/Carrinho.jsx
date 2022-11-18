import React from "react";
import { Carrinho } from "./styles";

export default function CarrinhoCompra(props) {
    const itensCarrinho = props.carrinho.map((elemento) => {
        return (
        <div>
            <div><img src={elemento[0].imagem} alt={`Icone do ${elemento[0].nome}`}/></div>
            <div>{elemento[0].nome}</div>
            <div>U${elemento[0].preco}</div>
        </div>
        )
    })
  return (
    <Carrinho>
      {itensCarrinho}
    </Carrinho>
  );
}

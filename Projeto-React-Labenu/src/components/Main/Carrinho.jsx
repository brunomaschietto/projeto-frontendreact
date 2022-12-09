import React from "react";
import {
  BotaoCarrinho,
  Carrinho,
  CarrinhoDentro,
  DivContador,
  DivDuplo,
  DivPreco,
} from "./styles";
import iconeLixeira from "../Fotos/icons8-excluir-40.png";

export default function CarrinhoCompra(props) {
  const { carrinho, setCarrinho } = props;

  function onClickDelete(id) {
    const carrinhoVazio = carrinho.filter((elemento) => elemento.id !== id);
    setCarrinho(carrinhoVazio);
    if (carrinho.length <= 1) {
      const arrayVazio = JSON.stringify([])
      localStorage.setItem('compra', arrayVazio)
    }
  }

  const onClickDiminuirQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    carrinho.map((produto) => {
      if (produto.quantidade > 1) {
        const novoCarrinho = [...carrinho];
        novoCarrinho[i] = {
          ...novoCarrinho[i],
          quantidade: novoCarrinho[i].quantidade - 1,
        };
        setCarrinho(novoCarrinho);
      } else {
        const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
        setCarrinho(carrinhoSemItem);
        localStorage.clear();
      }
    });
  };

  const onClickAumentarQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    carrinho.map((produto) => {
      if (produto.quantidade < 10) {
        const novoCarrinho = [...carrinho];
        novoCarrinho[i] = {
          ...novoCarrinho[i],
          quantidade: novoCarrinho[i].quantidade + 1,
        };
        setCarrinho(novoCarrinho);
      } else {
        alert("Só é permitido comprar 10 itens de cada produto por pessoa");
      }
    });
  };
  const onClickCarrinhoFinalizado = () => {
    window.alert('Seu pedido foi finalizado!')
    setCarrinho([])
    localStorage.clear()
  }

  const itensCarrinho = carrinho.map((elemento) => {
    return (
      <CarrinhoDentro key={elemento.id}>
        <div>
          <img src={elemento.imagem} alt={`Icone do ${elemento.nome}`} />
        </div>
        <div>U${elemento.preco}</div>
        <DivDuplo>
          <DivContador>
            <button
              onClick={() => {
                onClickDiminuirQuantidade(elemento.id);
              }}
            >
              -
            </button>
            <div>{elemento.quantidade}</div>
            <button
              onClick={() => {
                onClickAumentarQuantidade(elemento.id);
              }}
            >
              +
            </button>
          </DivContador>
          <button
            onClick={() => {
              onClickDelete(elemento.id);
            }}
          >
            <img src={iconeLixeira} />
          </button>
        </DivDuplo>
      </CarrinhoDentro>
    );
  });
  let valorTotal = 0;
  carrinho.map(
    (produto) => (valorTotal = valorTotal + produto.preco * produto.quantidade)
  );
  console.log(valorTotal);
  return (
    <>
      <Carrinho>
        {itensCarrinho}
        <DivPreco>Preço total: {valorTotal}</DivPreco>
        <BotaoCarrinho onClick={onClickCarrinhoFinalizado}>Finalizar pedido</BotaoCarrinho>
      </Carrinho>
        
    </>
  );
}

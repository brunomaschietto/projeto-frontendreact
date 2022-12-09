import React from "react";
import { DivPai, DivTotal, Imagem } from "./styles";

export default function Main(props) {
  const { carrinho, setContador, setCarrinho, objetos } = props;
  const enviarCarrinho = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    if (i !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        quantidade: novoCarrinho[i].quantidade + 1,
      };
      setCarrinho(novoCarrinho);
    } else {
      const produtoEncontrado = objetos.find(
        (elemento) => elemento.id === id
      );
      const novoProduto = { ...produtoEncontrado, quantidade: 1 };
      setCarrinho([...carrinho, novoProduto]);
    }
  };

  let quantidadeTotal = 0;
  carrinho.map(
    (produto) => (quantidadeTotal = quantidadeTotal + produto.quantidade)
  );
  setContador(quantidadeTotal);

  console.log(props.carrinho);
  return (
    <DivTotal>
      <DivPai>
        <div>
          <Imagem
            src={props.elemento.imagem}
            alt={`Icone do ${props.elemento.nome}`}
          />
        </div>
        <div>{props.elemento.nome}</div>
        <div>{props.elemento.lancamento}</div>
        <div>{props.elemento.descricao}</div>
        <div>U${props.elemento.preco},00</div>
        <button onClick={() => enviarCarrinho(props.elemento.id)}>
          Adicionar ao carrinho
        </button>
      </DivPai>
    </DivTotal>
  );
}

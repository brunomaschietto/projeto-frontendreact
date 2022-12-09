import React from "react";
import { Cabecalho, DivUm, DivDois, DivCarrinho} from "./styles";
import iconeET from "../Fotos/iconeSateliteHeader.png";
import iconeCarrinho from '../Fotos/icons8-carrinho-de-compras-48.png'

export default function Header(props) {
  const handleSearch = (e) => {
    props.setPesquisa(e.target.value);
  };
  const handleOrdem = (e) => {
    props.setOrdem(e.target.value);
  };
  const handleValorMin = (e) => {
    props.setValorMin(e.target.value)
  }
  const handleValorMax = (e) => {
    props.setValorMax(e.target.value)
  }
  const clickBotao = (e) => {
    props.setMostrar(!props.mostrar)
  };
  return (
    <Cabecalho>
      <DivUm>
        <img src={iconeET} alt="Icone de ET" />
        <h1>Oldest Satelisttes's Store</h1>
      </DivUm>
      <DivDois>
        <input type="text" placeholder="O que você procura?" onChange={handleSearch} value={props.pesquisa}/>
        <select onChange={handleOrdem}>
          <option value="Ordenar">Ordenar</option>
          <option value="Crescente">Do mais barato ao mais caro</option>
          <option value="Decrescente">Do mais caro ao mais barato</option>
        </select>
        <input type="number" placeholder="Valor mínimo" value={props.valorMin} onChange={handleValorMin}/>
        <input type="number" placeholder="Valor máximo" value={props.valorMax} onChange={handleValorMax}/>
      </DivDois>
      <DivCarrinho>
        <img src= {iconeCarrinho} alt="icone carrinho" onClick={clickBotao} />
      </DivCarrinho>
    </Cabecalho>
  );
}

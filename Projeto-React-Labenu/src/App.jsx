import React from "react";
import { Container, ContainerMain } from "../style";
import Header from "./components/Header/Header";
import FotoSput from "./components/Fotos/foto-sputnik.jpg";
import FotoExplorerUm from "./components/Fotos/foto-explorer1.jpg";
import FotoExplorerSeis from "./components/Fotos/foto-explorer6.jpg";
import FotoTirosUm from "./components/Fotos/foto-tiros1.jpg";
import FotoVostokUm from "./components/Fotos/foto-vostok1.jpg";
import FotoLunaDez from "./components/Fotos/foto-luna10.jpg";
import Main from "./components/Main/ContainerCards";
import { useState } from "react";
import CarrinhoCompra from "./components/Main/Carrinho";

export default function App() {
  const objetos = [
    {
      id: 1,
      imagem: FotoSput,
      nome: "Sputnik",
      lancamento: "4 de outubro de 1957",
      descricao:
        "O Sputnik coletou dados sobre a densidade de camadas atmosféricas superiores, além de medir a qualidade dos sinais de rádio na ionosfera.",
      preco: 1000000,
    },
    {
      id: 2,
      imagem: FotoExplorerUm,
      nome: "Explorer 1",
      lancamento: "31 de janeiro de 1958",
      descricao:
        "A maior façanha do Explorer 1 foi confirmar a existência dos cinturões de Van Allen, que são zonas de partículas carregadas que armazenam a radiação na magnetosfera.",
      preco: 850000,
    },
    {
      id: 3,
      imagem: FotoExplorerSeis,
      nome: "Explorer 6",
      lancamento: "7 de agosto de 1959",
      descricao:
        "Sua principal função era estudar a radiação das camadas superiores e determinar a frequência com que micrometeoritos penetravam nossa atmosfera.",
      preco: 600000,
    },
    {
      id: 4,
      imagem: FotoTirosUm,
      nome: "TIROS I",
      lancamento: "1 de Abril de 1960",
      descricao:
        "Esse satélite foi o primeiro a ter funções meteorológicas, com duas câmeras acopladas que tiravam fotografias das nuvens sobre a Terra e enviavam os sinais via ondas de TV.",
      preco: 300000,
    },
    {
      id: 5,
      imagem: FotoVostokUm,
      nome: "Vostok 1",
      lancamento: "12 de abril de 1961",
      descricao:
        "Foi a primeira missão do programa espacial soviético Vostok e a primeira missão espacial tripulada da História.",
      preco: 1200000,
    },
    {
      id: 6,
      imagem: FotoLunaDez,
      nome: "Luna 10",
      lancamento: "31 de Março de 1966",
      descricao:
        "O Luna 10 mediu o campo magnético, a radiação, a gravidade e outras funções de nosso satélite natural. Um espectrômetro de raios gama também coletou informações sobre a composição do solo de lá.",
      preco:  1100000
    },
  ];
  const [mostrar, setMostrar] = useState(false);
  const [pesquisa, setPesquisa] = useState('');
  const [valorMin, setValorMin] = useState('')
  const [valorMax, setValorMax] = useState('')
  const [ordem, setOrdem] = useState('');
  const [carrinho, setCarrinho] = useState([]);

  return (
    <Container>
      <Header 
      pesquisa = {pesquisa}
      setPesquisa = {setPesquisa}
      ordem = {ordem}
      setOrdem = {setOrdem}
      mostrar={mostrar}
      setMostrar={setMostrar}
      valorMin = {valorMin}
      setValorMin = {setValorMin}
      valorMax = {valorMax}
      setValorMax = {setValorMax}

       />
      <ContainerMain>
        
        {objetos
        .filter((elemento) => {
          return pesquisa ? elemento.nome.toLowerCase().includes(pesquisa.toLowerCase()) : elemento;  
        })
        .sort((elementoA, elementoB) => {
          if (ordem === "Crescente") {
            if (elementoA.preco > elementoB.preco) return 1;
            if (elementoA.preco < elementoB.preco) return -1;
          } else if (ordem === 'Decrescente') {
            if (elementoA.preco < elementoB.preco) return 1;
            if (elementoA.preco > elementoB.preco) return -1;
            else {
              return 0;
            }
          }
        })
        .filter((elemento) => {
          if (+valorMax <= elemento.preco) {
            return elemento
          } 
        })
        .filter((elemento) => {
          if (+valorMin >= elemento.preco) {
            return elemento
          } else if (+valorMin.length === 0 ) {
            return elemento
          }
        }) 
        .map((elemento) => {
          return <Main objetos={objetos} key={elemento.id} elemento={elemento} carrinho={carrinho} setCarrinho={setCarrinho}/>
        })}
        
        {mostrar && <CarrinhoCompra objetos={objetos} carrinho={carrinho} setCarrinho={setCarrinho}/>}
        
      </ContainerMain>
      
    </Container>
  );
}

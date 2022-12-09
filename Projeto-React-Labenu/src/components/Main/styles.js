import styled from "styled-components";


export const Imagem = styled.img`
    width: 390px;
    height: 390px;
`

export const DivPai = styled.div`
    width: 400px;
    height: 650px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    text-align: center;
    gap: 10px;
    background-color: white;
    button {
        height: 30px;
        width: 150px;
        border-radius: 6px;
        border: 0.5px solid black;
        cursor: pointer;
        background-color: rgba(0,49,93,255);
        color: white;
        font-family: 'DM sans', sans-serif;
    }
    button:hover {
        background-color: rgba(0,27,63,255);
    }

`

export const DivTotal = styled.div`
    display: flex;
    gap: 100px;
`

export const Carrinho = styled.div`
    width: 250px;
    /* border: 1px solid black; */
    position: absolute;
    background-color: white;
    top: 60px;
    right: 20px;
    display: flex;
    flex-direction: column;
    /* padding-bottom: 20px; */
    img {
        height: 60px;
        width: 60px;
    }
`

export const CarrinhoDentro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    /* border: 1px solid black; */
    button {
        height: 25px;
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button img {
        height: 20px;
        width: 20px;
    }
`
export const DivContador = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 4px;
    div {
        height: 25px;
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: 25px;
    }
`

export const DivDuplo = styled.div`
    display: flex;
    gap: 30px;
`

export const DivPreco = styled.div`
    padding: 10px 50px;
`

export const BotaoCarrinho = styled.button`
    align-self: center;
    width: 150px;
    height: 30px;
    color: white;
    background-color: darkblue;
    cursor: pointer;
    border: none;
`
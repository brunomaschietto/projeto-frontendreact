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
    width: 500px;
    border: 1px solid black;
    position: absolute;
    background-color: white;
    top: 60px;
    right: 20px;
    img {
        height: 60px;
        width: 60px;
    }
`
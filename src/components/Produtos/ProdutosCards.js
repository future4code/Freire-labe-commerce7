import React from "react";
import styled from "styled-components";

const ContainerCards = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background-color: #14B5D9;
`

const Informacao = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    
    text-align: center;
    
    p {
         color:#011126;
    }

`
const BotaoCarrinho =styled.button`
    width: 100%;
    height: 30px;    
    background-color:#F2387C;
    border:none;
    color:white;
    
`




export class ProdutosCards extends React.Component {
    render(){
        const produto = this.props.produto
        return <ContainerCards>
          <img src={produto.imagem} alt="meteorito"/>
          <Informacao>
            <p className="ParagrafoCard">{produto.nome}</p>
            <p><strong>R${produto.preco},00</strong></p>
          </Informacao>
          <BotaoCarrinho onClick={() => this.props.adicionarAoCarrinho(produto.id)}>
              Adicionar ao carrinho
            </BotaoCarrinho>
        </ContainerCards>
    }
}
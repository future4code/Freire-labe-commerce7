import React from "react";
import styled from "styled-components";

const Aside = styled.div`
background-color:#F2387C;
text-align: center;
color:white;
`

export default function Bascket(props) {
  
  const { cartItems, removerProdutoDoCarrinho } = props;
  const itensCarrinho = cartItems.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.quantidade} - {item.nome} </p>
        

        <div>
          
          <button onClick={() => removerProdutoDoCarrinho(item)}>
            -
          </button>
        </div>
      </div>
    );
  });
  // calculaValorTotal = () => {
  //   let valorTotal = 0

  //   for (let produtos of cartItems) {
  //     valorTotal += produtos.preco * produtos.quantidade
  //   }

  //   return valorTotal
  // }

  return (
    <Aside className="bloco1">
      <h2>Carrinho:</h2>
      <div>{cartItems === 0 && <div>O carinho está vazio</div>}</div>
      {itensCarrinho}
      
    </Aside>
  );
}

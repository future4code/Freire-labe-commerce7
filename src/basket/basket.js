import React from "react";

export default function Bascket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itensCarrinho = cartItems.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.name}</div>
        <div>
          <button onClick={() => onAdd(item)} className="add">
            +
          </button>
          <button onClick={() => onRemove(item)} className="add">
            -
          </button>
        </div>
      </div>
    );
  });

  return (
    <aside className="bloco1">
      <h2>Carrinho:</h2>
      <div>{cartItems === 0 && <div>O carinho está vazio</div>}</div>
      {itensCarrinho}
    </aside>
  );
}

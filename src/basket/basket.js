import React from 'react';

export default function Bascket(props) {
  const {cartItems, onAdd, onRemove} = props;
  return (
    <aside className='bloco1'>
   <h2>Carrinho:</h2>
   <div>{cartItems === 0 && <div>O carinho está vazio</div>}</div>
   {cartItems.map((item) => (
    <div key={item.id} className="row">
    <div>{item.name}</div>  
   <div>
   <button onClick={()=>onAdd(item)} className="add">+</button>
   <button onClick={()=>onRemove(item)} className="add">-</button>
   </div>
   
   ))}
   </aside>

    
  );
}
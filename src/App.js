import React from 'react';
import Produtos from './components/Produtos/Produtos'

const produtos = [
  {
    id: 1,
    name: "Meteorito 1",
    value: 500,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    name: "Meteorito 2",
    value: 500,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    name: "Meteorito 3",
    value: 500,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    name: "Meteorito 4",
    value: 500,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 5,
    name: "Meteorito 5",
    value: 500,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    name: "Meteorito 6",
    value: 500,
    imageUrl: "https://picsum.photos/200/200",
  }
]

class App extends React.Component {
  state = {
    
      
  }
  render() {
     return (
    <Produtos
    produtos = {produtos}
      
    />
      
  );
  }
 
}

export default App;

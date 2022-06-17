import React from 'react';
import Produtos from './components/Produtos/Produtos'
import Filtros  from './components/Filtros';

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
    busca: "",
    minPrice: "",
    maxPrice: "", 
 }  


uptadeMinPrice = (event) => {

    this.setState({minPrice: event.target.value})
}

uptadeMaxPrice = (event) => {

    this.setState({maxPrice: event.target.value})
}

uptadeBusca = (event) => {

    this.setState({busca: event.target.value})
}


  render() {
     return 
      <div>
        <header></header>

        <main>

          <Filtros
          valorMinPrice={this.state.minPrice}
          valorMaxPrice={this.state.maxPrice}
          valorBuscaProduto={this.state.busca}
          filtroMinPrice={this.uptadeMinPrice}
          filtroMaxPrice={this.uptadeMaxPrice}
          filtroBuscaProduto={this.uptadeBusca}          
          />

          <div><Produtos
    produtos = {produtos}
          </div>

          <div>Carinhos</div>

        </main>

        <footer></footer>
      </div>
    
      
    />
      
  );
  }
 

}

export default App;

import './App.css';
import {useState} from "react"

import MenuContainer from "./componentes/MenuContainer"

import Sales from "./componentes/Sales"

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [currentSale, setCurrentSale] = useState([])

  const [cartTotal, setCartTotal] = useState(0)

  function showProducts(item){
      const nome = products.filter((e)=>e.name===item);
      nome.length===0?
      setFilteredProducts(products)
      :
      setFilteredProducts(nome)
  }

  function handleClick(productId){
      const produto = products.find((e)=>e.id===productId)
      currentSale.indexOf(produto)===-1?
      setCurrentSale([produto,...currentSale])
      :
      setCurrentSale(currentSale)
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <MenuContainer produtos={products} filter={filteredProducts} showProducts={showProducts} handleClick={handleClick}/>
        
        <Sales currentSales={currentSale}/>
      </header>
    </div>
  );
}

export default App;

import MenuContainer from './components/MenuContainer';
///import WhiteB from './components/WhiteB';
import Subtotal from './components/Subtotal';
import NavBar from './components/NavBar';
import ContCart from './components/ContCart';
import './App.css';
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer',  category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada',   category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná',    category: 'Bebidas',    price: 4.99 },
    { id: 6, name: 'Coca',       category: 'Bebidas',    price: 4.99 },
    { id: 7, name: 'Fanta',      category: 'Bebidas',    price: 4.99 },
  ]); 

const [filteredProducts, setFilteredProducts] = useState([]);

const [currentSale, setCurrentSale] = useState([]);
const [cartTotal, setCartTotal] = useState(0);
const [userInput, setUserInput] = useState("");


const showProducts = (e) =>{
  e.preventDefault();
//  setFilteredProducts([...filteredProducts, products.filter(item =>item.name === e)]
//  )
};
 const  handleClick = (e) =>{
   setCurrentSale(
     [...currentSale, products.find(item=>item.id === e)]
   )
};
/*
const total =()=>{
  setCartTotal(
    [...cartTotal, currentSale.map(item=>item.price).reduce((a,b)=>{
      return a + b
    })]
  )
}
*/
return (
  <>
        <h1>KenzieBurguer</h1>
      <NavBar
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        showProducts= {showProducts}
        userInput = {userInput}
        setUserInput = { setUserInput }
      ></NavBar>
  <div className="App">
    <div className="ContainerMenu">
      <MenuContainer
        item = {
        products.map(item=>
         item) }
        
        products = { products }
        setProducts = { setProducts }
        handleClick = { handleClick }
      />
      <Subtotal
        currentSale = {currentSale}
        cartTotal ={ Number(cartTotal)}
        setCartTotal = {setCartTotal}
      ></Subtotal>
    </div>

      <ContCart
        currentSale = {currentSale}
    
      ></ContCart>

    </div>
    </>
  );
}

export default App;

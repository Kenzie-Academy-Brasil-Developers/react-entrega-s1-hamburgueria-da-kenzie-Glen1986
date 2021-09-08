import MenuContainer from './components/MenuContainer'
import Product from './components/Product'
import Subtotal from './components/Subtotal'
import NavBar from './components/NavBar'
import './App.css';
import { useState } from 'react'

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

const [filteredProducts, setFilteredProducts] = useState([]);

const [currentSale, setCurrentSale] = useState([]);
const [cartTotal, setCartTotal] = useState(0);
const [userInput, setUserInput]=useState("");


const  showProducts = (e) =>{
  setFilteredProducts([...filteredProducts, products.filter(item =>item.name === e)]
    //console.log(products.filter(item =>item.name === e))
  )
};
 const  handleClick = (e) =>{
     var newObj = products.find((item) =>item.id === e);
     console.log(newObj.price)
     console.log(e)
   setCurrentSale(
     [...currentSale, [newObj.name,<br/>, newObj.category,<br/>, newObj.price,<br/>]]
   )
}
const suma = ({newObj}) =>{
    var cunt = newObj.map(item => item === item.price).reduce((a,b)=> a+b)
  setCartTotal(
    [cartTotal,  cunt]
  )
}
return (
  <>
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
          products={products}
          setProducts={setProducts}
          id={products.id=1 }
          name={products.name='X-Burguer' }
          category={products.category='Sanduíches' }
          price={products.price= 8.99 }
          showProducts = {showProducts}
          handleClick={handleClick}
         
        />
       <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=2 }
          name={products.name='X-Burguer' }
          category={products.category='Sanduíches' }
          price={products.price= 8.99 }
          showProducts = {showProducts}
          handleClick={handleClick}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=3 }
          name={products.name='X-Salada' }
          category={products.category='Sanduíches' }
          price={products.price= 10.99 }
          showProducts = {showProducts}
          handleClick={handleClick}
        /> 
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=4 }
          name={products.name='Big-Kenzie' }
          category={products.category='Sanduíches' }
          price={products.price= 16.99 }
          showProducts = {showProducts}
          handleClick={handleClick}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=5 }
          name={products.name='Guaraná' }
          category={products.category='Bebidas' }
          price={products.price= 4.99 }
          showProducts = {showProducts}
          handleClick={handleClick}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=6 }
          name={products.name='Coca' }
          category={products.category='Bebidas' }
          price={products.price= 4.99 }
          showProducts = {showProducts}
          handleClick={handleClick}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=7 }
          name={products.name='Fanta' }
          category={products.category='Bebidas' }
          price={products.price= 4.99 }
          showProducts = {showProducts}
          handleClick={handleClick}
        />


{/*
       <MenuContainer
         products={products}
         setProducts={setProducts}
         id={products.map((item)=>item.id)}
         name={products.map((item)=>item.name)}
         category={products.map((item)=>item.category)}
         price={products.map((item)=>item.price)}
         showProducts={showProducts}
       ></MenuContainer>


       <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=[...products.id] }
          name={products.name=[...products.name] }
          category={products.category=[...products.category] }
          price={products.price=[...products.price]}
        />
        **/}
            </div>
       <Product
         currentSale = { currentSale }
         setCurrentSale = { setCurrentSale }
       ></Product>
    <div>
      <Subtotal
        cartTotal = {cartTotal}
      ></Subtotal>
    </div>

    </div>
    </>
  );
}

export default App;

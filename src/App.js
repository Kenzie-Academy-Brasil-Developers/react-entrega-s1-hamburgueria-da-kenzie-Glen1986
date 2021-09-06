import MenuContainer from './components/MenuContainer'
import Product from './components/Product'
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

//const [filteredProducts, setFilteredProducts] = useState([]);

//const [currentSale, setCurrentSale] = useState([])
const [cartTotal, setCartTotal] = useState(0)

const  showProducts = (e) =>{
  console.log(e)
}
// const  handleClick = (productId) =>{

//}
return (
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
        />
       <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=2 }
          name={products.name='X-Burguer' }
          category={products.category='Sanduíches' }
          price={products.price= 8.99 }
          showProducts = {showProducts}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=3 }
          name={products.name='X-Salada' }
          category={products.category='Sanduíches' }
          price={products.price= 10.99 }
          showProducts = {showProducts}
        /> 
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=4 }
          name={products.name='Big-Kenzie' }
          category={products.category='Sanduíches' }
          price={products.price= 16.99 }
          showProducts = {showProducts}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=5 }
          name={products.name='Guaraná' }
          category={products.category='Bebidas' }
          price={products.price= 4.99 }
          showProducts = {showProducts}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=6 }
          name={products.name='Coca' }
          category={products.category='Bebidas' }
          price={products.price= 4.99 }
          showProducts = {showProducts}
        />
        <MenuContainer
          products={products}
          setProducts={setProducts}
          id={products.id=7 }
          name={products.name='Fanta' }
          category={products.category='Bebidas' }
          price={products.price= 4.99 }
          showProducts = {showProducts}
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
       <Product></Product>
    </div>
  );
}

export default App;

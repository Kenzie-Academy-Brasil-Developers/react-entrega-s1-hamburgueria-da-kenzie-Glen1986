import Product from '../Product';
import './style.css';
const MenuContainer =({item, products, setProducts})=>{


  return(
  <div className="block">
    <Product
      item = {item}
      products = {products.map(item=>item)}
      setProducts =  {setProducts}

    ></Product>
 </div>
  )
}
export default MenuContainer;

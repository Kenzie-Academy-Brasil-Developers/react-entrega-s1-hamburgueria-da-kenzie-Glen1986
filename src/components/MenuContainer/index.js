import Product from '../Product';
import './style.css';
const MenuContainer =({total, handleClick, item, products, setProducts})=>{


  return(
  <div className="block">
     {item.map(item=> <Product handleClick={handleClick} item ={item} key = {item.id} />)}
 </div>
  )
}
export default MenuContainer;

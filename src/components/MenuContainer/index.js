import Product from '../Product';
import './style.css';
const MenuContainer =({ handleClick, item})=>{


  return(
  <div className="block">
     {item.map(item=> <Product handleClick={handleClick} item ={item} key = {item.id} />)}
 </div>
  )
}
export default MenuContainer;

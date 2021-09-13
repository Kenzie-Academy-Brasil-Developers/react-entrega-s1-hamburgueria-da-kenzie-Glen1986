import Product from '../Product';
import './style.css';
const MenuContainer =({userInput, handleClick, item})=>{

  return(
  <div key={item.id}className="block">
    {item.map(item=>  <Product key={item.id} handleClick={handleClick} item={item}  />)}
  </div>
  )
}
export default MenuContainer;

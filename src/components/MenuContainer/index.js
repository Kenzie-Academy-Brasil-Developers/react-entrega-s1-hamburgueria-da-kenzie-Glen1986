import Product from '../Product';
import './style.css';
const MenuContainer =({ index, userInput, handleClick, item})=>{
  return(
  <ul className="block">
    {item.map(item=>  <Product handleClick={handleClick} item={item}  />)}
  </ul>
  )
}
export default MenuContainer;

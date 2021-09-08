import './style.css'
const MenuContainer =({showProducts,products, setProduct, name, id, button, suma, category, price, handleClick})=>{


  return(
  <tr className="block">
    <td className="id">{id}</td>
    <td className="nombre">{name/*products.map(item => item = item.name)*/}</td>
    <td className="categoria">{category/*products.map(item => item = item.category)*/}</td>
    <td className="precio">{price/*products.map(item => item = item.id)}price*/}</td>
    <button className="button" onClick = {e=>handleClick(e.target.id)}>{button}</button>
  </tr>
  )
}
export default MenuContainer;

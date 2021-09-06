import './style.css'
const MenuContainer =({showProducts,products, setProduct, name, id, category, price})=>{


  return(
  <div className="block">
    <div className="id">{id /*products.map(item => item = item.id)*/}</div>
    <div className="nombre">{name/*products.map(item => item = item.name)*/}</div>
    <div className="categoria">{category/*products.map(item => item = item.category)*/}</div>
    <div className="precio">{price/*products.map(item => item = item.id)}price*/}</div>
    <button className="precio" onClick = {e=>showProducts({id})}>carrinho</button>
  </div>
  )
}
export default MenuContainer;

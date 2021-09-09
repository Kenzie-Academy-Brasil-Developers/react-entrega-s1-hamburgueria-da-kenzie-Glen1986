import './style.css'
const Product =( {addCart,item,id, name, category, price, handleClick,products } )=>{
  return(
  <div className="product">
    <div className="id">{item.id}</div>
    <div className="nombre">{item.name}</div>
    <div className="categoria">{item.category}</div>
    <div className="precio">{item.price}</div>
    <button id={item.id} onClick= {()=>handleClick(item.id)}  className="button">{item.name}</button>
  </div>
  )
}
export default Product;



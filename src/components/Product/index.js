import './style.css'
const Product =( {item,arreglo,handleClick,products } )=>{
  return(
  <div className="product">
    <div className="id">item</div>
    <div className="nombre">nombre</div>
    <div className="categoria">categoria</div>
    <div className="precio">precio</div>
    <button onClick= {(e)=>console.log(item)} className="button">click</button>
  </div>
  )
}
export default Product;


<div></div>

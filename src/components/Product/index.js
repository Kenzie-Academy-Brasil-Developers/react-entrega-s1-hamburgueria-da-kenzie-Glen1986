import './style.css'
const Product =( {currentSale} )=>{
  return(
  <section className="product">
    <div className="nombre">{currentSale}</div>
    <button>click</button>
  </section>
  )
}
export default Product;

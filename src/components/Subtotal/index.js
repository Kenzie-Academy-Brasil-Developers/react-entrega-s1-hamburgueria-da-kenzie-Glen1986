import './style.css'
const Subtotal =({filteredProducts})=>{
  return(
  <section className="subtotal">
    <h3>subtotal:</h3>
    <p> {filteredProducts.name}</p>
  </section>
  )
}
export default Subtotal;

import './style.css'
const Subtotal =({currentSale, cartTotal, total})=>{
  return(
  <section className="subtotal">
    <h3>subtotal:</h3>
    <h5> {cartTotal}R</h5>
  </section>
  )
}
export default Subtotal;

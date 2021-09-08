import './style.css'
const Subtotal =({cartTotal})=>{
  return(
  <section className="subtotal">
    <h3>subtotal:</h3>
    <p> {cartTotal}</p>
  </section>
  )
}
export default Subtotal;

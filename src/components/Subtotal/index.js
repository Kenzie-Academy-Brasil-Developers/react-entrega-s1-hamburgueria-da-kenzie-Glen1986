import './style.css'
const Subtotal =({ cartTotal,setCartTotal})=>{
  return(
  <section className="subtotal">
    <h3>subtotal:</h3>
    <h5> {cartTotal}R</h5>
  </section>
  )
}
export default Subtotal;

import './style.css'
const Subtotal =({currentSale,setCartTotal, cartTotal})=>{
  return(
  <section className="subtotal">
    <h3>subtotal:</h3>
    <h5> {(currentSale).toFixed(2)}R</h5>
    <button onClick={()=>alert(`total a pagar: ${currentSale}`)}>caixa</button>
  </section>
  )
}
export default Subtotal;

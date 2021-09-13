import './style.css'
const Subtotal =({currentSale, cartTotal, total})=>{
  return(
  <section className="subtotal">
    <h3>subtotal:</h3>
    <h5> {currentSale}R</h5>
    <button onClick={()=>alert(`total a pagar: ${currentSale}`)}>caixa</button>
  </section>
  )
}
export default Subtotal;

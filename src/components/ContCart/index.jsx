import './styles.css'
import Cart from '../Cart'

const ContCart =({currentSale})=>{
  return(
    <section className="carrinho">
      <h2>Carrinho</h2>
      <div className="container">
        {
          currentSale.map(item => <Cart key={item.id} item={item}/>)
        }
      </div>
    </section>
  )
}
export default ContCart;

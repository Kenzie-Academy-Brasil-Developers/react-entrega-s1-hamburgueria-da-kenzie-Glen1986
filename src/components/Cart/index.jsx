import './styles.css'
const Cart = ({item,currentSale})=> {
  return(
  <div key={item.index} className="cart">
    <div className="cartName">{item.name}</div>
    <div className="cartPrice">{item.price}</div>
    <button onClick={()=>alert(`vc escolhou: ${item.name}`)}>carrinho</button>
  </div>
  )
}
export default Cart;

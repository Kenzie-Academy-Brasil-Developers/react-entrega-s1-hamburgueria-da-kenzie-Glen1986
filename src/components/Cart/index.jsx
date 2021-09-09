import './styles.css'
const Cart = ({currentSale})=> {
  return(
  <div className="cart">
    {currentSale.map(item=><div className="cartId">{item.id}</div>)}
    {currentSale.map(item=><div className="cartName">{item.name}</div>)}
    {currentSale.map(item=><div className="cartCategory">{item.category}</div>)}
    {currentSale.map(item=><div className="cartPrice">{item.price}</div>)}
  </div>
  )
}
export default Cart;

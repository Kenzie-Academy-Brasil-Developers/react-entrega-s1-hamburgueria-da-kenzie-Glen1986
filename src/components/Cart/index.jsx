import './styles.css'
const Cart = ({item,currentSale})=> {
  return(
  <div className="cart">
    <div className="cartId">{item.id}</div>
    <div className="cartName">{item.name}</div>
    <div className="cartCategory">{item.category}</div>
    <div className="cartPrice">{item.price}</div>
    <button onClick={()=>console.log("buy")}></button>
  </div>
  )
}
export default Cart;

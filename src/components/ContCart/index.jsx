import Cart from '../Cart'

const ContCart =({currentSale})=>{
  return(
    <>
      <h2>Carrinho</h2>
      <div className="container">
        {
          currentSale.map(item => <Cart key={item.id} item={item}/>)
        }
      </div>
    </>
  )
}
export default ContCart;

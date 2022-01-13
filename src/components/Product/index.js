import './style.css'
const Product =( {index, filteredProducts, addCart,item,id,userInput, name, category, price,total, handleClick,products } )=>{

 const key = `${item.index}`
  return(
    <>
      <li className="product" key = {key}>
        <div className="id">{item.id}</div>
        <div className="nombre">{item.name}</div>
        <div className="categoria">{item.category}</div>
        <div className="precio">{item.price}.R</div>
        <button id={item.id} onClick= {()=>handleClick(item.id)
                                                                  
      }  className="button">{item.name}</button>
      </li>
   </>

  )
}
export default Product;



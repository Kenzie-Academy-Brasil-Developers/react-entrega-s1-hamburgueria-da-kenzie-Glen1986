
import './styles.css'
const FiltredProduct =( { filteredProducts, addCart,item,id,userInput, name, category, price,total, handleClick,products } )=>{
  return(
       <div className="product">
        <div className="id">{item.id}</div>
        <div className="nombre">{item.name}</div>
        <div className="categoria">{item.category}</div>
        <div className="precio">{item.price}.R</div>
        <button id={item.id} onClick= {()=>handleClick(item.id)
                                                                  
      }  className="button">{item.name}</button>
      </div>


  )
}
export default FiltredProduct;



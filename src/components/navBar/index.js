import './style.css'
const NavBar = ({userInput, setUserInput, showProducts, filteredProducts, setFilteredProducts}) =>{
  return(
  <form>
    <input value={userInput}
           onChange={(e)=>setUserInput(e.target.value)} 
           type="text"    
    />
    <button onClick = {(userInput)=>showProducts(userInput)} >Find</button>
  </form>
  )
}
export default NavBar;

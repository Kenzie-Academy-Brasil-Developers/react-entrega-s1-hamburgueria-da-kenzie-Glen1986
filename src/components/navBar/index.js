import './style.css'
const NavBar = ({userInput, setUserInput, showProducts, filteredProducts, setFilteredProducts}) =>{
  return(
  <form action="Get">
    <input value={userInput}
           onChange={e=>setUserInput(e.target.value)} 
           type="text"    
    />
    <button className="NavBar" onClick = {(e) => showProducts}>Find</button>
  </form>
  )
}
export default NavBar;

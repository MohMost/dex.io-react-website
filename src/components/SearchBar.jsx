import classes from './SearchBar.module.css'

function SearchBar() {
  return (
    <>
      <form className={classes.add}>
          <input 
            name="add"
            className={classes.search}
            type="text"
            placeholder="Enter pokémon name here........."
          />
      </form>
      
      </>
  )
}

export default SearchBar
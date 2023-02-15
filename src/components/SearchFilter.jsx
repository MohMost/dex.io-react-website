import Filters from './Filters'
import SearchBar from './SearchBar'
import classes from './SearchFilter.module.css'

function SearchFilter (){
  return (
    <div className={classes.SearchBar}>
      <SearchBar/>
      <Filters/>
    </div>

  )
}

export default SearchFilter
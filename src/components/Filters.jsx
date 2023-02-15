import classes from './Filters.module.css'
import {useState} from 'react'


function Filters (){
  const [state, setState] = useState(true)
  const [state2, setState2] = useState(true)
  const [state3, setState3] = useState(true)
 
  
  function dropTypeHandler(){
    setState(!state)
    
  }
  function dropGenHandler(){
    setState2(!state2)
  }
  function dropEggHandler(){
    setState3(!state3)
  }

  return(
  <>
    <p className={classes.or} >or <span className={classes.by}>Fliter by :</span></p>
  <div className={classes.filters}>
    <div className={`${classes.drop} ${classes.filter}`}>
      <p >Fliter by :</p>
    </div>

    <div className={classes.container}>
      <div className={`${classes.drop} ${classes.type}`} onClick={dropTypeHandler}>
        <p>Type</p>
        <img className="down" src="img/triangle.svg" alt=""/>
      </div>
      <ul className={`${classes.sub} ${classes.a} ${state ? `${classes.show}` : ''}`}>
        <li>grass</li>
        <li>fire</li>
        <li>water</li>
        <li>bug</li>
        <li>normal</li>
        <li>poison</li>
        <li>electric</li>
        <li>ground</li>
        <li>fairy</li>
        <li>fighting</li>
        <li>ghost</li>
        <li>dark</li>
        <li>steel</li>
        <li>psychic</li>
        <li>flying</li>
        <li>rock</li>
        <li>ice</li>
        <li>dragon</li>
      </ul>
    </div>
    <div className={classes.container}>
      <div className={`${classes.drop} ${classes.name}`} onClick={dropGenHandler}>
        <p>Generation</p>
        <img className={classes.down }src="img/triangle.svg" alt="" />
      </div>
      <ul className={`${classes.sub} ${classes.b} ${state2 ? `${classes.show}` : ''}`}>
        <li>Generation-i</li>
        <li>Generation-ii</li>
        <li>Generation-iii</li>
        <li>Generation-iv</li>
        <li>Generation-v</li>
        <li>Generation-vi</li>
        <li>Generation-vii</li>
        <li>Generation-viii</li>
      </ul>
    </div>
    <div className={classes.container}>
      <div className={`${classes.drop} ${classes.generation}`} onClick={dropEggHandler}>
        <p>Egg group</p>
        <img className={classes.down} src="img/triangle.svg" alt="" />
      </div>
      <ul className={`${classes.sub} ${classes.c} ${state3 ? `${classes.show}` : ''}`}>
        <li>monster</li>
        <li>water1</li>
        <li>water2</li>
        <li>water3</li>
        <li>bug</li>
        <li>flying</li>
        <li>field</li>
        <li>fairy</li>
        <li>grass</li>
        <li>human-like</li>
        <li>mineral</li>
        <li>amorphous</li>
        <li>ditto</li>
        <li>dragon</li>
        <li>no egg group</li>
      </ul>
    </div>
  </div>
  </>
  )
}

export default Filters 
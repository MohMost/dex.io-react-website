import classes from './MainContent.module.css'

function MainContent(){
  
  return (
    <>
     <div className={classes.pokeList}>

     </div>
     <a className={classes.scroll} href="https://www.youtube.com/watch?v=fX3mei-GB2c">
       <img className={classes.arrow} src="./img/right.png" alt=""/>
     </a>
    </>
  )
}

export default MainContent
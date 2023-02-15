import classes from './Header.module.css'

function Header (){
  return (
    <>
      <header className={classes.header}>
      <div className={classes.logo}>
        <img src="https://firebasestorage.googleapis.com/v0/b/pokemoh-ad0fa.appspot.com/o/icons%2Fdexwebsite%2Fdarkball.png?alt=media&token=a4a6fffc-6617-48b6-be6e-04eb6f274bc7" alt="" width="35px" />
        <a className={classes.title} href>DEX<span className={classes.io}>.IO</span></a>
      </div>

      <nav className={classes.navbar}>
        <ul>
          <li><a href="indexfr.html" className={classes.language}>FR</a></li>
          <li><img className={classes.mode} src="./img/light.svg" alt="" /></li>
          <li><img className={classes.user} src="./img/user.svg" alt="" /></li>
        </ul>
      </nav>
     </header>
     <div className={classes.h1}>
      <h1>
        <p>A PokeDex Project By </p>
        <span className={classes.most}>Moh Most</span>
      </h1>
     </div>
     
    </>
  )
}

export default Header
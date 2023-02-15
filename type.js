
import Pokedex from "pokedex-promise-v2"; 



const p = new Pokedex()


  p.getTypesList()
  .then((response) => {
    return response
  })
  .then(data=> {
    for (let i = 0; i < 18; i++){
      console.log(data.results[i].name)
    }
  } )
  .catch((error) => {
    console.log('There was an ERROR: ', error);
  });



import Header from './components/Header';
import MainContent from './components/MainContent';
import SearchFilter from './components/SearchFilter';


function App (){
  return (
    <>
      <Header />
      <SearchFilter/>
      {<MainContent/>}
    </>
  )
}

export default App;

import logo from './logo.svg';
import './App.scss';
import CryptoCard from './components/CryptoCard/CryptoCard';
import SearchBar from './components/SearchBar/SearchBar'

function App() {


let searchText = ''


  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=6487&page=1&sparkline=false&price_change_percentage=24h"


  const getCoins = async () => {
    //fetch data from url
    const coinPromise = await fetch(url);
    const coins = await coinPromise.json()
    
    return coins

  }

  getCoins()



  
  

  const getInputFromSearch = (e) => {
    searchText = e.target.value;
    console.log(searchText)
   
    return searchText
    }


   




 
  return (
    <div className="App">
      <SearchBar getInput = {getInputFromSearch} searchText={searchText}/>
      <CryptoCard   />
    </div>
  );
}

export default App;

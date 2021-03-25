import './App.css';
import RecipeContainer from './Containers/RecipeContainer'
import Navbar from './Components/Navbar'

function App() {


  // const fetchFavorites = async () => {
  //   const response = await fetch('http://localhost:3000/favorite_recipes');
  //   const json = await response.json();
  //   console.log("favorites", json)
  // };

  // fetchFavorites();

  return (
    <div className="App">
      <Navbar />
      <RecipeContainer />
    </div>
  );
}

export default App;

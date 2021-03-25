import './App.css';
// import React, { useState, useEffect } from 'react'
import RecipeContainer from './Containers/RecipeContainer'

function App() {


  // const fetchFavorites = async () => {
  //   const response = await fetch('http://localhost:3000/favorite_recipes');
  //   const json = await response.json();
  //   console.log("favorites", json)
  // };


  // fetchFavorites();


  return (
    <div className="App">
      <RecipeContainer />
    </div>
  );
}

export default App;

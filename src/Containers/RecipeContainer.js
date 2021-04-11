import { useState, useEffect } from 'react'
// import { CURRENT_USER } from '../current_user'
import RecipeList from '../Components/RecipeList'
import RecipeFilter from '../Components/RecipeFilter'
import { useRecipeContext } from '../RecipeContext/state'


function RecipeContainer() {

const {recipes, setRecipes} = useRecipeContext();

  const [favorites, setFavorites] = useState([]);
  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes'

useEffect( () => {
    const fetchFavorites = async () => {
        const response = await fetch(favoriteRecipeUrl)
        const data = await response.json();

        setFavorites(data);
    };
    fetchFavorites();
  }, []);

  const [recipeSelection, setRecipeSelection] = useState('all');

  const changeHandler = (e) => {
    setRecipeSelection({ 
      state: e.target.value
    })
    // console.log(e.target.value)
  }



  console.log(recipes)
  return (
    <div>
      <RecipeFilter changeHandler={changeHandler} />
      <RecipeList currentSelection={recipeSelection} favorites={favorites} recipes={recipes} />
    </div>
  );
};

export default RecipeContainer;
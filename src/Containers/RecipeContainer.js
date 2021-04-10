import { useState, useEffect } from 'react'
// import { CURRENT_USER } from '../current_user'
import RecipeList from '../Components/RecipeList'
import RecipeFilter from '../Components/RecipeFilter'


function RecipeContainer() {


//fetch all recipes
const [recipes, setRecipes] = useState([]);
const recipeUrl = 'http://localhost:3000/recipes'

useEffect( () => {
    const fetchRecipes = async () => {
        const response = await fetch(recipeUrl)
        const data = await response.json();

        setRecipes(data);
    };
    fetchRecipes();
  }, []);

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
    console.log(e.target.value)
  }

  return (
    <div>
      <RecipeFilter changeHandler={changeHandler} />
      <RecipeList currentSelection={recipeSelection} favorites={favorites} recipes={recipes} />
    </div>
  );
};

export default RecipeContainer;

/*
export const getStaticProps = async () => {
  const res = await fetch ('http://localhost:3000/recipes')
  const recipes = await res.json();

  return {
    props: {
      recipes
    }
  }
}
*/
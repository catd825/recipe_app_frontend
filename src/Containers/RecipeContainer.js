import { useState, useEffect } from 'react'
import RecipeItem from '../Components/RecipeItem'

function RecipeContainer() {
const [recipes, recipeState] = useState([]);
const recipeUrl = 'http://localhost:3000/recipes'

useEffect( () => {
    const fetchRecipes = async () => {
        const response = await fetch(recipeUrl)
        const json = await response.json();

        recipeState(json);
    };
    fetchRecipes();
  }, []);

  const recipeCard = () => {
    return recipes.map(recipe => <RecipeItem key={recipe.id} data={recipe} />)
  }

  console.log(recipes)
  return (
    <div>
      {recipeCard()}
    </div>
  );
};

export default RecipeContainer;
import { useState, useEffect } from 'react'
import RecipeItem from '../Components/RecipeItem'

function RecipeContainer() {
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
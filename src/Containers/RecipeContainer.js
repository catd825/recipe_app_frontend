import { useState, useEffect } from 'react'
import RecipeList from '../Components/RecipeList'

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


  //set state if user chooses to see their created recipes
  const [myRecipes, setMyRecipes] = useState(false)
  const toggleMyRecipes = () => {
      return myRecipes === false ? setMyRecipes(true) : setMyRecipes(false)
  }

  return (
    <div>

      <button onClick={toggleMyRecipes}>
          View your created recipes 
      </button>&nbsp;&nbsp;&nbsp;

      <RecipeList recipes={recipes} myRecipes={myRecipes} />
    </div>
  );
};

export default RecipeContainer;
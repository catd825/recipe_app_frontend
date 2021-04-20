import { useState, useEffect } from 'react'
// import { CURRENT_USER } from '../current_user'
import RecipeList from '../Components/RecipeList'
import RecipeFilter from '../Components/RecipeFilter'
import { useRecipeContext } from '../RecipeContext/state'


function RecipeContainer() {

  const {recipes, favorites} = useRecipeContext();
  const [recipeSelection, setRecipeSelection] = useState('all');

  const changeHandler = (e) => {
    setRecipeSelection({ 
      state: e.target.value
    })
  }
  console.log(recipes.map(recipe => recipe.recipe_creator_id))

  return (
    <div>
      <RecipeFilter changeHandler={changeHandler} />
      <RecipeList currentSelection={recipeSelection} favorites={favorites} recipes={recipes} />
    </div>
  );
};

export default RecipeContainer;
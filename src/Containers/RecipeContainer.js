import { useState } from 'react'
import RecipeList from '../Components/RecipeList'
import RecipeFilter from '../Components/RecipeFilter'
import { useRecipeContext } from '../RecipeContext/state'


function RecipeContainer() {

  const {recipes, favorites} = useRecipeContext();
  const [recipeSelection, setRecipeSelection] = useState('all');

  const changeHandler = (e) => {
    setRecipeSelection({ 
      state: e.currentTarget.value
    })
    console.log(recipeSelection)
  }

  return (
    <div>
      <RecipeFilter changeHandler={changeHandler} />
      <RecipeList currentSelection={recipeSelection} favorites={favorites} recipes={recipes} />
    </div>
  );
};

export default RecipeContainer;
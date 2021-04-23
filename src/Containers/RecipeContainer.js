import { useState } from 'react'
import RecipeList from '../Components/RecipeList'
import RecipeFilter from '../Components/RecipeFilter'
import { useRecipeContext } from '../RecipeContext/state'
import SearchBar from '../Components/SearchBar'

function RecipeContainer() {

  const {recipes, favorites} = useRecipeContext();
  const [recipeSelection, setRecipeSelection] = useState('all');

  const changeHandler = (e) => {
    setRecipeSelection({ 
      state: e.currentTarget.value
    })
    console.log(recipeSelection)
  }

  const [searchValue, setSearchValue] = useState('')

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchRecipes = () => {
      return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const searchFavorites = () => {
      return favorites.filter(recipe => recipe.recipe_name.toLowerCase().includes(searchValue.toLowerCase()))
  }


  return (
    <>
    <div className='navbar'>
      <SearchBar 
        searchHandler={searchHandler} 
        searchValue={searchValue} 
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <RecipeFilter 
        changeHandler={changeHandler} 
      /> 
    </div>  
      <RecipeList 
        searchRecipes={searchRecipes()} 
        searchFavorites={searchFavorites()} 
        currentSelection={recipeSelection} 
        favorites={favorites} 
        recipes={recipes} 
      />
    </>
  );
};

export default RecipeContainer;
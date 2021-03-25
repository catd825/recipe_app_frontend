import { useState, useEffect } from 'react'

function RecipeContainer() {
const [recipes, recipeState] = useState([]);
const recipeUrl = 'http://localhost:3000/recipes'

useEffect( () => {
    const fetchRecipes = async  () => {
        const response = await fetch(recipeUrl)
        const json = await response.json();

        recipeState(json);
    };
    fetchRecipes();
  }, []);

//   console.log(recipes.length)
  return (
    <div>
      {recipes.length !== 0 ? recipes.map(data => <div><img alt="img" style={{ height: '250px'}}src={data.img_url} /> {data.title} </div>) : null}
    </div>
  );
};

export default RecipeContainer;
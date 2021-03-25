import React, { useState, useEffect } from 'react'

function RecipeContainer() {
const [recipes, recipeState] = useState([]);

useEffect(async () => {
    const fetchRecipes = await fetch('http://localhost:3000/recipes').then(res => res.text())
    recipeState(fetchRecipes)
}, []);

  return (
      <div>
          {recipes}
      </div>
  )
}

export default RecipeContainer
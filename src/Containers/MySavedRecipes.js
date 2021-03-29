import { useState, useEffect } from 'react'
import SavedRecipeCard from '../Components/SavedRecipeCard'

export default function MySavedRecipes () {
    
    //fetch favorite_recipes
  const [favorites, setFavorites] = useState([])
  const favoritesUrl = 'http://localhost:3000/favorite_recipes'

  useEffect ( () => {
      const fetchFavorites = async () => {
          const response = await fetch(favoritesUrl)
          const data = await response.json()
          setFavorites(data)
      }
      fetchFavorites();
  }, []);


    const savedRecipeCard = () => {
        return favorites.map((recipes => <SavedRecipeCard key={recipes.id} data={favorites} />))
    }
    
    console.log(favorites)
    return (
        <>
            {savedRecipeCard()}
        </>
    )
}
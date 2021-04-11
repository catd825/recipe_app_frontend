import { createContext, useContext, useState, useEffect } from 'react'

const RecipeContext = createContext(); //creates a store

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const recipeUrl = 'http://localhost:3000/recipes'
    const [favorites, setFavorites] = useState([]);
    const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes'

    useEffect( () => {
        const fetchRecipes = async () => {
            const response = await fetch(recipeUrl)
            const data = await response.json();
    
            setRecipes(data);
        };
        fetchRecipes();
      }, []);

    useEffect( () => {
        const fetchFavorites = async () => {
            const response = await fetch(favoriteRecipeUrl)
            const data = await response.json();
            setFavorites(data);
        };
        fetchFavorites();
      }, []);

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes, favorites, setFavorites }}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipeContext = () => {
    return useContext(RecipeContext)
}
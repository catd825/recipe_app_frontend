import { createContext, useContext, useState, useEffect } from 'react'

const RecipeContext = createContext(); //creates a store

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);  

    const recipeUrl = 'http://localhost:3000/recipes'

    useEffect( () => {
        const fetchRecipes = async () => {
            const response = await fetch(recipeUrl)
            const data = await response.json();
    
            setRecipes(data);
        };
        fetchRecipes();
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
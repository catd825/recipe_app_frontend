import { useRouter } from 'next/router'
import { CURRENT_USER } from '../../current_user'
import { useState } from 'react'
import EditForm from '../../Components/EditForm'
import AddToFavorites from '../../Components/AddToFavorites'
import RemoveFromFavorites from '../../Components/RemoveFromFavorites'
import { useRecipeContext } from '../../RecipeContext/state'


export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:3000/recipes')
    const data = await response.json();

    const paths = data.map(recipe => {
        return {
            params: { id: recipe.id.toString() }
        }
    })

    return {
        paths,
        fallback: false // redirects to 404 page
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id; 
    const response = await fetch('http://localhost:3000/recipes/' + id)
    const recipe = await response.json();

    return {
        props: { 
            recipe
        }
    }
}

const ShowPage = ({ recipe }) => {
    const router = useRouter()
    const current_user = CURRENT_USER
    const {recipes, setRecipes, favorites} = useRecipeContext();
    const [currentRecipe, setCurrentRecipe] = useState(recipe)
    const [editState, setEditState] = useState(null)

    const editHelper = (updatedRecipeObj) => {
        setCurrentRecipe(updatedRecipeObj)
    }

    const deleteHandler = async (recipeId) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }
        await fetch('http://localhost:3000/recipes/' + recipeId, configObj)
        const revisedRecipeArray = recipes.filter(recipe => recipe.id !== recipeId)
        setRecipes(revisedRecipeArray)
        router.push('http://localhost:3001/recipes')
    }
    
    //checks to see if this recipe is saved by the user
    const recipeSavedByUser = () => {
        let arr = favorites.filter(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id)
        return arr.length === 1 ? true : false
    }

    //grabs ID of favorite
    const userFavorite = () => {
        let arr = favorites.map(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id ? favorite.id : null)
        return arr.length > 0 && parseInt(arr.filter(favorite => favorite !== null))
    }

    return (
        <> 
        <div className="show-card">
            <p>Current User: {current_user} Created By:{currentRecipe.recipe_creator_id}</p>
            <h1>{currentRecipe.title}</h1>
            <p><img src={currentRecipe.img_url} style={{height:'250px'}} alt='' /></p>
            <p>{currentRecipe.description}</p>
            <p>{currentRecipe.ingredients}</p>
            <p>{currentRecipe.instructions}</p>
            <button onClick={() => router.push('http://localhost:3001/recipes/')}>Back to Main</button>
            
            {/* Edit / Delete buttons only appear if current user is the creator */}            
            {current_user === recipe.recipe_creator_id &&
                <>
                    <button onClick={() => setEditState(!editState)}>Edit</button>
                    <button onClick={() => deleteHandler(currentRecipe.id)}>Delete</button> 
                </>
            }

            {/* If not current user and current recipe is saved by user, give option to unsave */}
            {current_user !== recipe.recipe_creator_id && recipeSavedByUser() &&
                <>
                    <RemoveFromFavorites 
                    userFavorite={userFavorite()} 
                    recipe={recipe}/>
                </>
            }
            
            {/* If not current user and current recipe is saved by user, give option to save */}
            {current_user !== recipe.recipe_creator_id && !recipeSavedByUser() &&
                <>
                    <AddToFavorites 
                    recipe={recipe}/>
                </>
            }

            {/* toggle edit state if button is clicked on and show form */}
            {editState === true ? <EditForm 
                setEditState={setEditState} 
                key={recipe.id} 
                recipe={recipe} 
                editHelper={editHelper} 
                formType="Edit" /> 
                : 
                <></>
            }
        </div>
        </>
    )
}

export default ShowPage
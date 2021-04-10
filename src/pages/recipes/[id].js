import { useRouter } from 'next/router'
import { CURRENT_USER } from '../../current_user'
import { useState } from 'react'
import EditForm from '../../Components/EditForm'

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
            recipe,
            id
        }
    }
}

const ShowPage = ({ recipe, id }) => {
    const router = useRouter()
    const current_user = CURRENT_USER

    //set state variable for recipe show page, with a default state of the current recipe object
    // const [editRecipe, setEditRecipe] = useState(recipe)

    // console.log(recipe)

    //to edit, if id matches, make a copy of original object and reset state to only modify changed values
    // const editHelper = (editedRecipeObj) => {
    //     console.log(editedRecipeObj)
    //     setEditRecipe(
    //         {...editRecipe, 
    //         editedRecipeObj}
    //     )
    //     // setRecipeShowPage({...recipeShowPage}, editedRecipeObj)
    // }

    const [editState, setEditState] = useState(null)

    // console.log(editState)
    return (
        <> 
        <div className="show-card">
            <h1>{recipe.title}</h1>
            <p><img src={recipe.img_url} style={{height:'250px'}} alt='' /></p>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <button onClick={() => router.push('/recipes/')}>Back to Main</button>
            
            {/* Edit / Delete buttons only appear if current user is the creator */}            
            {current_user === recipe.recipe_creator_id ? 
                <>
                    <button onClick={() => setEditState(!editState)}>Edit</button>
                    {/* <button onClick={() => router.push(`/recipes/${recipe.id}/edit`)}>Edit</button> */}
                    <button onClick={() => console.log("delete!")}>Delete</button> 
                </>
                : 
                <>
                    <button onClick={() => console.log("save!")}>Save</button> 
                </>
            }
            {editState === true ? <EditForm editHelper={editHelper} setEditState={setEditState} key={recipe.id} data={recipe}/> : <></>}
        </div>
        </>
    )
}

export default ShowPage
import { useRouter } from 'next/router'
import { CURRENT_USER } from '../../current_user'
import { useState } from 'react'
import EditForm from '../../Components/EditForm'
import SaveButton from '../../Components/SaveButton'

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
    const [currentRecipe, setCurrentRecipe] = useState(recipe)

    const [editState, setEditState] = useState(null)

    const editHelper = (updatedRecipeObj) => {
        setCurrentRecipe(updatedRecipeObj)
    }

    return (
        <> 
        <div className="show-card">
            <h1>{currentRecipe.title}</h1>
            <p><img src={currentRecipe.img_url} style={{height:'250px'}} alt='' /></p>
            <p>{currentRecipe.description}</p>
            <p>{currentRecipe.ingredients}</p>
            <p>{currentRecipe.instructions}</p>
            <button onClick={() => router.push('/recipes/')}>Back to Main</button>
            
            {/* Edit / Delete buttons only appear if current user is the creator */}            
            {current_user === recipe.recipe_creator_id ? 
                <>
                    <button onClick={() => setEditState(!editState)}>Edit</button>
                    <button onClick={() => console.log("delete!")}>Delete</button> 
                </>
                : 
                <>
                    <SaveButton recipe={recipe} key={recipe.id} />
                    {/* <button onClick={() => console.log("save!")}>Save</button>  */}
                </>
            }
            {editState === true ? <EditForm setEditState={setEditState} key={recipe.id} recipe={recipe} editHelper={editHelper} /> : <></>}
        </div>
        </>
    )
}

export default ShowPage
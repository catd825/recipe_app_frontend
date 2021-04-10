import { useRouter } from 'next/router'
import { CURRENT_USER } from '../../CURRENT_USER'
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
            recipe
        }
    }
}

const ShowPage = ({ recipe }) => {
    const router = useRouter()
    const [editState, setEditState] = useState(null)

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
            {CURRENT_USER === recipe.recipe_creator_id ? 
                <>
                    <button onClick={() => setEditState(!editState)}>Edit</button>
                    <button onClick={() => console.log("delete!")}>Delete</button> 
                </>
                : 
                <>
                    <button onClick={() => console.log("save!")}>Save</button> 
                </>
            }
            {editState === true ? <EditForm setEditState={setEditState} key={recipe.id} data={recipe}/> : <></>}
        </div>
        </>
    )
}

export default ShowPage
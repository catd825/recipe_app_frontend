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
        paths, // short for paths: paths
        fallback: false // we can use this to redirect to 404 page when it exists
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id; 
    const response = await fetch('http://localhost:3000/recipes/' + id)
    const data = await response.json();

    return {
        props: { 
            recipe: data
        }
    }
}

const ShowPage = ({ recipe }) => {
    const router = useRouter()
    const current_user = CURRENT_USER

    const [editState, setEditState] = useState(null)

    console.log(editState)
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
            {editState === true ? <EditForm key={recipe.id} data={recipe}/> : <></>}
        </div>
        </>
    )
}

export default ShowPage
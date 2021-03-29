import { useRouter } from 'next/router'
import Navbar from '../../Components/Navbar'
import { CURRENT_USER } from '../../current_user'

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


const ShowPage = ({recipe}) => {

    const router = useRouter()
    const current_user = CURRENT_USER

    console.log(recipe)
    return (
        <> 
        <div>
            <p>{recipe.title}</p>
            <p><img src={recipe.img_url} style={{height:'250px'}} alt='' /></p>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <button onClick={() => router.push('/')}>Back to Main</button>
            
            {/* Edit / Delete buttons only appear if current user is the creator */}            
            {current_user === recipe.recipe_creator_id ? 
                <>
                    <button onClick={() => console.log("edit!")}>Edit</button>
                    <button onClick={() => console.log("delete!")}>Delete</button> 
                </>
                : null }
        </div>
        </>
    )
}

export default ShowPage
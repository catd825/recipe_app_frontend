import { useUserContext } from '../UserContext/state'
import { useRecipeContext } from '../RecipeContext/state'


const AddToFavorites = ({ recipe }) => {

    const {favorites, setFavorites} = useRecipeContext();
    const {user} = useUserContext();
    const current_user = user.user.id

    const addFavorite = async () => {
        const favObj = {
            recipe_id: recipe.id,
            recipe_img: recipe.img_url,
            favorited: true,
            recipe_liker_id: current_user,
            recipe_name: recipe.title
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(favObj)
        }
        
        const res = await fetch('http://localhost:3000/favorite_recipes', configObj)
        const data = await res.json();
        const updatedFavorites = [...favorites, data]
        setFavorites(updatedFavorites)
    }

    return(
        <button onClick={addFavorite}>Add To Favorites</button>
    )
}
export default AddToFavorites
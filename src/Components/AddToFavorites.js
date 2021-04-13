import { CURRENT_USER } from '../current_user'
const current_user = CURRENT_USER


const AddToFavorites = ({recipe}) => {

    const addFavorite = async () => {
        console.log("add favorite!")
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
        const data = await res.json()

    }

    return(
        <button onClick={addFavorite}>Add To Favorites</button>
    )
}
export default AddToFavorites
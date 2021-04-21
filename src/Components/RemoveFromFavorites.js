import { useRecipeContext } from '../RecipeContext/state'

const RemoveFromFavorites = ({ userFavorite }) => {

    const {favorites, setFavorites} = useRecipeContext();

    const removeFavorite = async () => {
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
        const res  = await fetch(`http://localhost:3000/favorite_recipes/${userFavorite}`, configObj)
        const data = await res.json();
        const updatedFavorites = favorites.filter(favorite => favorite.id !== data.id)
        setFavorites(updatedFavorites)

    }

    return(
        <button onClick={removeFavorite}>Remove from Favorites</button>
    )
}
export default RemoveFromFavorites
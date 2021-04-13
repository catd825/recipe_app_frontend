const RemoveFromFavorites = ({ recipe, userFavorite }) => {

    const removeFavorite = () => {
        console.log('remove from favorites', userFavorite)
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
        fetch(`http://localhost:3000/favorite_recipes/${userFavorite}`, configObj)
        .then(res => res.json())
    }

    return(
        <button onClick={removeFavorite}>Remove from Favorites</button>
    )
}
export default RemoveFromFavorites
const RemoveFromFavorites = ({ recipe, userFavorite }) => {

    const removeFavorite = async () => {
        console.log('remove from favorites', userFavorite)
        // const configObj = {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     }
        // }
        // const res = await fetch(`http://localhost:3000/favorite_recipes/${userFavorite}`, configObj)
        // const data = await res.json();
    }

    return(
        <button onClick={removeFavorite}>Remove from Favorites</button>
    )
}
export default RemoveFromFavorites
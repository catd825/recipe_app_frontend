const AddToFavorites = ({recipe}) => {

    const addFavorite = () => {
        console.log("add favorite!")
    }

    return(
        <button onClick={addFavorite}>Add To Favorites</button>
    )
}
export default AddToFavorites
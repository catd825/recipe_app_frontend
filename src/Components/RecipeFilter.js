export default function RecipeFilter ({changeHandler}) {
    return (
        <div className="recipe-filter">
            <select name="recipe_filter" onChange={changeHandler}>
                <option value="all">View All Recipes</option>
                <option value="saved">My Saved Recipes</option>
                <option value="created">Recipes I created</option>
            </select>
        </div>
    ) 
}
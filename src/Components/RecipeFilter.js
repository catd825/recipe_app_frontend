export default function RecipeFilter ({changeHandler}) {
    return (
        <div style={{padding: '1em' }}>
        <select name="recipe_filter" onChange={changeHandler}>
            <option value="all">View All Recipes</option>
            <option value="saved">My Saved Recipes</option>
            <option value="created">Recipes I created</option>
        </select>
        </div>
    ) 
}
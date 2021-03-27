import { CURRENT_USER } from '../current_user'

export default function SavedRecipeCard ( {data} ) {
    const saved_by = data.recipe_liker_id
    const current_user = CURRENT_USER

    console.log(data)
    return (
        <>
        {saved_by === current_user ? 
        // 'return'
        <div> 
            <img src={data.recipe_img} style={{height:'250px'}} alt='' />
            <p>{data.recipe_name}</p>
        </div> 
        : null}
        </>
    )
}
import { CURRENT_USER } from '../current_user'

export default function SavedRecipeCard ({data}) {
    const saved_by = data.recipe_liker_id
    const current_user = CURRENT_USER

    return (
        <>
        {saved_by === current_user ? 
        'return'
        // <div> 
        //     <img src={props.data.img_url} style={{height:'250px'}} alt='' />
        //     <p>{props.data.title}</p>
        // </div> 
        : null}
        </>
    )
}
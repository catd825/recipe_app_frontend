export default function MyRecipeItem (props) {
    // console.log("recipe creator id", props.data.recipe_creator_id)
    const current_user = 16
    
    return(
        <>
        {props.data.recipe_creator_id === current_user ? 
        <div> 
            <img src={props.data.img_url} style={{height:'250px'}} alt='' />
            <p>{props.data.title}</p>
        </div> : null }
        </>
    )
}
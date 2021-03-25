

export default function RecipeItem (props) {
    console.log(props)
    return(
        <div> 
            <img src={props.data.img_url} style={{height:'250px'}} alt='' />
            <p>{props.data.title}</p>
        </div>
    )
}


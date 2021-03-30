import Link from 'next/link';
import { CURRENT_USER } from '../current_user'

export default function RecipeItem ({ recipes, favorites }) {

    console.log("data", recipes, "favorites", favorites)
    return(
        <>

        <div> 
            <img src={recipes.img_url} style={{height:'250px'}} alt='' />
            <p><Link key={recipes.id} href={'/recipes/' + recipes.id}>{recipes.title}</Link></p>
        </div>
        </>
    )
}












/*
export default function RecipeItem (props) {
    console.log(props)
    return(
        <div> 
            <img src={recipes.img_url} style={{height:'250px'}} alt='' />
            <p>{recipes.title}</p>
        </div>
    )
}
*/
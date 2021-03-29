import Link from 'next/link';
import { CURRENT_USER } from '../current_user'

export default function RecipeItem ({ recipes, favorites }) {
    const current_user = CURRENT_USER

    // console.log("data", recipes, "favorites", favorites, "current user", current_user)
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
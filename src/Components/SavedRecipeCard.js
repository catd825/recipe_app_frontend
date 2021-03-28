import Link from 'next/link';
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
            <p><Link key={data.id} href={'/recipes/' + data.id}>{data.recipe_name}</Link></p>
        </div> 
        : null}
        </>
    )
}
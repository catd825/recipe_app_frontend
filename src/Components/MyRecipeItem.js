import Link from 'next/link';
import { CURRENT_USER } from '../current_user'

export default function MyRecipeItem ({data}) {
    const current_user = CURRENT_USER
    return(
        <>
        {data.recipe_creator_id === current_user ? 
        <div> 
            <img src={data.img_url} style={{height:'250px'}} alt='' />
            <p><Link key={data.id} href={'/' + data.id}>{data.title}</Link></p>
        </div> : null }
        </>
    )
}
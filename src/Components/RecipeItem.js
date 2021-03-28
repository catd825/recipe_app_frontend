import Link from 'next/link';
import { CURRENT_USER } from '../current_user'

export default function RecipeItem ({data}) {
    const current_user = CURRENT_USER
    return(
        <div> 
            <img src={data.img_url} style={{height:'250px'}} alt='' />
            <p><Link key={data.id} href={'/recipes/' + data.id}>{data.title}</Link></p>
        </div>
    )
}

/*
export default function RecipeItem (props) {
    console.log(props)
    return(
        <div> 
            <img src={data.img_url} style={{height:'250px'}} alt='' />
            <p>{data.title}</p>
        </div>
    )
}
*/
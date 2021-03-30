import Link from 'next/link';

export default function RecipeItem ({ recipes, favorites, selection }) {

    console.log("data", recipes, "favorites", favorites, "selection", selection)
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
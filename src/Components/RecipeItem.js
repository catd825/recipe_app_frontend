import Link from 'next/link';

export default function RecipeItem ({ recipes }) {

    // console.log("recipes", recipes)
    return(
        <> 
            <div className="card"> 
                <img src={recipes.img_url} style={{height:'250px'}} alt='' />
                <p>
                    <Link hello="world" key={recipes.id} href={'/recipes/' + recipes.id}>{recipes.title}</Link>
                </p>
            </div>
        </>
    )
}


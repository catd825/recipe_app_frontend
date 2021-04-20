import Link from 'next/link';

export default function RecipeItem ({ recipes }) {
    return(
        <> 
            <div className="card"> 
                <img src={recipes.img_url} style={{height:'250px'}} className="img-card" alt='' />
                <p>
                    <Link key={recipes.id} href={'/recipes/' + recipes.id}>{recipes.title}</Link>
                </p>
            </div>
        </>
    )
}


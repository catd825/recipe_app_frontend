import Link from 'next/link';

export default function Navbar () {
    return (
        <div style={{ padding: '1em', size:'40px' }}>
            <b>
                Welcome to the recipe app!
                <br/>
            <Link href="/create_recipe" passHref={true}>
                Add Recipe 
            </Link> &nbsp;&nbsp;&nbsp;
            <Link href="/saved_recipes" passHref={true}>
                View your saved recipes 
            </Link>&nbsp;&nbsp;&nbsp;
            <Link href="/my_recipes" passHref={true}>
                View your created recipes 
            </Link>&nbsp;&nbsp;&nbsp;
            <Link href="/recipes" passHref={true}>
                Go Home 
            </Link>  
            </b>
        </div>
    )
}
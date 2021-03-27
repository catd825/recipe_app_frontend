import Link from 'next/link';

export default function Navbar () {
    return (
        <div style={{ padding: '2em', size:'40px' }}>
            <b>Welcome to the recipe app!
            <Link href="/create_recipe" passHref={true}>
                Add Recipe 
            </Link> 
            <Link href="/saved_recipes" passHref={true}>
                View your saved recipes 
            </Link>
            <Link href="/my_recipes" passHref={true}>
                View your created recipes 
            </Link>
            <Link href="/" passHref={true}>
                Go Home 
            </Link>  </b>
        </div>
    )
}
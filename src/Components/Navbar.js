import Link from 'next/link';

export default function Navbar () {
    return (
        <div style={{ padding: '2em', size:'40px' }}>
            <b>Welcome to the recipe app!
            <Link href="/create_recipe" passHref={true}>
                Add Recipe 
            </Link> 
                / View your saved recipes / View your created recipes
                / <Link href="/" passHref={true}>
                Go Home 
            </Link>  </b>
        </div>
    )
}
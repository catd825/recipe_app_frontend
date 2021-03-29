import Link from 'next/link';
import { useState } from 'react'

export default function Navbar () {

    return (

        <div style={{ padding: '1em', size:'40px' }}>
            <b>
                Welcome to the recipe app!
                <br/>
            <Link href="/recipes/new">
                Add Recipe 
            </Link> &nbsp;&nbsp;&nbsp;
            <Link href="/">
                Go Home 
            </Link>  
            </b>
        </div>
    )
}

/*
export default function Navbar () {
    return (
        <div style={{ padding: '1em', size:'40px' }}>
            <b>
                Welcome to the recipe app!
                <br/>
            <Link href="/create_recipe">
                Add Recipe 
            </Link> &nbsp;&nbsp;&nbsp;
            <Link href="/saved_recipes">
                View your saved recipes 
            </Link>&nbsp;&nbsp;&nbsp;
            <Link href="/my_recipes">
                View your created recipes 
            </Link>&nbsp;&nbsp;&nbsp;
            <Link href="/">
                Go Home 
            </Link>  
            </b>
        </div>
    )
}
*/
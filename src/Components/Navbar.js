import Link from 'next/link';
import { useState } from 'react'

export default function Navbar () {

    return (

        <div className="navbar">
            <b>
                Welcome to the recipe app!
                <br/>
            <Link href="/recipes/new">
                Add Recipe 
            </Link> &nbsp;&nbsp;&nbsp;
            <Link href="/recipes">
                Go Home 
            </Link>  
            </b>
        </div>
    )
}

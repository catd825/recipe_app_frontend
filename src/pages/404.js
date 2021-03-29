import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect( () => {
        setTimeout(() => {
            router.push('/')
        },100)
    }, [])

    return (
        <div>
            <h1>
                Oops (add redirect) 
            </h1>
        </div>
    )
}

export default NotFound;
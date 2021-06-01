import Link from 'next/link';
import { useUserContext } from '../UserContext/state'

export default function Navbar () {
    const {user, logOutHandler} = useUserContext();
    return (
        <div className="header">
            { user ? 
            <>
            <b>
                <Link href={'/recipes/'}>
                    Recipe App
                </Link>
            </b>
                <Link href={'/login/'} onClick={logOutHandler}>
                    Log Out
                </Link>
            </>
            :
                "something else!!"
            }
        </div>
    )
}

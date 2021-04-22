import Link from 'next/link';
import { MdAdd } from "react-icons/md"
// import { AddCircleOutlineIcon } from '@material-ui/icons/';

export default function Footer () {

    return (

        <div className="footer">
            <b>
            <Link href="/recipes/new">
                {/* Home */}
                <MdAdd size={50}/>
            </Link>
            </b>
        </div>
    )
}

import Link from 'next/link';
import { MdAdd } from "react-icons/md"

export default function Footer () {
    return (
        <div className="footer">
            <Link href="/recipes/new">
                <MdAdd size={50}/>
            </Link>
        </div>
    )
}

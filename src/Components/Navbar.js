import Link from 'next/link';

export default function Navbar () {
    return (
        <div className="header">
            <b>
                <Link href={'/recipes/'}>
                    Recipe App
                </Link>
            </b>
        </div>
    )
}

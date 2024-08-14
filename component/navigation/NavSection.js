import Link from 'next/link'
import React from 'react'

const NavSection = ({ nav }) => {
    return (
        <nav className={nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/internet">Internet</Link>
                </li>
                <li>
                    <Link href="/homephone">HomePhone</Link>
                </li>
                <li>
                    <Link href="/">Policies</Link>
                    <ul className="submenu index-1-submenu">
                        <li>
                            <Link href="pages/disclaimer">Disclaimer</Link>
                        </li>
                        <li><Link href="pages/privacy-policy">Privacy-policy</Link></li>
                        <li><Link href="pages/terms-of-service">Terms-Of-Services</Link></li>
                    </ul>
                </li>
                

                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="pages/verizon">internet-2</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavSection
import Link from 'next/link'
import React from 'react'

const NavSection = ({nav}) => {
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
                <Link href="pages/disclaimer">Disclaimer</Link>
            </li>
            <li>
                <Link href="pages/verizon">Verizon</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavSection
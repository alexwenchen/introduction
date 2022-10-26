import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Introduction</Link>
            </li>
            <li>
                <Link href='/about'>Enjoy some scenery!</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
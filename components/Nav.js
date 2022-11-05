import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>
                  <button class="text-xl focus:outline-none text-black bg-transparent hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Introduction
                  </button>
                </Link>
            </li>
            <li>
                <Link href='/sceneries'>
                  <button class="text-xl focus:outline-none text-black bg-transparent hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Enjoy some scenery!
                  </button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
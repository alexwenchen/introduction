import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.page}>  
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </div>
  )
}

export default Layout
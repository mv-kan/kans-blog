import LogoInv from "../logo-inv"
import Link from "next/link"
import styles from './nav.module.css'


const NavLink = ({ linkText, href }) => {
    return (
        // div wrapper prevents 'a' tag from stretching in flexbox 
        <div>
            <Link href={href}>
                <a className={styles.navLink}>
                    {linkText}
                </a>
            </Link>
        </div>
    )
}

export default function MobileNav({closeNavHandle}) {
    return (
        <div className={`${styles.header}`}>
            <div className={styles.topHeader}>
                <LogoInv />
                <button className={styles.menuToggler} onClick={closeNavHandle}>
                    <span className={`${styles.closeIcon} material-icons-round`}>close</span>
                </button>
            </div>
            <nav className={styles.nav}>
                <NavLink linkText={"Blog"} href={'/blog'} />
                <NavLink linkText={"Resources"} href={'/resources'} />
                <NavLink linkText={"Snippets"} href={'/blog'} />
                <NavLink linkText={"CV"} href={'/cv'} />
            </nav>
        </div>
    )
}
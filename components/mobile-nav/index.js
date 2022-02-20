import LogoInv from "../logo-inv"
import { NavList } from "../nav-list"
import styles from './nav.module.css'



export default function MobileNav({closeNavHandle}) {
    return (
        <div className={`${styles.header}`}>
            <div className={styles.topHeader}>
                <LogoInv />
                <button className={styles.menuToggler} onClick={closeNavHandle}>
                    <span className={`${styles.closeIcon} material-icons-round`}>close</span>
                </button>
            </div>
            <NavList navClassName={styles.nav} linkClassName={styles.navLink}></NavList>
        </div>
    )
}
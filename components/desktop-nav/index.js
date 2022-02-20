import styles from './nav.module.css'
import { NavList } from '../nav-list'
export default function DesktopNav() {
    return (
        <NavList navClassName={styles.nav} linkClassName={styles.navLink}/>
    )
}
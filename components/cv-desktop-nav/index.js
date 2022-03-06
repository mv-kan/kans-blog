import CvNavList from '../cv-nav-list'
import styles from './nav.module.css'

export default function CvDesktopNav() {
    return (
        <div>
            <CvNavList 
                navClassName={styles.desktopNav}
                linkClassName={styles.navLink}/>
        </div>
    )
} 
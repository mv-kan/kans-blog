import styles from './nav.module.css'

export default function CvDesktopNav({currentSection}) {
    return (
        <div>
            <nav className={styles.desktopNav}>
                <div>
                    <a href="#profile" className={`${styles.navLink} ${currentSection === "Profile" ? styles.navLinkActive : ""}`}>Profile</a>
                </div>
                <div>
                    <a href="#experience" className={`${styles.navLink} ${currentSection === "Experience" ? styles.navLinkActive : ""}`} >Experience</a>
                </div>
                <div>
                    <a href="#contacts" className={`${styles.navLink} ${currentSection === "Contacts" ? styles.navLinkActive : ""}`} >Contacts</a>
                </div>
            </nav>
        </div>
    )
} 
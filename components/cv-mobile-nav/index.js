import LogoInv from "../logo-inv"
import CvNavList from "../cv-nav-list"
import styles from './nav.module.css'

import { useSpring, animated } from 'react-spring'
export default function CvMobileNav({ handleNavToggle, navToggled }) {

    const [animationStyles, api] = useSpring(() => ({ width: '100vw', height: '0px' }))
    api.start({ height: navToggled ? '243px' : '0px' })

    return (
        <div className={styles.mobileMenu}>
            <button className={styles.menuToggler} onClick={handleNavToggle}>
                <span className={`${styles.openIcon} material-icons-round`}>menu</span>
            </button>
            <animated.div style={animationStyles} className={styles.mobileNavWrapper}>
                <div className={`${styles.header}`}>
                    <div className={styles.topHeader}>
                        <LogoInv />
                        <button className={styles.menuToggler} onClick={handleNavToggle}>
                            <span className={`${styles.closeIcon} material-icons-round`}>close</span>
                        </button>
                    </div>
                    <CvNavList navClassName={styles.nav} linkClassName={styles.navLink}></CvNavList>
                </div>
            </animated.div>
        </div>
    )
}